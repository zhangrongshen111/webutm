<%--
  Created by IntelliJ IDEA.
  User: HDPC
  Date: 2017/8/10
  Time: 11:12
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
    <title>Title</title>
    <script type="text/javascript" src="/js/My97DatePicker/WdatePicker.js"></script>
</head>
<body>
<div id="content">
    <table border="1">
        <tr>
           <td>开始日期</td>
           <td><input type="text" readonly="readonly" class="Wdate" name="startDate" onfocus="WdatePicker()"></td>
       </tr>
        <tr>
           <td>结束日期</td>
           <td><input type="text" readonly="readonly" class="Wdate" name="endDate" onfocus="WdatePicker()"></td>
       </tr>
        <tr>
           <td>开始地点</td>
           <td><input type="text" name="startPoint"></td>
       </tr>
        <tr>
           <td>结束地点</td>
           <td><input type="text" name="endPoint"></td>
       </tr>
        <tr>
           <td>飞行高度</td>
           <td><input type="number" name="flightHeight"></td>
       </tr>
        <tr>
           <td>飞行描述</td>
           <td><textarea name="description" cols="30" rows="10"></textarea></td>
       </tr>
        <tr>
           <td>飞机编号</td>
           <td>
               <select name="uvaId" id="">
                       <option value="1" selected="selected">大疆无人机1</option>
                       <option value="2">大疆无人机2</option>
                       <option value="3">大疆无人机3</option>
               </select>
           </td>
       </tr>
    </table>
</div>
</body>
</html>
