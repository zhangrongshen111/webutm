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
<!DOCTYPE html>
<html>
<head>
    <title>飞行计划详情</title>
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/fonts/font-awesome-4.2.0/css/font-awesome.min.css" />
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/normalize.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/nav.css">
    <link rel="stylesheet" href="${pageContext.request.contextPath}/css/Table.css"/>
    <link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/css/index.css">
    <script type="text/javascript" src="/js/My97DatePicker/WdatePicker.js"></script>
</head>
<body>
<jsp:include page="nav.jsp"/>
<div class="content-wrap " >
    <div class="content" id="change">
        <section class="content-header">
            <h3>
                列表
                <small>添加飞行计划,向前</small>
            </h3>
        </section>
        <section class="content ">
            <div class="panel panel-default">
                <div class="panel-heading">
                    添加飞行计划|
                    <small>>首页</small>
                </div>
                <div class="panel-body">
                    <div class="table-responsive box-default form-inline no-footer scoller">

                        <div class="table-responsive box-default form-inline no-footer adduser">
                            <div class="adduser" id="content">
                                <form action="${pageContext.request.contextPath}/flightPlan/addFlightPlan" method="post">
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
                                    <%--<button class="layui-btn">确定</button>--%>
                                    <%--<button class="layui-btn">返回</button>--%>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
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
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.querySelector('head').appendChild(msViewportStyle)
    }
    $(document).ready(function(){

        $('.menu-button').toggle(function(){
            $('.content').css('width','93%');
        },function(){
            $('.content').css('width','100%');
        });
    });
</script>
</body>
</html>
