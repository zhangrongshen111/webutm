package cn.demo.controler;

/**
 * Created by Administrator on 2017/7/25.
 */
import cn.demo.model.Account;
import cn.demo.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;


@Controller
@RequestMapping(value = "/simple-demo",method = RequestMethod.POST)
public class Demo1Controller {

    @Autowired
    private AccountService accountService;

    /***
     * value表示在浏览器输入的地址如：http://localhost:8080/simple-demo/demo
     * method可以不写，默认为GET，当处理POST请求时必须要写method = RequestMethod.POST，否则找不到地址
     *
     * @return 返回的是页面的地址，在配置文件InternalResourceViewResolver中配置prefix和suffix相当于最后返回/WEB-INF/jsp/demo1.jsp
     */
    @RequestMapping(value = "/demo",method = RequestMethod.POST)
    public String demo1View(Model model){
        List<Account> accountList= accountService.getAllAccount();
        model.addAttribute("accountList",accountList);
        return "demo1";
    }
}