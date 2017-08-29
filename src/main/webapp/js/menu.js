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

//焦点条跟随光标移动
$('.topMenu >li').hover(function(event){
    var i= $(this).index();
    var sum=(i-1)*41;//可以放到else中
    $('.targetIcon').css({'transition':'top 0.4s ease','top':sum});

});

//二级菜单点击事件
$('.downMenu li').click(function(event){
    event.stopPropagation();//阻止事件冒泡
    $('.downMenu li').css('background','transparent');
    $(this).css({'color':'#39C6F4'});
});

