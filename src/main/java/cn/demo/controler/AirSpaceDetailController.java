package cn.demo.controler;

import cn.demo.model.AirSpaceDetail;
import cn.demo.service.AirSpaceDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;


/**
 * Created by DELL on 2017/8/3.
 */
@Controller
@RequestMapping(value = "/showMapAirSpaceDetail")
public class AirSpaceDetailController {

    @Autowired
    private AirSpaceDetailService airSpaceDetailSrevice;
	//增加空域信息
    @ResponseBody
    @RequestMapping(value = "/save_polygon",method ={RequestMethod.GET, RequestMethod.POST})
    public String save_polygon(@RequestBody AirSpaceDetail asd_data){
        System.out.println("进入showMapAirSpaceDetail/save_polygon");
        airSpaceDetailSrevice.saveData(asd_data);
        return "success";
    }
	//查询空域信息
    @ResponseBody
    @RequestMapping(value = "/find_polygon",method = RequestMethod.POST)
    public List<AirSpaceDetail> findPolygon(){
        System.out.println("进入到showMapAirSpaceDetail/find_polygon");
        List<AirSpaceDetail> asdList = airSpaceDetailSrevice.find_asdAll();
        return asdList;
    }
}
