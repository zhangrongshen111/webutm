<%--
  Created by IntelliJ IDEA.
  User: HDPC
  Date: 2017/8/10
  Time: 23:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head lang="en">
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1" user-scalable=no>
    <title>登录</title>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/fonts/font-awesome-4.2.0/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/login.css">
</head>
<body >

<div id="main" class="wrapper">

    <a href="javascript :;" onClick="javascript :history.back(-1);"> <strong><i class="fa fa-angle-double-left" aria-hidden="true"></i></strong></a>


    <div class="loginContent textCenter">
        <div class="logo">
            <h1>欢迎进入无人机管理系统</h1>
        </div>
        <a href="${pageContext.request.contextPath}/user/toRegister" class="register">还不是会员?注册</a>
        <form action="${pageContext.request.contextPath}/user/login" method="post">
            <table>
                <tr>
                    <td class="title">用户名</td>
                    <td><input type="text" placeholder="请输入用户名" class="inputBox" name="loginName"/></td>
                </tr>

                <tr>
                    <td class="title">密码</td>
                    <td><input type="password" placeholder="请输入密码" class="inputBox" name="pwd"/></td>
                </tr>
                <tr>
                    <td colspan="2"> <input type="submit" value="登陆" class="submit"/><a href="#" class="forgot">忘记密码?</a></td>
                </tr>
            </table>
        </form>
        <div class="gs-name">
            <p></p>
            <span>如翼信息技术</span>
            <p></p>
        </div>
        <div class="gs-logo">
            <img src="/image/01.png" alt="" width="50" height="50"/>
        </div>
    </div>

</div>
</body>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/login.js"></script>
</html>
