package cn.demo.controler;

import cn.demo.model.FlightPlan;
import cn.demo.service.FlightPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;

/**
 * Created by HDPC on 2017/7/27.
 */
@Controller
@RequestMapping(value = "/flightPlan",method = RequestMethod.GET)
public class FlightPlanController {
    @Autowired
    private FlightPlanService flightPlanService;
    @RequestMapping(value = "/show",method = RequestMethod.GET)
    public String show(Model model){
        System.out.println("进入了controller");
        List<FlightPlan> fpList=flightPlanService.getAll();
        System.out.println(fpList.size()+"====================================");
        model.addAttribute("fpList",fpList);
        return "flightPlan";
    }
}
