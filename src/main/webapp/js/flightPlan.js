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

//     $('.topMenu .topItem').toggle(function () {
//         alert('zhixingle');
//         $(this).find('.downMenu').slideDown(300);
//         //设置一个值来判断是展开还是关闭，展开在鼠标悬浮的时候获取子li的数量，再来设置焦点条的top值
//     },function () {
//         $(this).find('.downMenu').slideUp(300);
//     });
//
// //去掉点击后的下划线
//     $('a').live('click',function(){
//         $('a').css('text-decoration','none');
//     });
//
// //悬浮换色
//
//     $('#menuList .topMenu .topItem .topItemIcon').hover(function (){
//         $(this).css('color','#209e91');
//     },function () {
//         $(this).css('color','#fff');
//     })
//
//
// //焦点条跟随光标移动
//     $('.topMenu >li').hover(function(event){
// //        var width=$(this).css('width');
// //        alert(width);
//         var i= $(this).index();
//         var sum=(i-1)*43;//可以放到else中
//         $('.targetIcon').css({'transition':'top 0.4s ease','top':sum});
//
//     });
// //二级菜单点击事件
//     $('.downMenu li').click(function(event){
//         event.stopPropagation();//阻止事件冒泡
//         $('.downMenu li').css('background','transparent');
//         $(this).css({'background':'#209e91','color':'#fff'});
//     });
//

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
    // alert("count"+count);
    // alert("page"+page);
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
        if(new Date(startTime)>=new Date(endTime)){
            alert("开始日期不能大于结束日期");
            return;
        }
    }
    $.ajax({
        data:{curPage:num,startDate:startTime,endDate:endTime},
        url:"/flightPlan/ajax",
        type:"post",
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
                text+="<td><input type='checkbox' name='checkBox' id='"+fpList[i].fpId+"'/></td>";
                text+="<td>"+fpList[i].fpId+"</td>";
                text+="<td>"+new Date(parseInt(fpList[i].startDate.time)).toLocaleDateString()+"</td>";
                text+="<td>"+new Date(parseInt(fpList[i].endDate.time)).toLocaleDateString()+"</td>";
                text+="<td>"+fpList[i].startPoint+"</td>";
                text+="<td>"+fpList[i].endPoint+"</td>";
                text+="<td>"+fpList[i].flightHeight+"</td>";
                text+="<td>"+fpList[i].description+"</td>";
                text+="<td>"+new Date(parseInt(fpList[i].applyDate.time)).toLocaleDateString()+"</td>";
                text+="<td>"+fpList[i].uavId+"</td>";
                text+=" <td>&nbsp;<i class='fa fa-trash' aria-hidden='true'></i>" +
                    "&nbsp;<a href='/flightPlan/getFlightPlan?id=${list.fpId}'><i class='fa fa-file-text-o' aria-hidden='true'></i></a>" +
                    "&nbsp; <a href='/flightPlan/updateDetails?id=${list.fpId}'><i class='fa fa-pencil' aria-hidden='true'></i></a>" +
                    "</td>";
                text+="</tr>";
            }
            $('.tbody-white').html(text);
            option();
        },
        error:function () {
            alert("加载数据出错了！！！！");
        }
    });
};


//全选按钮点击事件
$('#checkBoxAll').click(function () {
    //复选框与全选框状态一致
    $("[name='checkBox']").prop("checked",$(this).prop("checked"));
});

//复选框点击事件
$("[name='checkBox']").click(function () {
    var count=$("[name='checkBox']").length;
    var size=$("[name='checkBox']:checked").length;
    if(size==count){
        $("#checkBoxAll").prop("checked",true);
    }else{
        $("#checkBoxAll").prop("checked",false);
    }
    // alert(count);
});

//删除选中项点击事件
$("#delSelect").click(function () {
    var size=$("[name='checkBox']:checked").length;
    if(size==0){
        alert("请先选中要删除的记录");
    }else{
       if(confirm("确定要删除选中的记录吗？")){
           var id="";
           $("[name='checkBox']:checked").each(function () {
               id+=$(this).prop("id")+",";
           });
           id=id.substring(0,id.length-1);
           alert("删除id为"+id+"的记录！！！");
       }
    }
});