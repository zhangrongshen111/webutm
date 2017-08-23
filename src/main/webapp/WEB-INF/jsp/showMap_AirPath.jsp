
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!-- 重点参数：renderOptions -->
<!doctype html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
    <title>轨迹展示&巡航</title>
    <link rel="stylesheet" href="/css/showMap.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
</head>

<body>
<div id="container"></div>
<div class="button-group">
    坐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标：<input id = "lnglat" type ="text" />
    <input type ="button"  value="定位坐标点" id="sub" onclick="addMarkerPoint()" />
    <input type="button" class="button" value="编辑航迹信息" id="Edit_asd" onclick="show_ap()"/>
</div>
<div id='right' style="display: none">
    <div>
        <div class='title'>航迹详细信息</div>
        <br class='c'>
            <button id='bt1'>开始选点</button>
            <button id='bt2'>关闭选点</button>
        </div>
        <br class='c'>
            航迹名称：<input type="text" id="airPathName"><font color="red" size="5px">*</font></br>
            <div id="errorMessage"></div>
            航迹坐标：<input type="text" id="airPathLngLat"><font color="red" size="5px">*</font></br>
            航迹类型: <select id="airPathType">
                        <option value="可用">可   用</option>
                        <option value="禁用">禁   用</option>
                      </select><font color="red" size="5px">*</font></br>
            <input type="button" id="sub_ap" onclick="save_apData();" value ="提交信息">&nbsp;&nbsp;&nbsp;
            <input type="button" id="clear_ap" onclick="clear_Marker();" value ="清空数据">&nbsp;&nbsp;&nbsp;
            <input type="button" id="hideInput_ap" onclick="hidden_ap();" value ="X">
        </div>
    </div>
</div>
<script type="text/javascript" src='http://webapi.amap.com/maps?v=1.3&key=3c24b31bf9bac0687e867b01d4afd5e3'&plugin=AMap.Autocomplete,AMap.PolyEditor,AMap.CircleEditor></script>

<!-- UI组件库 1.0 -->
<script src="${pageContext.request.contextPath}/js/main.js"></script>
<script src="${pageContext.request.contextPath}/js/showMap_AirPath.js"></script>
</body>

</html>