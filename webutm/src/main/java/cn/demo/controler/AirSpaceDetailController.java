package cn.demo.controler;

import cn.demo.model.AirSapceDetail;
import cn.demo.service.AirSpaceDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


/**
 * Created by DELL on 2017/8/3.
 */
@Controller
@RequestMapping(value = "/showMapAirSpaceDetail")
public class AirSpaceDetailController {

    @Autowired
    private AirSpaceDetailService airSpaceDetailSrevice;

    @ResponseBody
    @RequestMapping(value = "/save_polygon",method ={RequestMethod.GET, RequestMethod.POST})
    public String save_polygon(@RequestBody List<AirSapceDetail> asd_data){
        System.out.println("进入Controller");
        System.out.println("--------------1  2   3-------------------");
        System.out.println("这里是修改的地方");
        System.out.println("此次插入数据条数为："+asd_data.size());
        for (AirSapceDetail asd_data1 : asd_data) {
            airSpaceDetailSrevice.saveData(asd_data1);
        }
        return "success";
    }
    @ResponseBody
    @RequestMapping(value = "/find_polygon",method = RequestMethod.POST)
    public List<AirSapceDetail> findPolygon(){
        System.out.println("进入到find_polygon!");
        List<AirSapceDetail> asdList = airSpaceDetailSrevice.find_asdAll();
        Map<String,Object> asdMap = new HashMap<String, Object>();
//        for (int i = 0; i <asdList.size() ; i++) {
//            if(asdList.get(i))
//        }
        return asdList;
    }
}
