<%--
  Created by IntelliJ IDEA.
  User: HDPC
  Date: 2017/7/27
  Time: 10:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
</head>
<body>

sdfsadfsad
<%--<form action="${pageContext.request.contextPath}/user/login" method="get">--%>
    <%--<table>--%>
        <%--<tr>--%>
            <%--<td><input type="text" name="loginName"></td>--%>
        <%--</tr>--%>
        <%--<tr>--%>
            <%--<td><input type="text" name="pwd"></td>--%>
        <%--</tr>--%>
        <%--<tr>--%>
            <%--<td><input type="submit" value="登陆"></td>--%>
        <%--</tr>--%>
    <%--</table>--%>
<%--</form>--%>

<table border="1">
    <tr>
        <td>编号</td>
        <td>姓名</td>
        <td>密码</td>
    </tr>

    <c:forEach var="list" items="${userList}" >
        <tr>
            <td>${list.id}</td>
            <td>${list.loginName}</td>
            <td>${list.password}</td>
        </tr>
    </c:forEach>
</table>
</body>
</html>
