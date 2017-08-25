$(function () {
    //初始化飞机注册品牌类型
    findUavBrand();
    //初始化无人机用途
    findUavType();
    //无人机品牌下拉框有变动触发事件
    $("#uavBrand").change(function () {
        //清空因选择无人机品牌而导致的品牌类型而产生的缓存问题
        // $("#uavVersion").empty();
        // $("#reset").find("option").remove();
        // $("#uavVersion").html("");
        $.ajax({
           type: "post",
           url: "/uav/findUavVersion?id="+$('#uavBrand').val(),
            cache: false,
           dataType: "json",
           success: function (resp) {
               if(resp.length > 0){
                   //隐藏请选择下拉项
                   $("#uavBrandInit").hide();
                   //动态增加无人机型号
                   for (var i = 0;i < resp.length; i++) {
                       var UavVersion = $("<option></option>");
                       UavVersion.attr("value",resp[i].uavModelId);
                       UavVersion.text(resp[i].uavModelName);
                       $("#uavVersion").append(UavVersion);
                       // $("#findUavVersion").append(UavVersion);
                   }
               }
           }
        });
    });
    /*$("#login").click(function () {
        alert("您点击了注册按钮");
        $.ajax({
           type: 'post',
            data: {'uavBrandId':,'':},
            url: '/uav/saveUavDetail',
            dataType: 'json',
            success: function (reps) {
                alert("我已经添加成功！！！");
            }
        });
    });*/
    /*$("#login").bind("click",function () {
        alert("你点击了我！！！！");
    });*/
});

//初始化飞机注册的飞机品牌类型
function findUavBrand() {
    $.ajax({
        type: 'post',
        url: '/uav/findUavBrand',
        async: false,
        dataType: 'json',
        success: function (resp) {
            if(resp.length > 0){
                $("#uavVersionInit").hide();
                //将后台数据放置到页面jsp中进行展示
                for (var i = 0; i < resp.length; i++) {
                    var $option = $("<option></option>");
                    $option.attr("value", resp[i].uavBrandId);
                    $option.text(resp[i].uavBrandName);
                    $("#uavBrand").append($option);
                    // $("#findUavBrand").append($option);
                }
            }
        }
    });
}
//初始化无人机用途下拉框数据
function findUavType() {
    $.ajax({
       type: 'post',
        url: '/uav/findUavType',
        dataType: 'json',
        success:function (resp) {
           if(resp.length > 0){
               $("#uavTypeInit").hide();
               for(var i = 0;i < resp.length; i++){
                   var uavTypeData = $("<option></option>");
                   uavTypeData.attr("value",resp[i].uavTypeId);
                   uavTypeData.text(resp[i].uavTypeName);
                   $("#uavType").append(uavTypeData);
                   // $("#findUavType").append(uavTypeData);
               }
           }
        }
    });
}




