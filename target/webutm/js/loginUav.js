$(function () {
    findUserIdUavAll(1);
    //初始化飞机注册品牌类型
    findUavBrand();
    //初始化无人机用途
    findUavType();
    //无人机品牌下拉框有变动触发事件
    $("#uavBrand,#finduavbrand").change(function () {
        //清空因选择无人机品牌而导致的品牌类型而产生的缓存问题
        // $("#uavVersion").empty();
        // $("#reset").find("option").remove();
        // $("#uavVersion").html("");
        // alert($(this).val());
        $.ajax({
           type: "post",
           url: "/uav/findUavVersion?id="+$(this).val(),
           cache: false,
           dataType: "json",
           success: function (resp) {
               if(resp.length > 0){
                   //隐藏请选择下拉项
                   $("#uavVersionInit,#findUavVersionInit").hide();
                   //动态增加无人机型号
                   for (var i = 0;i < resp.length; i++) {
                       var UavVersion = $("<option></option>");
                       UavVersion.attr("value",resp[i].uavModelId);
                       UavVersion.text(resp[i].uavModelName);
                       $("#uavVersion,#findUavVersion").append(UavVersion);
                   }
               }
           }
        });
    });
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
                $("#uavBrandInit,#findUavBrandInit").hide();
                //将后台数据放置到页面jsp中进行展示
                for (var i = 0; i < resp.length; i++) {
                    var $option = $("<option></option>");
                    $option.attr("value", resp[i].uavBrandId);
                    $option.text(resp[i].uavBrandName);
                    //增加查询公用点击触发事件
                    $("#uavBrand,#findUavBrand").append($option);
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
               $("#uavTypeInit,#finduavtypeinit").hide();
               for(var i = 0;i < resp.length; i++){
                   var uavTypeData = $("<option></option>");
                   uavTypeData.attr("value",resp[i].uavTypeId);
                   uavTypeData.text(resp[i].uavTypeName);
                   $("#uavType,#finduavtype").append(uavTypeData);
               }
           }
        }
    });
}
//初始化查询用户是否注册过无人机相关信息
function findUserIdUavAll(UserId) {
    alert("我是来查询用户"+UserId+"注册几个无人机的按钮");
    $.ajax({
       type: 'post',
        url: '/uav/findUserIdUavAll?userId='+UserId,
        dataType: 'json',
        success: function (resp) {
            console.log(resp);
        }
    });
}



