/**
 * Created by 11591 on 2017/8/4.
 */
//    背景图随屏幕大小变化
window.onresize=function(){
    screen ();
}
window.onload=function(){
    screen ();
}
function screen () {
    var screenHeight=window.innerHeight;
    var main=document.getElementById('main');
    main.style.height=screenHeight+'px';
}
//登录框居中
$(window).resize(function(){
    $(".loginContent").css({
        position: "absolute",
        left: ($(window).width() - $(".loginContent").outerWidth())/2,
        top: ($(window).height() - $(".loginContent").outerHeight())/2,
        overflow:"hidden"
    });
});

$(function(){
    $(window).resize();
});


//登录按钮点击事件  异步验证用户信息
// $(".submit").click(function () {
//     alert("进来了");
//     var loginName=$("#loginName").val();
//     var loginPwd=$("#pwd").val();
//     $.ajax({
//         url:"/user/login",
//         data:{loginName:loginName,pwd:loginPwd},
//         methodType:"post",
//         dataType:"json",
//         succese:function (result) {
//             if(result==null){
//                 alert("登录名或密码错误！！！");
//             }else{
//                 $("#loginName").attr("value","");
//                 $("#pwd").attr("value","");
//                 location.href="/flightPlan/show";
//             }
//         }
//     });
// });