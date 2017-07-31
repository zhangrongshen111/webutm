<%--
  Created by IntelliJ IDEA.
  User: HDPC
  Date: 2017/7/27
  Time: 16:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="/css/login.css" type="text/css">
    <link rel="stylesheet" href="/css/share.css" type="text/css">

</head>
<body>
<div id="main">
    <div class="loginContent textCenter">
        <h1>欢迎进入无人机管理系统</h1>
        <a>还不是会员?注册</a>

        <form action="${pageContext.request.contextPath}/user/login" method="post">
            <table>
                <tr>
                    <td class="title">用户名</td>
                    <td><input type="text" placeholder="用户名" class="inputBox loginName" name="loginName"/></td>
                </tr>
                <tr>
                    <td class="title">密码</td>
                    <td>
                        <input type="password" placeholder="密码" class="inputBox pwd" name="pwd"/>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" class="textCenter">
                        <input type="submit" value="登陆" class="submit"/>
                        <a href="#" class="forgot">忘记密码?</a>
                    </td>
                </tr>
            </table>
        </form>
        <div class="gs-name">
            <p></p>
            <span>如翼信息技术</span>
            <p></p>
        </div>
        <div class="gs-logo">
            <img src="image/01.png" alt="" width="50" height="50"/>
        </div>
    </div>
</div>
</body>
<script src="/js/jquery-1.8.3.min.js"></script>
<script>


//    alert("ddjflka");
//$('.submit').click(function(){
//    alert('点击了。。。。。。。');
//    var name=$('.loginName').val();
//    var pwd=$('pwd').val();
//    $.post("user/login",{"name":name,'pwd':pwd},function (data) {
//        if(data==null){
//            alert("账号或密码错误");
//        }else{
//            alert("登陆成功");
//        }
//    });
//});


    window.onload=function(){
        var screenHeight=window.innerHeight;
        alert(screenHeight);
        var main=document.getElementById('main');
        main.style.height=screenHeight+'px';
    }

</script>
</html>
