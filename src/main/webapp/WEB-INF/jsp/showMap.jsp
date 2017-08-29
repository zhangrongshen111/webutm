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
    <!--<base href="//webapi.amap.com/ui/1.0/ui/misc/PathSimplifier/examples/" />-->
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
    <title>地图展示</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/showMap.css">
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
</head>
<body>

    <div id="container"></div>
    <div class="button-group">
        坐&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;标：<input id = "lnglat" type ="text" />
        <input type ="button"  value="定位坐标点" id="sub" onclick="addMarkerPoint()" />
        <input type="button" class="button" value="编辑空域信息" id="Edit_asd" onclick="show_asd()"/>
    </div>
    <div id='right' style="display: none">
        <div>
            <div class='title'>选择模式</div>
            <input type='radio' name='mode' class="mode" value='多边形空域' checked>多边形空域</input></br>
            <input type='radio' name='mode' class="mode" value='圆形空域' click="showRadius()">圆形空域</input></br>
        </div>
        <div>
            <button id='bt1'>开始选点</button>
            <button id='bt2'>关闭选点</button>
        </div>
        <div>
            <div class='title'>空域详细信息</div>
            <div class='c'>
                空域编号：<input type="text" id="asdCode"><font color="red" size="5px">*</font></br>
                空域名称：<input type="text" id="asdName"><font color="red" size="5px">*</font></br>
                空域坐标：<input type="text" id="asdLngLat"><font color="red" size="5px">*</font>
                <input type="button" id="asdLnglatBtn" value="+"></br>
                <div id="redius" >
                    空域半径：<input type="text" id="asdRedius" ><font color="red" size="5px">*</font>
                </div>
                空域高度：<input type="text" id="asdHeight"><font color="red" size="5px">*</font></br>
                空域形状：<input type="text" id="asdShape" name="asdShape" readonly="true"><font color="red">*</font></br>

                空域类型：<select name ="asdType" id="asdType">
                            <option value="高空">高空</option>
                            <option value="低空">低空</option>
                            <option value="超低空">超低空</option>
                         </select><font color="red" size="5px">*</font></br>
                空域状态：<select name ="asdStatus" id="asdStatus">
                            <option value="禁飞">禁飞</option>
                            <option value="正常">正常</option>
                            <option value="待确定">待确定</option>
                         </select><font color="red" size="5px">*</font></br>
                <input type="button" id="show_asd" onclick="show_tempAsd()" value ="空域展示">
                <input type="button" id="submit" onclick="save_polygon();" value ="提交信息"></br>
                <input type="button" id="clear" onclick="clear_Marker();" value ="清空信息区">
                <input type="button" id="hideInput" onclick="hiden_Input();" value ="隐藏编辑区">
            </div>
        </div>
    </div>

    <div id="airLinePath">

    </div>

    <script type="text/javascript" src='http://webapi.amap.com/maps?v=1.3&key=3c24b31bf9bac0687e867b01d4afd5e3'&plugin=AMap.Autocomplete,AMap.PolyEditor,AMap.CircleEditor></script>

    <script type="text/javascript" src="https://rawgithub.com/dataarts/dat.gui/master/build/dat.gui.min.js"></script>
    <%--绘制多边形--%>
    <script src="${pageContext.request.contextPath}/js/addToolbar.js"></script>

    <script src="${pageContext.request.contextPath}/js/liteToolbar.js"></script>
    <!-- UI组件库 1.0 -->
    <script src="${pageContext.request.contextPath}/js/main.js"></script>
    <!--本地脚本-->
    <script src="${pageContext.request.contextPath}/js/showMap.js"></script>

</body>
</html>
