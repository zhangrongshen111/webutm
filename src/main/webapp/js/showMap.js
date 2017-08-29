
//用于存储空域多边形坐标
var polygon_pointArr = [];
//用于接收空域类型
var asdType = "Circle";
//获取页面半径输入框的具体值
var asdRadius = document.getElementById("asdRedius").value;
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

//加载PathSimplifier，loadUI的路径参数为模块名中 'ui/' 之后的部分
AMapUI.load(['ui/misc/PathSimplifier'], function (PathSimplifier) {

    if (!PathSimplifier.supportCanvas) {
        alert('当前环境不支持 Canvas！');
        return;
    }
    //just some colors
    var colors = [
        "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00",
        "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707",
        "#651067", "#329262", "#5574a6", "#3b3eac"
    ];
    var pathSimplifierIns = new PathSimplifier({
        zIndex: 100,
        map: map, //所属的地图实例
        getPath: function (pathData, pathIndex) {
            //返回轨迹数据中的节点信息，[AMap.LngLat, AMap.LngLat...] 或者 [[lng,lat],[lng,lat]...]
            return pathData.path;
        },
        getHoverTitle: function (pathData, pathIndex, pointIndex) {
            //返回鼠标悬停时显示的信息
            if (pointIndex >= 0) {
                //鼠标悬停在某个轨迹节点上
                return pathData.name + '，点:' + pointIndex + '/' + pathData.path.length;
            }
            //鼠标悬停在节点之间的连线上
            return pathData.name + '，点数量' + pathData.path.length;
        },
        //绘制引擎
        renderOptions: {
            //路径样式
            pathLineStyle: {
                //方向箭头方向
                dirArrowStyle: true
            },
            //获取轨迹样式
            getPathStyle: function(pathItem, zoom) {
                //在全局颜色数组中依次取色
                var color = colors[pathItem.pathIndex % colors.length],
                    //设置线宽随Zoom 增大
                    lineWidth = Math.round(4 * Math.pow(1.1, zoom - 3));

                return {
                    //设置轨迹颜色及宽度
                    pathLineStyle: {
                        strokeStyle: color,
                        lineWidth: lineWidth
                    },
                    //选中线样式加宽
                    pathLineSelectedStyle: {
                        lineWidth: lineWidth + 2
                    },
                    //轨迹巡航器
                    pathNavigatorStyle: {
                        //设置颜色（其余属性默认）
                        fillStyle: color
                    }
                };
            }
        }
    });
    window.pathSimplifierIns = pathSimplifierIns;
    var tempArrSI = [{ name: '轨迹1',
        path: [
            [116.405089, 39.904987],
            [116.406089, 39.904987],
            [116.407089, 39.904987],
            [116.407089, 39.905987],
            [116.406089, 39.905987],
            [116.405089, 39.905987],
            [116.405089, 39.906987],
            [116.406089, 39.906987],
            [116.407089, 39.906987],
            [116.407089, 39.907987],
            [116.406089, 39.907987],
            [116.405089, 39.907987]
        ]
    }];
    //获取轨迹数据
    function showPathSimplifierIns(d) {
        //移除加载信息提示
        $('#loadingTip').remove();

        //将数据加载到轨迹展示里去
        pathSimplifierIns.setData(d);

        function onload() {
            //延时设定的毫秒值（10ms 默认）+
            pathSimplifierIns.renderLater();
        }
        function onerror(e) {
            alert('图片加载失败！');
        }
        //创建一个巡航器
        var navg1 = pathSimplifierIns.createPathNavigator(0,  {
            loop: true,
            speed: 1000,
            pathNavigatorStyle: {
                width: 24,
                height: 24,
                // autoRotate: false,     // {boolean} 是否根据路径方向进行角度旋转（相对于正上方向），默认true
                //使用图片(引入图片一定要设置朝向为正上方向否则图片将不会跟随路径改变而改变)
                content: PathSimplifier.Render.Canvas.getImageContent('../image/plan_blue01.png', onload, onerror),
                strokeStyle: null,//线颜色
                fillStyle: null,
                //经过路径的样式
                pathLinePassedStyle: {
                    lineWidth: 6,
                    strokeStyle: 'yellow',
                    dirArrowStyle: {
                        stepSpace: 15,
                        strokeStyle: 'red'
                    }
                }
            }
        });
        navg1.start()
    }
    $(document).ready(function () {
        showPathSimplifierIns(tempArrSI);
    });
});

