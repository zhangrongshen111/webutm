package cn.demo.controler;

import cn.demo.model.User;
import cn.demo.service.RegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by New52 on 2017/8/24.
 */
@Controller
@RequestMapping(value = "/user")
public class RegistController {
    @Autowired
    private  RegistService registService;
    @RequestMapping(value = "/regist")
    public String regist(Model model,User user){
        System.out.println("get in");
        int row =registService.Registadd(user);
        if(row>0){
            model.addAttribute("message","注册成功！！！");
            return "index";
        }else {
            model.addAttribute("message", "添加失败！！！");
            return "/register.jsp";//此处返回有问题
        }
    }


}
