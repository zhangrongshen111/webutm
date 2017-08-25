<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en" class="no-js">
<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <%--<title>天钦爱翼</title>--%>
    <%--<link rel="stylesheet" href="/css/bootstrap.min.css"/>--%>
    <%--<link rel="stylesheet" type="text/css" href="/fonts/font-awesome-4.2.0/css/font-awesome.min.css" />--%>
    <%--<link rel="stylesheet" type="text/css" href="/css/normalize.css" />--%>
    <%--<link rel="stylesheet" href="/css/nav.css"/>--%>
    <%--<link rel="stylesheet" type="text/css" href="/css/menu_elastic.css" />--%>
    <%--<link rel="stylesheet" type="text/css" href="/css/index.css" />--%>
    <%--<script src="/js/snap.svg-min.js"></script>--%>
    <!--[if IE]>
    <!--<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>-->
    <![endif]-->
</head>
<body>
<%--<div class="wrapper">--%>
    <div id="nav">
        <div class="nav-left inlineBlock">
            <a href="#"><span>Lucky</span>Wing</a>
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
                <a href="login.html"> <img src="/image/01.png" alt="" width="100%" height="100%"/></a>
            </div>
        </div>
    </div>
    <div class="menu-wrap">
        <nav class="gn-menu-wrapper thead">
            <div id="menuList">
                <ul class="gn-menu topMenu">
                    <div class="targetIcon"></div>
                    <li class="topItem open">
                        <a href="#">
                            <span class="listIcon glyphicon glyphicon-home"></span>
                            <span>个人首页</span>
                            <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul class="downMenu">
                            <li class="downItem"><a href="/index.jsp" >我的首页</a></li>
                            <li class="downItem">
                                <form action="${pageContext.request.contextPath}/flightPlan/show" method="post">
                                    <input type="submit" value="飞行计划">
                                </form>
                            </li>
                            <li class="downItem"><a href="${pageContext.request.contextPath}/space/showMap">空域管理</a></li>
                            <li class="downItem"><a href="${pageContext.request.contextPath}/space/showAirPath">航迹管理</a></li>
                        </ul>
                    </li>
                    <li class="topItem open">
                        <a href="#">
                            <span class="listIcon glyphicon glyphicon-plane"></span>
                            <span>无人机管理</span>
                            <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul class="downMenu">
                            <li class="downItem"><a href="#">飞机注册</a></li>
                            <li class="downItem"><a href="${pageContext.request.contextPath}/space/showLoginNav">无人机注册</a></li>
                            <li class="downItem"><a href="#">我的余额</a></li>
                            <li class="downItem"><a href="#">信誉积分</a></li>
                        </ul>
                    </li>
                    <li class="topItem open">
                        <a href="#">
                            <span class="listIcon glyphicon glyphicon-plane"></span>
                            <span>无人飞机</span>
                            <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul class="downMenu">
                            <li class="downItem"><a href="#">我的任务</a></li>
                            <li class="downItem"><a href="#">我的飞机</a></li>
                            <li class="downItem"><a href="#">我的余额</a></li>
                            <li class="downItem"><a href="#">信誉积分</a></li>
                        </ul>
                    </li>
                    <li class="topItem open">
                        <a href="#">
                            <span class="listIcon glyphicon glyphicon-plane"></span>
                            <span>空域信息</span>
                            <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul class="downMenu">
                            <li class="downItem"><a href="#">我的任务</a></li>
                            <li class="downItem"><a href="#">我的飞机</a></li>
                            <li class="downItem"><a href="#">我的余额</a></li>
                            <li class="downItem"><a href="#">信誉积分</a></li>
                        </ul>
                    </li>
                    <li class="topItem open">
                        <a href="#">
                            <span class="listIcon glyphicon glyphicon-plane"></span>
                            <span>交通规章</span>
                            <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul class="downMenu">
                            <li class="downItem"><a href="#">我的任务</a></li>
                            <li class="downItem"><a href="#">我的飞机</a></li>
                            <li class="downItem"><a href="#">我的余额</a></li>
                            <li class="downItem"><a href="#">信誉积分</a></li>
                        </ul>
                    </li>
                    <li class="topItem open ">
                        <a href="#">
                            <span class="listIcon glyphicon glyphicon-plane"></span>
                            <span>飞行情报</span>
                            <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul class="downMenu">
                            <li class="downItem"><a href="#">我的任务</a></li>
                            <li class="downItem"><a href="#">我的飞机</a></li>
                            <li class="downItem"><a href="#">我的余额</a></li>
                            <li class="downItem"><a href="#">信誉积分</a></li>
                        </ul>
                    </li>
                    <li class="topItem open">
                        <a href="#">
                            <span class="listIcon glyphicon glyphicon-plane"></span>
                            <span>航空情报</span>
                            <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul class="downMenu">
                            <li class="downItem"><a href="#">我的任务</a></li>
                            <li class="downItem"><a href="#">我的飞机</a></li>
                            <li class="downItem"><a href="#">我的余额</a></li>
                            <li class="downItem"><a href="#">信誉积分</a></li>
                        </ul>
                    </li>
                    <li class="topItem open">
                        <a href="#">
                            <span class="listIcon glyphicon glyphicon-plane"></span>
                            <span>气象情报</span>
                            <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul class="downMenu">
                            <li class="downItem"><a href="#">我的任务</a></li>
                            <li class="downItem"><a href="#">我的飞机</a></li>
                            <li class="downItem"><a href="#">我的余额</a></li>
                            <li class="downItem"><a href="#">信誉积分</a></li>
                        </ul>
                    </li>
                    <li class="topItem open">
                        <a href="#">
                            <span class="listIcon glyphicon glyphicon-plane"></span>
                            <span>告警救援</span>
                            <span class="bottomIcon glyphicon glyphicon-chevron-down"></span>
                        </a>
                        <ul class="downMenu">
                            <li class="downItem"><a href="#">我的任务</a></li>
                            <li class="downItem"><a href="#">我的飞机</a></li>
                            <li class="downItem"><a href="#">我的余额</a></li>
                            <li class="downItem"><a href="#">信誉积分</a></li>
                        </ul>
                    </li>
                </ul>
            </div><!-- /gn-scroller -->
        </nav>
        <!--<button class="close-button" id="close-button"></button>-->
        <div class="morph-shape" id="morph-shape" data-morph-open="M-1,0h101c0,0,0-1,0,395c0,404,0,405,0,405H-1V0z">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 180 700" preserveAspectRatio="none">
                <path d="M-1,0h101c0,0-97.833,153.603-97.833,396.167C2.167,627.579,180,700,100,800H-1V0z"/>
            </svg>
        </div>
    </div>
    <button class="menu-button" id="open-button"></button>

<%--</div>--%>
<!-- /container -->
<%--<script type="text/javascript" src="/js/bootstrap.min.js"></script>--%>
<%--<script src="/js/jquery-1.8.3.min.js"></script>--%>
<%--<script src="/js/classie.js" type="text/javascript" language="javascript"></script>--%>
<%--<script src="/js/toggleMenu.js" type="text/javascript" language="javascript"></script>--%>
<%--<script src="/js/menu.js" type="text/javascript" language="javascript"></script>--%>
<%--<script>--%>
    <%--$(document).ready(function(){--%>

        <%--$('.menu-button').toggle(function(){--%>
            <%--$('.content').css('width','85%');--%>
        <%--},function(){--%>
            <%--$('.content').css('width','100%');--%>
        <%--});--%>
    <%--});--%>
<%--</script>--%>
</body>
</html>
