package cn.demo.controler;

import cn.demo.model.User;
import cn.demo.service.RegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;

/**
 * Created by New52 on 2017/8/24.
 */
@Controller

public class RegistController {
    @Autowired
    private RegistService registService;
    @RequestMapping(value = "/regist", method = RequestMethod.POST)
    public String regist(Model model, HttpServletRequest request, HttpSession session,User user) throws ParseException {
        System.out.println("执行此方法");
       int row= registService.Registadd(user);
        if(row>0){
            request.setAttribute("message","添加成功！！！");
            return "index";
        }else {
            request.setAttribute("message", "添加失败！！！");
            return "main";//此处返回有问题
        }
    }
}
