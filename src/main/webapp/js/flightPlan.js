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

    $('.topMenu .topItem').toggle(function () {
        alert('zhixingle');
        $(this).find('.downMenu').slideDown(300);
        //设置一个值来判断是展开还是关闭，展开在鼠标悬浮的时候获取子li的数量，再来设置焦点条的top值
    },function () {
        $(this).find('.downMenu').slideUp(300);
    });

//去掉点击后的下划线
    $('a').live('click',function(){
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



//点击查询按钮
$('#search-btn2').click(function(){
    ajaxShow(1);
});
//点击首页
$('#firstPage').click(function(){
    ajaxShow(1);
});
//点击上一页
$('#prevPage').click(function(){
    var curPage=parseInt($('#curPage').html());
    if(curPage==1){
        alert('已经是第一页了！！！！！');
        return;
    }else{
        curPage--;
        ajaxShow(curPage);
    }
});
//点击下一页
$('#nextPage').click(function(){
    var curPage=parseInt($('#curPage').html());
    var countPage=parseInt($('#countPage').html());
    if(curPage==countPage){
        alert('已经是最后一页了！！！！！');
        return;
    }else{
        curPage++;
        ajaxShow(curPage);
    }
});
//点击尾页
$('#lastPage').click(function(){
    var curPage=parseInt($('#countPage').html());
    ajaxShow(curPage);
});

window.onload=function(){
    option();
}

//下拉框改变事件
$('#selectList').change(function(){
    var curPage=parseInt($(this).val());
    ajaxShow(curPage);
});

//将页码数量添加到下拉框中
function option(){
//        获取当前页和总页数
    var page=parseInt($('#curPage').html());
    var count=parseInt($('#countPage').html());
    alert("count"+count);
    alert("page"+page);
    var option="";
    for(var i=1;i<=count;i++){
        if(i==page){
            option+="<option value='"+i+"' selected='selected'>"+i+"</option>";
        }else{
            option+="<option value='"+i+"'>"+i+"</option>"
        }
    }
    $("#selectList").html(option);
}


//异步加载回传数据
function ajaxShow (num) {
    var startTime=$("#startDate").val();
    var endTime=$("#endDate").val();
    if(startTime!=""&&endTime!=""){
        alert(startTime);
        alert(endTime);
        if(new Date(startTime)>=new Date(endTime)){
            alert("开始日期不能大于结束日期");
            return;
        }
    }
    alert('页码='+num);
    $.ajax({
        data:{curPage:num,startDate:startTime,endDate:endTime},
        url:"/flightPlan/ajax",
        methodType:"post",
        dataType:"json",
        success:function (result) {
            var fpList=result["fpList"];
            $("#curPage").html(result["curPage"]);
            $("#countPage").html(result["countPage"]);
            $("#startDate").attr("value",result["startDate"]);
            $("#endDate").attr("value",result["endDate"]);
            var text=""
            for(var i=0;i<fpList.length;i++){
                text+="<tr>";
                text+="<td>"+fpList[i].fpId+"</td>";
                text+="<td>"+new Date(parseInt(fpList[i].startDate.time)).toLocaleDateString()+"</td>";
                text+="<td>"+new Date(parseInt(fpList[i].endDate.time)).toLocaleDateString()+"</td>";
                text+="<td>"+fpList[i].startPoint+"</td>";
                text+="<td>"+fpList[i].endPoint+"</td>";
                text+="<td>"+fpList[i].flightHeight+"</td>";
                text+="<td>"+fpList[i].description+"</td>";
                text+="<td>"+new Date(parseInt(fpList[i].applyDate.time)).toLocaleDateString()+"</td>";
                text+="<td>"+fpList[i].uavId+"</td>";
                text+="</tr>";
//                    console.log(fpList[i].startDate.time);
            }
            $('.tbody-white').html(text);
            option();
            alert("成功了");
        },
        error:function () {
            alert("失败了");
        }
    });
};