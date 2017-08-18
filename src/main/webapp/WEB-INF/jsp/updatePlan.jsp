<%--
  Created by IntelliJ IDEA.
  User: HDPC
  Date: 2017/8/17
  Time: 11:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>修改飞行计划</title>
</head>
<body>
<div id="content">
    <form action="${pageContext.request.contextPath}/flightPlan/updateFlightPlan" method="post">
        <table style="margin:0 auto;width:40%;">
            <tr>
                <td>开始日期</td>
                <td><input type="text" class="Wdate"  name="startDate" value="<fmt:formatDate value='${flightPlan.startDate}' pattern='yyyy-MM-dd'/>"></td>
            </tr>
            <tr>
                <td>结束日期</td>
                <td><input type="text" class="Wdate" name="endDate" value="<fmt:formatDate value='${flightPlan.endDate}' pattern='yyyy-MM-dd'/>"></td>
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
                <td><input type="number" name="flightHeight" value="${flightPlan.flightHeight}"></td>
            </tr>
            <tr>
                <td>飞行描述</td>
                <td><textarea name="description" cols="30" rows="10" value="">${flightPlan.description}</textarea></td>
            </tr>
            <tr>
                <td>申请日期</td>
                <td><input type="text" name="applyDate" value="<fmt:formatDate value='${flightPlan.applyDate}' pattern='yyyy-MM-dd'/>"></td>
            </tr>
            <tr>
                <td>飞机编号</td>
                <td>
                    <select name="uavId" id="">
                        <option value="1" selected="selected">大疆无人机1</option>
                        <option value="2">大疆无人机2</option>
                        <option value="3">大疆无人机3</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><input type="hidden" value="2" name="userId" value="${flight.userId}"></td>
            </tr>
            <tr>
                <td colspan="2"><input type="submit" value="修改"></td>
            </tr>
        </table>
    </form>
</div>
</body>
</html>
