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
import java.util.List;

/**
 * Created by HDPC on 2017/7/27.
 */
@Controller
@RequestMapping(value = "/user",method = RequestMethod.POST)
public class UserController {
    @Autowired
    private UserService userService;
    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public String loginShow(HttpSession session,HttpServletRequest request){
        //,@RequestParam("loginName") String loginName,@RequestParam("pwd") String pwd
        String loginName=request.getParameter("loginName");
        String pwd=request.getParameter("pwd");
        User user=userService.login(loginName,pwd);
        System.out.println("进入controller=======================================");
        if(user==null){
            request.setAttribute("message","账号或密码错误！请重新输入！！！");
            return "index";
        }else{
            session.setAttribute("loginName",user.getLoginName());
            return "index";
        }

    }



    @RequestMapping(value = "/show",method = RequestMethod.GET)
    public String show(){

        return "login";
    }

}
