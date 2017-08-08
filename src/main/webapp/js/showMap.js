
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
        renderOptions: {
            //轨迹线的样式
            pathLineStyle: {
                strokeStyle: 'orange',
                lineWidth: 6,
                dirArrowStyle: true
            }
        }
    });

    //这里构建两条简单的轨迹，仅作示例
    pathSimplifierIns.setData([{
        name: '轨迹1',
        path: [
            /*[116.405089, 39.904987],
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
             [116.405089, 39.907987]*/
        ]
    }
    ]);
});
var provinces = [];
var markers = [];

/*var marker = new AMap.Marker({
    position: [116.480983, 39.989628],
    //marker所在的位置
    map:map//创建时直接赋予map属性
});

//也可以在创建完成后通过setMap方法执行地图对象
marker.setMap(map);*/

function init(){
    $.ajax({
        type: "get",
        url: "/json",
        dataType: "json",
        success: function (data){
            provinces = data;

             // provinces = resp;
             for (var i = 0; i < provinces.length; i += 1) {
                 var marker;
                 //自定义图标
                 var icon = new AMap.Icon({
                     image: '/image/Plan_red.png',
                     size: new AMap.Size(25, 25)
                 });
                 marker = new AMap.Marker({
                     icon: icon,
                     position: new AMap.LngLat(provinces[i].longitude, provinces[i].latitude),
                     offset: new AMap.Pixel(-12, -12),
                     zIndex: 101,
                     title: provinces[i].name,
                     map: map
                 });
             markers.push(marker);
             }
            map.setFitView();
        }
    });
}
$(document).ready(function(){
    init();
});
