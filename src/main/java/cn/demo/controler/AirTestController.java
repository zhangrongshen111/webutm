package cn.demo.controler;

import cn.demo.model.AirTest;
import cn.demo.service.AirTestService;
import com.fasterxml.jackson.databind.jsonFormatVisitors.JsonArrayFormatVisitor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.StaticApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
//import sun.org.mozilla.javascript.internal.json.JsonParser;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2017/7/27.
 */
@Controller
public class AirTestController {

    @Autowired
    private AirTestService airTestService;
    /**
     *用于查询所有飞机定点坐标位置，返回List<AirTest>
     */
    @ResponseBody
    @RequestMapping(value ="/json",method= RequestMethod.GET)
    public List<AirTest> showMapView(){
        List<AirTest> findAll= airTestService.findAll();
        return findAll;
    }
}
