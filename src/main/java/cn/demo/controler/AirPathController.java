package cn.demo.controler;

import cn.demo.model.AirPath;
import cn.demo.service.AirPathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

/**
 * Created by ThinkPad on 2017/8/15.
 */
@Controller
@RequestMapping(value = "/showAirPath")
public class AirPathController {

    @Autowired
    private AirPathService airPathService;

    /**
     * 增加航迹信息
     * @param airPath
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/save_apData",method = {RequestMethod.POST,RequestMethod.GET})
    public String save_apDate(@RequestBody AirPath airPath){
        airPathService.save_apData(airPath);
        return "success";
    }

    /**
     * 查询所有航迹信息
     * @return
     */
    @ResponseBody
    @RequestMapping(value = "/show_apData",method = {RequestMethod.POST,RequestMethod.GET})
    public List<AirPath> find_apData(){
        return airPathService.find_apData();
    }
}
