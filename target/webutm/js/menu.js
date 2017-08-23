/**
 * Created by 11591 on 2017/7/27.
 */
//菜单toggle切换
var s=0;
$('.topMenu .topItem').toggle(function(){
    $(this).find('.downMenu').slideDown(300);
    s++;
    //设置一个值来判断是展开还是关闭，展开在鼠标悬浮的时候获取子li的数量，再来设置焦点条的top值
},function(){
    $(this).find('.downMenu').slideUp(300);
    s--;
//        alert(s)
});

//去掉点击后的下划线
$('a').click(function(){
    $('a').css('text-decoration','none');
});

//    $('topMenu').ready(function(){
//        $(".navIcon").click(function(){
//            $('topMenu','topTtem').toggle('width','52px');
//        });
//    });
//焦点条跟随光标移动
$('.topMenu >li').hover(function(event){
//        var width=$(this).css('width');
//        alert(width);
    var i= $(this).index();
    var sum=(i-1)*43;//可以放到else中
    $('.targetIcon').css({'transition':'top 0.4s ease','top':sum});

});
//光标上升
// $(".btn1").click(function(){
//     $("div").scrollLeft(100);
// });
//二级菜单点击事件
$('.downMenu li').click(function(event){
    event.stopPropagation();//阻止事件冒泡
    $('.downMenu li').css('background','transparent');
    $(this).css({'background':'#209e91','color':'#fff'});
});

//    $('#menuList').hover(function(){
//
//    },function(){
//        $('.targetIcon').css('top','-100');
//    });

//当浏览器宽度大于1024时下拉列表隐藏
// window.onresize=function(){
//     var widthValue=document.body.clientWidth;
//     if(widthValue>1024){
//         $('.thead .header-inner .topMenu').slideUp();
//     }}