//增加单击获取当前地图坐标
var clickEventListener = map.on('click', function(e) {
    document.getElementById("lnglat").value = e.lnglat.getLng() + ',' + e.lnglat.getLat();
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
var count = 0;
var pointArr = [];
var lineArr = [];
var editor={};
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

//绘制空域形状
function drawLine(ArrList){
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
var countDiv = document.getElementById('count');
var _onCount = function(e){
    countDiv.innerHTML = "总共添加了" + e.count + "个点标记.";
}
//map.on("count", _onCount); //绑定事件，返回监听对象

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

//准备读取后台数据 为页面展现空域做准备
function edor_polygon(polygonArr) {
    editor._polygon=(function(){
        return new AMap.Polygon({
            map: map,
            path: polygonArr,
            strokeColor: "#0000ff",
            strokeOpacity: 1,
            strokeWeight: 3,
            fillColor: "#f5deb3",
            fillOpacity: 0.35
        });
    })();
}

var markers = [];
var provinces = [];
function init(){
    $.ajax({
        type: "get",
        url: "/airTest/json",
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
    edor_polygon(polygon_pointArr);
});
// 展示临时空域信息
function show_tempAsd() {
    var asd_shape = $("#asdShape").val(); //空域形状
    alert("我是临时展示区，接下来将要展示的区域为："+asd_shape);
    if("圆形空域" == asd_shape){
        var asdRadius = $("#asdRedius").val(); //圆形空域半径
        alert("我是圆形空域半径："+asdRadius);
        editor._circle=(function(){
            var circle = new AMap.Circle({
                center:[lineArr[0].lng, lineArr[0].lat],//圆心
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
    //将页面数据进行拼装
    var strData = JsonData();
    //用ajax 提交空域数据
    $.ajax({
        url: "/showMapAirSpaceDetail/save_polygon",
        data: strData,
        type: "post",
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
//展示空域信息
//存储多边形经纬度数据
/*var arr = [ //构建多边形经纬度坐标数组
    [116.403322,39.920255],
    [116.410703,39.897555],
    [116.402292,39.892353],
    [116.389846,39.891365]
];*/
function find_asd() {
    $.ajax({
        type: "post",
        url: "/showMapAirSpaceDetail/find_polygon",
        async: false,
        dataType: "json",
        success: function(resp){
            var tempArr = [];
            for(var i = 0; i < resp.length; i++){
                polygon_pointArr[i] = [resp[i].asdLng,resp[i].asdLat];
            }
        }
    });
}
//清空页面点标记
function clear_Marker() {
    if(confirm("你确定清空点标记么？")){
        lineArr = [];
        $("#asdShape").val("多边形空域");
        show_tempAsd();
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
    for(var i = 0;i < lineArr.length; i++){
        var data;
        if(i==0) {
             data = {
                "asdName": asdName,
                "asdCode": asdCode,
                "asdLng": lineArr[i].lng,
                "asdLat": lineArr[i].lat,
                "asdHeight": asdHeight,
                "asdShape": asdShape,
                 //空域类型为圆形时 显示半径范围
                "asdRadius": asdRadius,
                "asdType": asdType,
                "asdStatus": asdStatus
            };
        }else{
            data = {
                "asdName": asdName,
                "asdCode": asdCode,
                "asdLng": lineArr[i][0],
                "asdLat": lineArr[i][1],
                "asdHeight": asdHeight,
                "asdShape": asdShape,
                "asdType": asdType,
                "asdStatus": asdStatus
            };
        }
         jsonArr.push(data);
    }
    console.log(jsonArr);
    //返回Json 字符串
    return JSON.stringify(jsonArr);
}