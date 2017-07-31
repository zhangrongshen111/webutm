<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/7/26
  Time: 15:28
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="zh-CN">
<head>
    <base href="//webapi.amap.com/ui/1.0/ui/misc/PathSimplifier/examples/" />
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
    <title>地图展示</title>
    <style>
        html,
        body {
            width: 100%;
            height: 100%;
            margin: 0px;
        }
        #outer-box {
            height: 100%;
            padding-right: 280px;
        }
        #container {
            height: 100%;
            width: 100%;
        }
    </style>
</head>
<body>
    <div id="container"></div>
    <script type="text/javascript" src='http://webapi.amap.com/maps?v=1.3&key=3c24b31bf9bac0687e867b01d4afd5e3'></script>
    <script type="text/javascript" src="/js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="https://raw.github.com/dataarts/dat.gui/master/build/dat.gui.min.js"></script>
    <!-- UI组件库 1.0 -->
    <script src="/js/main.js"></script>
    <!--本地脚本-->
    <script !src="/js/showMap.js"></script>
</body>
</html>
