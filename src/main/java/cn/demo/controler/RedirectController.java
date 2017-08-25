package cn.demo.controler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by DELL on 2017/8/1.
 */
@Controller
@RequestMapping("/space")
public class RedirectController {
    //跳转到展示空域信息界面
    @RequestMapping("/showMap")
    public String  Redirect(){
        System.out.println("进入showMap=============================");
        return "showMap";
    }
    //跳转到展示航迹信息
    @RequestMapping(value = "/showAirPath",method = RequestMethod.GET)
    public String  RedirectAirPath(){
        return "showMap_AirPath";
    }
    //跳转到登录界面
    @RequestMapping(value = "/showlogin",method = RequestMethod.GET)
    public String  RedirectLogin(){
        return "login";
    }
    //跳转到无人机注册
    @RequestMapping(value = "/showLoginNav")
    public String  RedirectLoginNav(){
        return "loginUav";
    }
}
