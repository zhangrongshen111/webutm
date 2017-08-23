package cn.demo.controler;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by DELL on 2017/8/1.
 */
@Controller
@RequestMapping("/space")
public class RedirectController {
    //跳转到展示地图页面
    @RequestMapping("/showMap")
    public String  Redirect(){
        System.out.println("进入showMap=============================");
        return "showMap";
    }
    //跳转到展示地图页面
    @RequestMapping(value = "/showAirPath",method = RequestMethod.GET)
    public String  RedirectAirPath(){
        return "demo1";
    }
    //跳转到展示地图页面
    @RequestMapping(value = "/showlogin",method = RequestMethod.GET)
    public String  RedirectLogin(){
        return "login";
    }
}
