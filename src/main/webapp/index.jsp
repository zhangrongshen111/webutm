<%--
  Created by IntelliJ IDEA.
  User: HDPC
  Date: 2017/8/10
  Time: 16:48
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <meta name="description" content="A sidebar menu as seen on the Google Nexus 7 website" />
    <meta name="keywords" content="google nexus 7 menu, css transitions, sidebar, side menu, slide out menu" />
    <meta name="author" content="Codrops" />
    <link rel="stylesheet" href="css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.2.0/css/font-awesome.min.css" />
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link rel="stylesheet" href="css/Table.css"/>
</head>
<body>
<div class="wrapper">

    <%--<%@include file="WEB-INF/jsp/nav.jsp"%>--%>
    <jsp:include page="WEB-INF/jsp/nav.jsp"/>
    <div class="content-wrap " >
        <div class="content"id="change">
            <section class="content-header">
                <h3>
                    首页
                    <small>首页| <a href="javascript :;" onClick="javascript :history.back(-1);">向前一页</a></small>
                </h3>
            </section>
            <sectionn class="content container-fluid">
                <img src="image/1.png" alt=""  width="100%" height="100%"/>
            </sectionn>
        </div>
    </div>
</div>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery-1.8.3.min.js"></script>
<script src="js/classie.js"></script>
<script src="js/gnmenu.js"></script>
<script src="js/menu.js"></script>
<script>
    new gnMenu( document.getElementById( 'gn-menu' ) );
</script>
</body>
</html>
