
package cn.demo.controler;

import cn.demo.model.Uav;
import cn.demo.model.UavBrand;
import cn.demo.model.UavModel;
import cn.demo.model.UavType;
import cn.demo.service.UavLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
/**
 * Created by Administrator on 2017/8/23.
 * 处理无人机注册相关问题
 */
@Controller
@RequestMapping(value = "/uav")
public class UavLoginController {
    @Autowired
    private UavLoginService uavLoginService;

    /**
     * 处理无人机注册时 无人机品牌下拉框
     * @return
     */
    @RequestMapping(value = "/findUavBrand",method = {RequestMethod.GET,RequestMethod.POST})
    @ResponseBody
    public List<UavBrand> findUavBrand(){
         return uavLoginService.findUavBrand();
    }

    /**
     * 根据无人机品牌确定无人机型号
     */
    @RequestMapping(value = "/findUavVersion")
    @ResponseBody
    public List<UavModel> findUavVersion(HttpServletRequest request){
        System.out.println("进入到findUavVersion------------------------->");
        Integer UavBrandId = Integer.valueOf(request.getParameter("id"));
        return uavLoginService.findUavVersion(UavBrandId);
    }
    /**
     * 查询无人机类型
     */
    @RequestMapping(value = "/findUavType")
    @ResponseBody
    public List<UavType> findUavTypeAll(){
        return uavLoginService.finUavType();
    }

    /**
     * 保存无人机注册信息
     */
    @RequestMapping(value = "/saveUavDetail")
    @ResponseBody
    public String saveUavDetail(@RequestBody Uav uav){
        System.out.println("我进来了");
        return null;
    }
}
