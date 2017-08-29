<%@ taglib prefix="C" uri="http://java.sun.com/jsp/jstl/core" %>
<%--
  Created by IntelliJ IDEA.
  User: Administrator
  Date: 2017/8/23
  Time: 10:42
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>无人机注册</title>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/js/loginUav.js"></script>
</head>
<body>
<div id="Head"><font size="10px" color ="green">无人机信息注册</font></div>
<div id="body">
    <%--用Form 表单包裹数据主要实现清空数据的功能--%>
    <form action="/uav/saveUavDetail" method="post">
        <div >
        无人机编码: <input id="uavCode" name="uavCode" /></br>
        无人机品牌: <select id = "uavBrand" name="b_id">
                        <option id="uavBrandInit" value="init">- -请 选 择- -</option>
                    </select></br>
        无人机型号: <select id = "uavVersion" name="m_id">
                        <option id="uavVersionInit" value="init">- -请 选 择- -</option>
                    </select></br>
        无人机用途: <select id = "uavType" name="t_id">
                        <option id="uavTypeInit" value="init">- -请 选 择- -</option>
                    </select></br>
        <input >
        </div>
        <div>
            <input id="login" name="login" type="submit" value="注册"/>
            <input type = "reset" id="reset" name="reset"  value="清空"/>
        </div>
    </form>
</div>
<hr color="red">
    <div >
        无人机编码: <input id="findUavCode" name="uavCode"/>
        无人机品牌: <select id = "findUavBrand"><option id="findUavBrandInit" value="init">- -请 选 择- -</option></select>
        无人机型号: <select id = "findUavVersion"><option id="findUavVersionInit" value="init">- -请 选 择- -</option></select></br>
        无人机产地: <select id = "findUavHome">
                        <option>- - 请选择 - -</option>
                        <option>中国</option>
                        <option>俄罗斯</option>
                        <option>美国</option>
                        <option>法国</option>
                    </select>
        无人机用途: <select id = "findUavType"><option id="findUavtypeInit" value="init">- -请 选 择- -</option></select></br>
    </div>
<input type="button" id="findUavDetails" value="查询">
<div id = "ShowUavData">
    <table >
        <tr>
            <th>选择</th>
            <th>无人机编码</th>
            <th>无人机品牌</th>
            <th>无人机型号</th>
            <th>无人机产地</th>
            <th>无人机用途</th>
            <th>操作</th>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td>001</td>
            <td>大疆无人机</td>
            <td>大疆001</td>
            <td>中国</td>
            <td>婚庆</td>
            <td><a href="#">修改</a>
                <a href="#">删除</a>
                <a href="#">详情</a>
            </td>
        </tr>
        <tr>
            <td><input type="checkbox"></td>
            <td>002</td>
            <td>彩虹无人机</td>
            <td>彩虹001</td>
            <td>中国</td>
            <td>农林喷洒</td>
            <td><a href="#">修改</a>
                <a href="#">删除</a>
                <a href="#">详情</a>
            </td>
        </tr>
    </table>

</div>
<div id="foot"><font size="8px" color ="pink">如翼信息</font></div>
</body>
</html>
