/**
 * Created by HDPC on 2017/8/16.
 */
$(document).ready(function () {
    $(".flightPlan").click(function () {
        var menuList=$("#menuList");
      var form=document.createElement("form");
      form.method="post";
      form.action="/flightPlan/show";
      menuList.appendChild(form);
      form.submit();
    });


});