
//存储后台航迹信息
var tempSave_apData = [];
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
//绘制航迹信息
function airPathInit() {
    AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(PathSimplifier, $) {

        if (!PathSimplifier.supportCanvas) {
            alert('当前环境不支持 Canvas！');
            return;
        }
        //巡航线路颜色
        var colors = [
            "#3366cc", "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00",
            "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707",
            "#651067", "#329262", "#5574a6", "#3b3eac"
        ];
        //轨迹展示类
        var pathSimplifierIns = new PathSimplifier({
            zIndex: 100,
            //autoSetFitView:false,
            map: map, //所属的地图实例
            //获取数据轨迹
            getPath: function(pathData, pathIndex) {
                return pathData.path;
            },
            //鼠标悬停显示航线信息
            getHoverTitle: function(pathData, pathIndex, pointIndex) {

                if (pointIndex >= 0) {
                    //point
                    return pathData.name + '，点：' + pointIndex + '/' + pathData.path.length;
                }

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

        $('<div id="loadingTip">加载数据，请稍候...</div>').appendTo(document.body);

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
            if(d.length >= 0){
                //根据查询数据生成多条航迹信息
                for(var i = 0;i < d.length; i++){
                    var  test01 = pathSimplifierIns.createPathNavigator(i, {
                        loop: true,
                        speed: 500000
                    });
                    test01.start();
                }
            }

            //自定义航迹展示区，可根据需要选择
            /*var navg1 = pathSimplifierIns.createPathNavigator(0,  {
                loop: true,
                speed: 500000,
                pathNavigatorStyle: {
                    width: 24,
                    height: 24,
                    //使用图片
                    content: PathSimplifier.Render.Canvas.getImageContent('/image/plan_red01.png', onload, onerror),
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
            navg1.start();*/
        }
        $(document).ready(function () {
            showPathSimplifierIns(tempSave_apData);
        });
    });
}
//dianji鼠标输入框获取指定输入坐标
var clickEventListener = map.on('click', function (e) {
    $("#lnglat").val(e.lnglat.getLng()+","+e.lnglat.getLat());
    $("#airPathLngLat").val(e.lnglat.getLng()+","+e.lnglat.getLat());
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
//显示航迹编辑区
function show_ap(){
    var showAsd = document.getElementById("right");
    showAsd.style.display="";
}
//隐藏航迹编辑区
function hidden_ap(){
    var showAsd = document.getElementById("right");
    showAsd.style.display="none";
}
//记录当前鼠标点击记录条数
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
function drawLine(lineArr) {
    editor._Polyline=(function(){
        return new AMap.Polyline({
            map: map,
            path: lineArr,
            strokeColor: "#FF33FF",//线颜色
            strokeOpacity: 1,//线透明度
            strokeWeight: 3,//线宽
            strokeStyle: "solid"//线样式
        });
    })();
}
//显示地图信息
map.setFitView();
//增加开始选点和结束选点的 点击事件
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

//处理后的的点数据
var lineArrData = [];
//保存航迹信息
function save_apData() {
    var apName = $("#airPathName").val();
    if(apName == "" || apName == null){
        $("#errorMessage").html("<font color='red'>航迹名称不能为空</font>");
        return false;
    }else {
        $("#errorMessage").html("");
        var apData = dataTreating();
        $.ajax({
            type: "post",
            url: "/showAirPath/save_apData",
            data: apData,
            contentType: "application/json",//传入数据格式为json 很重要
            success: function (resp) {
                if(resp == "success"){
                    alert("航迹线路保存成功！");
                    //数据增肌之后刷新jsp页面用以达到刷新展示效果
                    location.reload();
                }else {
                    alert("航迹线路保存失败！");
                }
            }
        });
    }
}
//批量显示航迹信息（该方法主要用于将后台的字符串格式数据转换为Float类型）
function show_airPath() {
    $.ajax({
        type: "post",
        url: "/showAirPath/show_apData",
        //async: false,//解决页面初始化无信息
        dataType: "json",
        success: function (resp) {
            for(var i = 0; i < resp.length; i++){
                //从后台数据中分离出坐标数据并完成初始化截取
                var aa = (resp[i].apLngLat).substr(2);
                var bb = aa.substr(0,aa.length-2);
                //将截取的数据进行分割处理保存到 cc数组中
                var cc = bb.split("],[");
                var parse = [];
                var tempArr = [];
                for(var j = 0; j < cc.length; j++){
                    //将每一组数据进行分割进行数据类型转换
                    var dd = cc[j].split(",");
                    parse[j] = [parseFloat(dd[0]),parseFloat(dd[1])];
                }
                //拼装航迹图形所用数据信息
                tempSave_apData[i] = {"name":resp[i].apName,"path": parse};
            }
        }
    });
}
//清除地图数据
function clear_Marker() {
    map.clearMap();
    lineArr = [];
}
//数据处理
function dataTreating() {
    //航迹名称
    var airPathName = $("#airPathName").val();
    //航迹类型
    var airPathType = $("#airPathType").val();
    //航迹坐标（处理第一组点数据）
    lineArrData[0] = [lineArr[0].lng,lineArr[0].lat];
    for(var i = 1; i < lineArr.length; i++){
        lineArrData.push(lineArr[i]);
    }
    var data = {
        "apName":airPathName,
        "apLngLat": JSON.stringify(lineArrData),
        "apType": airPathType,
        "apUser": "hahah"
    }
    return JSON.stringify(data);
}
//页面加载事件
$(document).ready(function () {
    show_airPath();
    airPathInit();
})