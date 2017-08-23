
//用于接收空域类型
var asdType = "Circle";
//获取页面半径输入框的具体值
var asdRadius = document.getElementById("asdRedius").value;
//空域颜色
var colors = [
    "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00",
    "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707",
    "#651067", "#329262", "#5574a6", "#3b3eac"
];
//创建地图
var map = new AMap.Map('container', {
    zoom: 4
});

//用于加载基本工具，比例尺，鹰眼
AMap.plugin(['AMap.ToolBar','AMap.Scale','AMap.OverView'],
    function(){
        map.addControl(new AMap.ToolBar());

        map.addControl(new AMap.Scale());

        map.addControl(new AMap.OverView({isOpen:true}));

        map.addControl(basicControl);

    });
//引入基础控件可增加图层切换
AMapUI.loadUI(['control/BasicControl'], function(BasicControl) {
    //图层切换控件
    map.addControl(new BasicControl.LayerSwitcher({
        position: 'rt'
    }));
});

//增加单击获取当前地图坐标
var clickEventListener = map.on('click', function(e) {
    $("#lnglat").val(e.lnglat.getLng()+","+e.lnglat.getLat());
    document.getElementById("asdLngLat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat();
});

//根据传入经纬度进行标注
function addMarker(lnglatXY) {
    marker = new AMap.Marker({
        icon: "http://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
        position: lnglatXY.split(",")
    });
    var TempArr = lnglatXY.split(",");
    var TempArr1 = [];
    for(var i = 0; i < TempArr.length; i++){
        TempArr1.push(parseFloat(TempArr[i]));
    }
    lineArr.push(TempArr1);
    drawLine(lineArr);
    marker.setMap(map);//将Mrker标记存入Markers标记结合中
    map.setFitView();//页面展示Markers标记
}

//将文本框中点坐标在地图上展示
function addMarkerPoint(){
    var lnglatXY = document.getElementById("lnglat").value;
    addMarker(lnglatXY);
}
//初始化空域信息
var radioData;
$(function () {
    $(".mode").click(function () {
        if($(this).attr("value")=="圆形空域"){
            $("#redius").show();
        }else {
            $("#redius").hide();
        }
    });

})
//通过改变空域类型 而改变空域输入框的值
$("input[type=radio]").each(function () {
    $(this).click(function () {//点击选中进行切换
        $("input[id=asdShape]").val(this.value)
    });
});

var editor={};
var count = 0;
var pointArr = [];
var lineArr = [];
//点击事件获取当前坐标
var _onClick = function(e){
    new AMap.Marker({
        position : e.lnglat,
        //draggable: true, //设置点是否能别拖动
        map : map
    });
    pointArr.push(e.lnglat);
    var TempArr = [];
    TempArr.push(pointArr[count].lng);
    TempArr.push(pointArr[count].lat);
    lineArr.push(TempArr);
    drawLine(lineArr);
    map.emit('count',{count : count+=1})
}
//绑定点击事件 监听数据的增加
var clickListener;
var bind = function(){
    reset();
    clickListener = AMap.event.addListener(map, "click", _onClick);

}
var remove = function(){
    if(clickListener) {
        AMap.event.removeListener(clickListener);//移除事件，以绑定时返回的对象作为参数
    }
}
var reset = function(){//用在示例Demo中防止重复绑定
    remove()
}

var button1 = document.getElementById('bt1')
var listener1 = AMap.event.addDomListener(button1, 'click', bind);//给div绑定单击事件
var button2 = document.getElementById('bt2')
var listener2 = AMap.event.addDomListener(button2, 'click', remove);//给div绑定单击事件

//绘制空域形状
function drawLine(ArrList){
    //判断必要值是否存在
    verifyData();
    var asd_shape = $("#asdShape").val(); //空域形状
    if("多边形空域" == asd_shape){
        editor._polygon=(function(){
            return new AMap.Polygon({
                map: map,
                path: ArrList,
                strokeColor: "#d6fffc",//线颜色
                strokeOpacity: 1, //线透明度
                strokeWeight: 3, //线粗细度
                fillColor: "#f5deb3",//填充颜色
                fillOpacity: 0.35//填充透明度
            });
        })();
    }else{
        var asdRadiusParse = $("#asdRedius").val();    //圆形空域半径
        editor._circle=(function(){
            var circle = new AMap.Circle({
                center:ArrList,//圆心
                radius: asdRadiusParse,//半径
                strokeColor: "#F33", //线颜色
                strokeOpacity: 1, //线透明度
                strokeWeight: 3, //线粗细度
                fillColor: "#ee2200", //填充颜色
                fillOpacity: 0.35//填充透明度
            })
        })();
    }
}
map.setFitView();


//准备读取后台数据 为页面展现空域做准备
function edor_asdAll(asdData) {
    for(var i = 0; i < asdData.length; i++){
        if(asdData[i].asdShape == "多边形空域"){
            editor._polygon=(function(){
                return new AMap.Polygon({
                    map: map,
                    path: asdData[i].path,
                    strokeColor: colors[i%colors.length],
                    strokeOpacity: 1,
                    strokeWeight: 3,
                    fillColor: "#e4a8f5",
                    fillOpacity: 0.35
                });
            })();
            editor._polygon.setMap(map);
        }else {
            editor._circle=(function(){
                var circle = new AMap.Circle({
                    center:asdData[i].path,//圆心
                    radius: asdData[i].radius,//半径
                    strokeColor: colors[i%colors.length], //线颜色
                    // strokeColor: "#58ff4a", //线颜色
                    strokeOpacity: 1, //线透明度
                    strokeWeight: 3, //线粗细度
                    fillColor: "#eeeb2f", //填充颜色
                    fillOpacity: 0.35//填充透明度
                })
                circle.setMap(map);
                return circle;
            })();
        }
    }

}
var markers = [];
var provinces = [];
//页面初始化查询飞机实时位置
function init(){
    $.ajax({
        type: "get",
        url: "/json",
        dataType: "json",
        success: function (data){
            /*将数据库中GPS数据查询为坐标转换做准备*/
            var oldPointData = "";
            //provinces = data;
            for(var j = 0; j < data.length; j++){
                oldPointData += data[j].longitude+","+data[j].latitude+"|";
            }
            var newPointData = oldPointData.substring(0,oldPointData.length-1);
            $.ajax({
                type: 'get',
                url: 'http://restapi.amap.com/v3/assistant/coordinate/convert?locations='+newPointData+'&coordsys=gps&output=json&key=3c24b31bf9bac0687e867b01d4afd5e3',
                dataType: 'json',
                success: function(resp){
                    var dataArr = [];
                    dataArr = resp.locations.split(";");
                    for(var k=0; k<dataArr.length; k++){
                        var dataArr1 = dataArr[k].split(",");
                        for(var m = 0,n = 1; m<dataArr1.length; m+=2,n+=2){
                            var marker;
                            //自定义图标
                            var icon = new AMap.Icon({
                                image: '/image/Plan_red.png',
                                size: new AMap.Size(25, 25)
                            });
                            marker = new AMap.Marker({
                                icon: icon,
                                position: new AMap.LngLat(parseFloat(dataArr1[m]),parseFloat(dataArr1[n])),
                                offset: new AMap.Pixel(-12, -12),
                                zIndex: 101,
                                //title: provinces[h].name,
                                map: map
                            });
                            markers.push(marker);
                        }
                    }
                    map.setFitView();
                }
            });
        }
    });
}
//显示空域编辑区
function show_asd(){
    var showAsd = document.getElementById("right");
    showAsd.style.display="";
}
//隐藏空域编辑区
function hiden_Input(){
    var showAsd = document.getElementById("right");
    showAsd.style.display="none";
}
$(document).ready(function(){

    init();
    //等地图初始化后自动记载空域信息
    find_asd();
    //展示空域信息
    edor_asdAll(asdArr);
});
// 展示临时空域信息
function show_tempAsd() {
    //判断必要值是否存在
    verifyData();
    var asd_shape = $("#asdShape").val(); //空域形状
    if("圆形空域" == asd_shape){
        var asdRadius = $("#asdRedius").val(); //圆形空域半径
        if(asdRadius == null || asdRadius == ""){
            alert("请输入圆形空域半径！");
        }else {
            editor._circle = (function () {
                var circle = new AMap.Circle({
                    center: [lineArr[0].lng, lineArr[0].lat],//圆心
                    radius: parseFloat(asdRadius),//半径
                    strokeColor: "#F33", //线颜色
                    strokeOpacity: 1, //线透明度
                    strokeWeight: 3, //线粗细度
                    fillColor: "#ee2200", //填充颜色
                    fillOpacity: 0.35//填充透明度
                })
                circle.setMap(map);
                return circle;
            })();
        }
    }else {
        editor._polygon=(function(){
            return new AMap.Polygon({
                map: map,
                path: lineArr,
                strokeColor: "#0000ff",
                strokeOpacity: 1,
                strokeWeight: 3,
                fillColor: "#f5deb3",
                fillOpacity: 0.35
            });
        })();
    }
    map.setFitView();
}
//保存多边形坐标数据
var jsonArr = [];
function save_polygon() {
    //判断必要值是否存在
    if(verifyData()){
        //将页面数据进行拼装
        var strData = JsonData();
        alert(strData);
        console.log(strData);
        //用ajax 提交空域数据
        $.ajax({
            type: "post",
            url: "/showMapAirSpaceDetail/save_polygon",
            data: strData,
            contentType: "application/json",//传入数据格式为json
            success: function(resp){
                if(resp == "success"){
                    alert("数据上传成功！");
                }else {
                    alert("数据上传失败！");
                }
            }
        });
    }
}
//存储空域信息
var asdArr = [];
//展示空域信息
function find_asd() {
    $.ajax({
        type: "post",
        url: "/showMapAirSpaceDetail/find_polygon",
        async: false,
        dataType: "json",
        success: function(resp){
            //将后台数据拼装成前台所需要的类型
            var tempArr = [];
            for(var i = 0; i < resp.length; i++){
                var tempData;
                var tempArr1 = [];
                //根据空域类型将数据进行分组处理
                if(resp[i].asdShape == "多边形空域"){
                    //单独处理组成图形的坐标将 字符串类型转换为Float类型的
                    tempData = (resp[i].asdLngLat).substr(2);
                    var tempData1 = tempData.substr(0,tempData.length-2);
                    var tempArr = tempData1.split("],[");
                    for(var j = 0; j < tempArr.length; j++){
                        var tempArr2 = tempArr[j].split(",");
                        tempArr1[j] = [parseFloat(tempArr2[0]),parseFloat(tempArr2[1])];
                    }
                    asdArr[i] = {"name":resp[i].asdName,"path":tempArr1,"asdShape":resp[i].asdShape};
                }else {
                    var substrHead = (resp[i].asdLngLat).substr(2);
                    var substrFoot = substrHead.substr(0,substrHead.length-2);
                    var tempData = substrFoot.split(",");
                    var tempArr = [parseFloat(tempData[0]),parseFloat(tempData[1])];
                    asdArr[i] ={"name":resp[i].asdName,"path":tempArr,"radius":resp[i].asdRadius,"asdShape":resp[i].asdShape};
                }

            }
            console.log(asdArr);
        }
    });
}
//清空页面点标记
function clear_Marker() {
    if(confirm("你确定清空点标记么？")){
        lineArr = [];
        map.clearMap();
    }
}
//将数据拼装成json数据
function JsonData() {
    var asdName = document.getElementById("asdName").value;
    var asdCode = document.getElementById("asdCode").value;
    var asdHeight = document.getElementById("asdHeight").value;
    var asdShape = document.getElementById("asdShape").value;
    var asdType = document.getElementById("asdType").value;
    var asdStatus = document.getElementById("asdStatus").value;
    var asdRadius = document.getElementById("asdRedius").value;
    var tempArr = [];
    //第一组点坐标需做特殊处理
    tempArr[0] =  [lineArr[0].lng,lineArr[0].lat];
    for(var i = 1; i < lineArr.length; i++ ){
        tempArr[i] = lineArr[i];
    }
    var data = {
        "asdName": asdName,
        "asdCode": asdCode,
        "asdLngLat": JSON.stringify(tempArr),//此处将数组格式的坐标数据转换为json类型否则报400异常
        "asdHeight": asdHeight,
        "asdShape": asdShape,
        //空域类型为圆形时 显示半径范围
        "asdRadius": asdRadius,
        "asdType": asdType,
        "asdStatus": asdStatus
    }
    //返回JSON字符串
    return JSON.stringify(data);
}
//校验数据是否为空
function verifyData() {
    var label = true;
    var asdName = $("#asdName").val();
    var asdCode = $("#asdCode").val();
    var asdHeight = $("#asdHeight").val();
    var asdShape = $("#asdShape").val();
    if(asdCode == "" || asdCode == null){
        $("#errorMessage").html("<font color='red'>空域编号不能为空</font>");
        label = false;
        return label;
    }else {
        $("#errorMessage").html("");
    }
    if(asdName == "" || asdName == null){
        $("#errorMessage").html("<font color='red'>空域名称不能空</font>");
        label = false;
        return label;
    }else {
        $("#errorMessage").html("");
    }
    if(asdHeight == "" || asdHeight == null){
        $("#errorMessage").html("<font color='red'>空域高度不能为空</font>");
        label = false;
        return label;
    }else {
        $("#errorMessage").html("");
    }
    if(asdShape == "" || asdShape == null){
        $("#errorMessage").html("<font color='red'>空域形状不能为空</font>");
        label = false;
        return label;
    }else {
        $("#errorMessage").html("");
    }
    return label;
}




