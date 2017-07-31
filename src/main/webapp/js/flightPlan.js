/**
 * Created by HDPC on 2017/7/31.
 */
//    $('.navIcon').toggle(function(){
//        $('#menuList').css('width','52');
//    },function(){
//        $('#menuList').css({'width':'180','overflow':'auto'});
//    });
//
//
//
//菜单toggle切换
// alert('ddfdf');
window.onload=function () {

    $('.topMenu .topItem').toggle(function(){
        $(this).find('.downMenu').slideDown(300);

        //设置一个值来判断是展开还是关闭，展开在鼠标悬浮的时候获取子li的数量，再来设置焦点条的top值
    },function(){
        $(this).find('.downMenu').slideUp(300);

//        alert(s)
    });

//去掉点击后的下划线
    $('a').click(function(){
        $('a').css('text-decoration','none');
    });

//悬浮换色

    $('#menuList .topMenu .topItem .topItemIcon').hover(function (){
        $(this).css('color','#209e91');
    },function () {
        $(this).css('color','#fff');
    })


//焦点条跟随光标移动
    $('.topMenu >li').hover(function(event){
//        var width=$(this).css('width');
//        alert(width);
        var i= $(this).index();
        var sum=(i-1)*43;//可以放到else中
        $('.targetIcon').css({'transition':'top 0.4s ease','top':sum});

    });
//二级菜单点击事件
    $('.downMenu li').click(function(event){
        event.stopPropagation();//阻止事件冒泡
        $('.downMenu li').css('background','transparent');
        $(this).css({'background':'#209e91','color':'#fff'});
    });
}

//    $('#menuList').hover(function(){
//
//    },function(){
//        $('.targetIcon').css('top','-100');
//    });
