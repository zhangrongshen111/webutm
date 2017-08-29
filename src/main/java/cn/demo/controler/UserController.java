package cn.demo.controler;

import cn.demo.model.User;
import cn.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * Created by HDPC on 2017/7/27.
 */
@Controller
@RequestMapping(value="/user",method = RequestMethod.POST)
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping(value="/login",method = RequestMethod.POST)
    public String loginShow(@RequestParam String loginName,@RequestParam String pwd, HttpSession session,HttpServletRequest request){
        System.out.println(loginName+"==================");
        System.out.println(pwd+"=====================");
        User user=userService.login(loginName,pwd);
        System.out.println(user.getLoginName()+"===========");
        if(user==null){
            System.out.println("user==null===================");
            System.out.println("user==null===================");
            request.setAttribute("message","账号或密码错误！请重新输入！！！");
            return "login";
        }else{
            session.setAttribute("loginName",user.getLoginName());
            //设置失效时间
            System.out.println("user!=null=================");
            return "redirect:/flightPlan/show";
        }

    }

    @RequestMapping(value = "/show",method = RequestMethod.POST)
    public String show(){
        return "login";
    }
    @RequestMapping(value = "/toRegister" , method = RequestMethod.GET)
    public String toRegister(){
        return "register";
    }
    @RequestMapping(value = "/toLogin" , method = RequestMethod.GET)
    public String toLogin(){
        return "login";
    }

}
