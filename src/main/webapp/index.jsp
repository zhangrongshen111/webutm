<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<body>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="/css/share.css"/>
    <link rel="stylesheet" href="/css/nav.css"/>
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
                <img src="/image/01.png" alt=""  width="100%" height="100%"/>
            </div>
        </div>
    </div>
    <div id="menuList">

        <ul class="topMenu">
            <div class="targetIcon"></div>
            <li class="topItem">
                <a href="#">
                    <span class="listIcon glyphicon glyphicon-home"></span>
                    <span>个人首页</span>
                    <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                </a>
                <ul class="downMenu">
                    <li><a href="${pageContext.request.contextPath}/flightPlan/show">飞行记录</a></li>
                    <li><a href="login.jsp">用户登录</a></li>
                    <li><a href="#">信誉积分</a></li>
                    <li>信誉积分</li>
                </ul>
            </li>
            <li class="topItem">
                <a href="#">
                    <span class="listIcon glyphicon glyphicon-plane"></span>
                    <span>飞行计划</span>
                    <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                </a>
                <ul class="downMenu">
                    <li class="downItem">我的任务</li>
                    <li>我的飞机</li>
                    <li>我的余额</li>
                    <li>信誉积分</li>
                </ul>
            </li>
            <li class="topItem">
                <a href="#">
                    <span class="listIcon glyphicon glyphicon-plane"></span>
                    <span>无人飞机</span>
                    <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                </a>
                <ul class="downMenu">
                    <li class="downItem">我的任务</li>
                    <li>我的飞机</li>
                    <li>我的余额</li>
                    <li>信誉积分</li>
                </ul>
            </li>
            <li class="topItem">
                <a href="#">
                    <span class="listIcon glyphicon glyphicon-plane"></span>
                    <span>空域信息</span>
                    <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                </a>
                <ul class="downMenu">
                    <li class="downItem">我的任务</li>
                    <li>我的飞机</li>
                    <li>我的余额</li>
                    <li>信誉积分</li>
                </ul>
            </li>
            <li class="topItem">
                <a href="#">
                    <span class="listIcon glyphicon glyphicon-plane"></span>
                    <span>交通规章</span>
                    <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                </a>
                <ul class="downMenu">
                    <li class="downItem">我的任务</li>
                    <li>我的飞机</li>
                    <li>我的余额</li>
                    <li>信誉积分</li>
                </ul>
            </li>
            <li class="topItem">
                <a href="#">
                    <span class="listIcon glyphicon glyphicon-plane"></span>
                    <span>飞行情报</span>
                    <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                </a>
                <ul class="downMenu">
                    <li class="downItem">我的任务</li>
                    <li>我的飞机</li>
                    <li>我的余额</li>
                    <li>信誉积分</li>
                </ul>
            </li>
            <li class="topItem">
                <a href="#">
                    <span class="listIcon glyphicon glyphicon-plane"></span>
                    <span>航空情报</span>
                    <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                </a>
                <ul class="downMenu">
                    <li class="downItem">我的任务</li>
                    <li>我的飞机</li>
                    <li>我的余额</li>
                    <li>信誉积分</li>
                </ul>
            </li>
            <li class="topItem">
                <a href="#">
                    <span class="listIcon glyphicon glyphicon-plane"></span>
                    <span>气象情报</span>
                    <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                </a>
                <ul class="downMenu">
                    <li class="downItem">我的任务</li>
                    <li>我的飞机</li>
                    <li>我的余额</li>
                    <li>信誉积分</li>
                </ul>
            </li>
            <li class="topItem">
                <a href="#">
                    <span class="listIcon glyphicon glyphicon-plane"></span>
                    <span>告警救援</span>
                    <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                </a>
                <ul class="downMenu">
                    <li class="downItem">我的任务</li>
                    <li>我的飞机</li>
                    <li>我的余额</li>
                    <li>信誉积分</li>
                </ul>
            </li>
        </ul>
    </div>
    <div class="content">
        <img src="/image/01.png" alt="">
    </div>
</body>
<script src="/js/bootstrap.min.js"></script>
<script src="/js/jquery-1.8.3.min.js"></script>
<script type="text/javascript" src="/js/flightPlan.js"></script>
</html>
</body>
</html>
