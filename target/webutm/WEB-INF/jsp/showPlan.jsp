<%--
  Created by IntelliJ IDEA.
  User: HDPC
  Date: 2017/8/17
  Time: 11:29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<head>
    <title>飞行计划详情</title>
</head>
<body>
<div id="content">

        <table style="margin:0 auto;width:40%;">
            <tr>
                <td>开始日期</td>
                <td><input type="text" readonly="readonly" class="Wdate"  name="startDate" value="<fmt:formatDate value='${flightPlan.startDate}' pattern='yyyy-MM-dd'/>"></td>
            </tr>
            <tr>
                <td>结束日期</td>
                <td><input type="text" readonly="readonly" class="Wdate" name="endDate" value="<fmt:formatDate value='${flightPlan.endDate}' pattern='yyyy-MM-dd'/>"></td>
            </tr>
            <tr>
                <td>开始地点</td>
                <td><input type="text" name="startPoint" value="${flightPlan.startPoint}"></td>
            </tr>
            <tr>
                <td>结束地点</td>
                <td><input type="text" name="endPoint" value="${flightPlan.endPoint}"></td>
            </tr>
            <tr>
                <td>飞行高度</td>
                <td><input type="number" name="flightHeight" readonly="readonly" value="${flightPlan.flightHeight}"></td>
            </tr>
            <tr>
                <td>飞行描述</td>
                <td><textarea name="description" readonly="readonly" cols="30" rows="10" value="">${flightPlan.description}</textarea></td>
            </tr>
            <tr>
                <td>申请日期</td>
                <td><input type="text" readonly="readonly" name="applyDate" value="<fmt:formatDate value='${flightPlan.applyDate}' pattern='yyyy-MM-dd'/>"></td>
            </tr>
            <tr>
                <td>飞机编号</td>
                <td>
                    <select name="uavId" id="" readonly="readonly">
                        <option value="1" selected="selected">大疆无人机1</option>
                        <option value="2">大疆无人机2</option>
                        <option value="3">大疆无人机3</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><input type="text" name="userId" value="${flightPlan.uavId}"></td>
            </tr>

        </table>

</div>
</body>
</html>
