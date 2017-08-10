<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<html>
<body>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css"/>
    <link rel="stylesheet" type="text/css" href="/css/share.css"/>
    <link rel="stylesheet" type="text/css" href="/css/nav.css"/>
    <link rel="stylesheet" type="text/css" href="/css/flightPlan.css">
    <%--<script type="text/javascript" src="js/menu.js"></script>--%>
</head>
<body>
<div id="nav">
    <div class="nav-left inlineBlock">
        <a href="#"><span>Lucky</span>Wing</a>
        <span class="glyphicon glyphicon-tasks inlineBlock navIcon"></span>
        <div class="search inlineBlock">
            <span class="glyphicon glyphicon-search"></span>
            <input type="text" placeholder="搜索"/>
        </div>
    </div>
    <div class="nav-right inlineBlock textCenter">
        <p class="inlineBlock">有问题？<a href="#">联系我们</a></p>
        <div class="bell inlineBlock">
            <span class="number">5</span>
            <span class="glyphicon glyphicon-bell"></span>
        </div>
        <div class="envelope inlineBlock">
            <span class="number">5</span>
            <span class="glyphicon glyphicon-envelope"></span>
        </div>
        <div class="personalImage">
            <img src="/image/zrs.jpg" alt=""  width="100%" height="100%"/>
        </div>
    </div>
</div>
<div id="menuList">
    <ul class="topMenu">
        <div class="targetIcon"></div>
        <li class="topItem">
            <a href="#" class="topItemIcon">
                <span class="listIcon glyphicon glyphicon-home"></span>
                <span>个人首页</span>
                <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul class="downMenu">
                <li><a href="${pageContext.request.contextPath}/flightPlan/show">飞行记录</a></li>
                <li><a href="login.jsp">用户登录</a></li>
                <li><a href="login.jsp">我的余额</a></li>
                <li><a href="login.jsp">我的余额</a></li>
            </ul>
        </li>
        <li class="topItem">
            <a href="#">
                <span class="listIcon glyphicon glyphicon-plane"></span>
                <span>飞行计划</span>
                <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul class="downMenu">
                <li class="downItem"><a href="#">添加计划</a></li>
                <li><a href="login.jsp">修改计划</a></li>
                <li><a href="login.jsp">查询计划</a></li>
            </ul>
        </li>
        <li class="topItem">
            <a href="#">
                <span class="listIcon glyphicon glyphicon-plane"></span>
                <span>无人飞机</span>
                <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul class="downMenu">
                <li class="downItem"><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
            </ul>
        </li>
        <li class="topItem">
            <a href="#">
                <span class="listIcon glyphicon glyphicon-plane"></span>
                <span>空域信息</span>
                <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul class="downMenu">
                <li class="downItem"><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
            </ul>
        </li>
        <li class="topItem">
            <a href="#">
                <span class="listIcon glyphicon glyphicon-plane"></span>
                <span>交通规章</span>
                <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul class="downMenu">
                <li class="downItem"><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
            </ul>
        </li>
        <li class="topItem">
            <a href="#">
                <span class="listIcon glyphicon glyphicon-plane"></span>
                <span>飞行情报</span>
                <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul class="downMenu">
                <li class="downItem"><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
            </ul>
        </li>
        <li class="topItem">
            <a href="#">
                <span class="listIcon glyphicon glyphicon-plane"></span>
                <span>航空情报</span>
                <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul class="downMenu">
                <li class="downItem"><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
            </ul>
        </li>
        <li class="topItem">
            <a href="#">
                <span class="listIcon glyphicon glyphicon-plane"></span>
                <span>气象情报</span>
                <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul class="downMenu">
                <li class="downItem"><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
            </ul>
        </li>
        <li class="topItem">
            <a href="#">
                <span class="listIcon glyphicon glyphicon-plane"></span>
                <span>告警救援</span>
                <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
            </a>
            <ul class="downMenu">
                <li class="downItem"><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#">我的余额</a></li>
                <li><a href="#" class="myFlight">我的余额</a></li>
            </ul>
        </li>
    </ul>
</div>
<div class="content">
    <div class="content-wrapper">
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
        <section class="content container-fluid">
            <div class="row">
                <div class="content-header2 col-lg-12">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Table|
                            <small>>First page</small>
                        </div>
                        <div class="panel-body">
                            <div class="table-responsive box-default form-inline no-footer" >
                                    <div class="row">
                                        <div class="col-xs-6">
                                            <div class="datatables_length" aria-controls="datatable1" calss="form-control input-sm">
                                                <label class="search-date ">
                                                    <li><input type="text" id="startDate" class="Wdate form-control input-sm form-inline" readonly="readonly" onfocus="WdatePicker()"/>&nbsp;&nbsp;开始时间</li>
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-xs-6">
                                            <div class="datatables_length" aria-controls="datatable1" calss="form-control input-sm">
                                                <label class="search-date">
                                                    <li><input type="text" id="endDate" class="Wdate form-control input-sm form-inline" readonly="readonly" onfocus="WdatePicker()"/>&nbsp;&nbsp;截止时间&nbsp;&nbsp;
                                                    <button type="button" name="search" id="search-btn2" class="btn btn-flat btn-sm">查询</button></li>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                <table class="table table-hover table-bordered">
                                    <thead class="thead-inverse">
                                    <tr class="gradeA odd">
                                        <th>计划编号</th>
                                        <th>开始日期</th>
                                        <th>结束日期</th>
                                        <th>开始地点</th>
                                        <th>结束地点</th>
                                        <th>飞行高度</th>
                                        <th>飞行描述</th>
                                        <th>申请日期</th>
                                        <th>飞机编号</th>
                                    </tr>
                                    </thead>

                                    <tbody class="tbody-white">
                                        <c:forEach items="${map['fpList']}" var="list">
                                            <tr class="gradeA even">
                                                <td>${list.fpId}</td>
                                                <td><fmt:formatDate value="${list.startDate}" pattern="yyyy-MM-dd"/></td>
                                                <td><fmt:formatDate value="${list.endDate}" pattern="yyyy-MM-dd"/></td>
                                                <td>${list.startPoint}</td>
                                                <td>${list.endPoint}</td>
                                                <td>${list.flightHeight}</td>
                                                <td>${list.description}</td>
                                                <td><fmt:formatDate value="${list.applyDate}" pattern="yyyy-MM-dd"/></td>
                                                <td>${list.uavId}</td>
                                            </tr>
                                        </c:forEach>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="footer pager clearfix">
                            <!--<ul class="pagination pagination-sm no-margin pull-right">-->
                            <!--<li><a href="#">«</a></li>-->
                            <!--<li><a href="#">1</a></li>-->
                            <!--<li><a href="#">2</a></li>-->
                            <!--<li><a href="#">3</a></li>-->
                            <!--<li><a href="#">»</a></li>-->
                            <!--</ul>-->
                            <span id="curPage">${map["curPage"]}</span>/<span id="countPage">${map["countPage"]}</span>

                            <a href="#" id="firstPage">首页</a>
                            <a href="#" id="prevPage">上页</a>
                            <a href="#" id="nextPage">下页</a>
                            <a href="#" id="lastPage">尾页</a>
                            <select name="" id="selectList"></select>
                            <%--<button style="width:25px;height:25px;">go</button>--%>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</body>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/My97DatePicker/WdatePicker.js"></script>
<script src="/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/js/flightPlan.js"></script>
<script>

</script>
</html>
</body>
</html>
