<%--
  Created by IntelliJ IDEA.
  User: HDPC
  Date: 2017/8/10
  Time: 13:51
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>飞行计划列表</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/fonts/font-awesome-4.2.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/normalize.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/nav.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/menu_elastic.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/Table.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/index.css">
</head>
<body>


<div class="wrapper">
    <%--<%@include file="nav.jsp"%>--%>
    <jsp:include page="nav.jsp"/>
    <div class="content-wrap " >
        <div class="content"id="change">
            <section class="content-header">
                <h3>
                    列表
                    <small>Tables,one step forward</small>
                </h3>
                <!--<ol class="breadcrumb">-->
                <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>-->
                <!--<li><a href="#">Examples</a></li>-->
                <!--<li class="active">Blank page</li>-->
                <!--</ol>-->
            </section>
            <section class="">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Table|
                        <small>>First page</small>
                    </div>
                    <div class="panel-body">
                        <div class="table-responsive box-default form-inline no-footer scoller">
                                &nbsp;&nbsp;开始时间&nbsp;&nbsp;
                                <input type="text" id="startDate" class="form-control input-sm form-inline" onfocus="WdatePicker()" readonly="readonly">
                                &nbsp;&nbsp;截止时间&nbsp;&nbsp;
                                <input type="text" id="endDate" class="form-control input-sm" onfocus="WdatePicker()" readonly="readonly">
                                <input type="button" name="search" id="search-btn2" class="btn btn-flat btn-sm" value="查询">
                            &nbsp;&nbsp;&nbsp;&nbsp;<a href="${pageContext.request.contextPath}/flightPlan/toAdd" style="color:red;font-weight:bold;">添加飞行计划</a>
                            <div class="table-responsive box-default form-inline no-footer">
                                <table class="table table-hover table-bordered">
                                    <thead class="thead-inverse table-bordered">
                                    <tr class="gradeA odd">
                                        <th><input type="checkbox" id="checkBoxAll">全选</th>
                                        <th>计划编号</th>
                                        <th>开始日期</th>
                                        <th>结束日期</th>
                                        <th>开始地点</th>
                                        <th>结束地点</th>
                                        <th>飞行高度</th>
                                        <th>飞行描述</th>
                                        <th>申请日期</th>
                                        <th>飞机编号</th>
                                        <th>操作</th>
                                    </tr>
                                    </thead>
                                    <tbody class="tbody-white">
                                    <c:forEach items="${map['fpList']}" var="list">
                                        <tr class="gradeA even">
                                            <td for="cbx"><input type="checkbox" name="checkBox" id="cbx"></td>
                                            <td>${list.fpId}</td>
                                            <td><fmt:formatDate value="${list.startDate}" pattern="yyyy-MM-dd"/></td>
                                            <td><fmt:formatDate value="${list.endDate}" pattern="yyyy-MM-dd"/></td>
                                            <td>${list.startPoint}</td>
                                            <td>${list.endPoint}</td>
                                            <td>${list.flightHeight}</td>
                                            <td>${list.description}</td>
                                            <td><fmt:formatDate value="${list.applyDate}" pattern="yyyy-MM-dd"/></td>
                                            <td>${list.uavId}</td>
                                            <td>
                                                <i class="fa fa-trash" aria-hidden="true"></i>
                                                <a href="${pageContext.request.contextPath}/flightPlan/getFlightPlan?id=${list.fpId}"><i class="fa fa-file-text-o" aria-hidden="true"></i></a>
                                                <a href="${pageContext.request.contextPath}/flightPlan/updateDetails?id=${list.fpId}"><i class="fa fa-pencil" aria-hidden="true"></i></a>
                                            </td>
                                        </tr>
                                    </c:forEach>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div id='div' class="panel-footer pager clearfix">
                        <%--<ul id='ul' class="pagination pagination-sm no-margin pull-right">--%>
                        <button id="delSelect">删除选中项</button>
                            第<span id="curPage">${map["curPage"]}</span>页/共<span id="countPage">${map["countPage"]}</span>页

                            <a href="#" id="firstPage">首页</a>
                            <a id="prevPage">上页</a>
                            <a id="nextPage">下页</a>
                            <a href="#" id="lastPage">尾页</a>
                            <select name="" id="selectList"></select>

                        <%--</ul>--%>
                        <%--<ul  class="pagination pagination-sm no-margin pull-right seachpage">--%>
                            <%--<li>1/800</li>--%>
                            <%--<li><input type="text" value="page" class="page" ></li>--%>
                            <%--<li><button class="">Go</button></li>--%>
                        <%--</ul>--%>
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>

<script type="text/javascript" src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery-1.8.3.min.js"></script>
<script src="${pageContext.request.contextPath}/js/classie.js"></script>
<script src="${pageContext.request.contextPath}/js/snap.svg-min.js"></script>
<script src="${pageContext.request.contextPath}/js/toggleMenu.js"></script>
<script src="${pageContext.request.contextPath}/js/menu.js"></script>
<%--<script src="${pageContext.request.contextPath}/js/page.js"></script>--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/My97DatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/flightPlan.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/nav.js"></script>
<script>
    // Copyright 2014-2015 Twitter, Inc.
    // Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        )
        document.querySelector('head').appendChild(msViewportStyle)
    }
</script>
<script>
$(document).ready(function(){

$('.menu-button').toggle(function(){
$('.content').css('width','85%');
},function(){
$('.content').css('width','100%');
});
});
</script>
</body>
</html>
