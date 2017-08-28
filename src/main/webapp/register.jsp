<%--
  Created by IntelliJ IDEA.
  User: 11591
  Date: 2017/8/23
  Time: 9:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE HTML>
<html lang="en">
<head>
    <title>找飞机注册</title>
    <meta name="description" content="zhaofeiji register">
    <meta name="keywords" content="register">
    <meta name="author" content="Marina">
    <meta charset="UTF-8">
    <link type="text/css" href="${pageContext.request.contextPath}/css/register/reset.css" rel="stylesheet">
    <link type="text/css" href="${pageContext.request.contextPath}/css/register/public.css" rel="stylesheet">
    <link type="text/css" href="${pageContext.request.contextPath}/css/register/register.css" rel="stylesheet">


    <!--[if IE 6]>
    <script src="${pageContext.request.contextPath}/js/register/DD_belatedPNG.js" type="text/javascript"></script>
    <script>DD_belatedPNG.fix('.png_bg');</script>
    <![endif]-->
    <style>
        .input_div span{ background:#FFF;}
    </style>
</head>
<body>
<div id="header">
    <div class="header">
        <h1 class="png_bg">找飞机注册</h1>
        <a class="png_bg" href="">返回主页</a>
    </div>
</div>
<div class="register_content">
    <ul class="step_ul step1 clear">
        <li class="li1">01、填写资料</li>
        <li class="li2">02、完成注册</li>
    </ul>
    <form name="registerForm" id='registerForm' autocomplete="on" action="register/ldo" method="post" style="padding:60px 40px 88px 40px;font-family:Microsoft Yahei">
        <div class="div_form clear ">
            <label>用户名：</label>
            <div class="input_div input_div1">
                <input id="username" name="username" type="text" placeholder="格式6-24位数字字母组合" maxlength="24">
                <span></span>
            </div>
        </div>
        <div class="div_form clear ">
            <label>真实姓名：</label>
            <div  class="input_div input_div2">
                <input type="text" name="name" id="relname" placeholder="格式6-24位字母" maxlength="24" >
                <span></span>
            </div>
        </div>
        <div class="div_form clear ">
            <label>邮箱帐号：</label>
            <div class="input_div input_div3" >
                <input id="mail" name="useremail"  type="text" placeholder="请填写正确的邮箱，以便接收账号激活邮件" maxlength="64">
                <span></span>
            </div>
        </div>
        <div class="div_form clear ">
            <label>用户密码：</label>
            <div class="input_div input_div4">
                <input id="password1" name="userPwd" type="password" placeholder="最少 8 个字符，区分大小写" maxlength="32">
                <span></span>
            </div>
        </div>
        <div class="div_form clear ">
            <label>重新输入密码：</label>
            <div class="input_div input_div5">
                <input id="password2" name="userpass2" type="password" placeholder="再次输入密码" maxlength="32">
                <span></span>
            </div>
        </div>
        <div class="div_form clear">
            <label>手机号码：</label>
            <div class="input_div input_div6">
                <input type="text" id="phone" name="phone" placeholder="请输入您的手机号" maxlength="20">
                <span></span>
            </div>
        </div>
        <div class="div_form clear">
            <label>家庭住址：</label>
            <div class="input_div input_div7">
                <input type="text" id="address" name="address" placeholder="请输入您的住址" maxlength="20">
                <span></span>
            </div>
        </div>
        <div class="div_form clear">
            <label>身份证号：</label>
            <div class="input_div input_div8">
                <input type="text" id="cadID" name="cadID" placeholder="请输入您的身份证号" maxlength="20">
                <span></span>
            </div> </div>
        <%--<div class="div_form clear ">--%>
            <%--<label>输入计算结果：</label>--%>
            <%--<div class="input_div input_div7">--%>
                <%--<input id="varcode" name="vercode" type="text" maxlength="2">--%>
                <%--<a class="change" href="javascript:;">点击换一张</a>--%>
                <%--<span></span>--%>
            <%--</div>--%>
        <%--</div>--%>
        <%--<div class="div_form clear ">--%>
            <%--<label></label>--%>
            <%--<div class="input_div check2 input_div8" data="0" id="agreement">--%>
                <%--我已阅读并接受《找飞机网用户服务协议》--%>
                <%--<span></span>--%>
            <%--</div>--%>
        <%--</div>--%>
        <div class="div_form clear ">
            <label></label>
            <div class="input_div">
                <input id="btn" class="btn" type="button" value="注册" />
            </div>

    </form>
    <div class="reg_login">
        <p>已有帐号？</p>
        <a class="btn2" href="${pageContext.request.contextPath}/user/toLogin">登录</a>
    </div>
    <div class="bg"></div>
</div>
<!-- footer start -->
<div id="footer" class="clear">
</div>
<script src="${pageContext.request.contextPath}/js/jquery.min.js" type="text/javascript"></script>
<%--<script src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>--%>
<script src="${pageContext.request.contextPath}/js/register/json.parse.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/js/register/jquery.form.js" type="text/javascript"></script>
<script src="${pageContext.request.contextPath}/js/register/register.js" type="text/javascript"></script>
<script type="text/javascript">
    var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F5d12e2b4eed3b554ae941c0ac43c330a' type='text/javascript'%3E%3C/script%3E"));
</script>
</body>
</html>
