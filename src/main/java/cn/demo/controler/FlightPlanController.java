package cn.demo.controler;

import cn.demo.model.FlightPlan;
import cn.demo.service.FlightPlanService;
import net.sf.json.JSON;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by HDPC on 2017/7/27.
 */
@Controller
@RequestMapping("/flightPlan")
public class FlightPlanController {
    @Autowired
    private FlightPlanService flightPlanService;



    /**
     * 初次加载  获取飞行计划数据
     * @param model
     * @param request
     * @return
     */
    @RequestMapping("/show")
    public String show(Model model,HttpServletRequest request) throws ParseException {
       Map<String,Object> map=getFlightPlan(model,request);
        model.addAttribute("map",map);
        return "flightPlan";
    }

    /**
     * 异步请求  获取飞行计划数据
     * @return
     */
    @ResponseBody
    @RequestMapping("/ajax")
    public JSON showAjax(Model model, HttpServletRequest request) throws ParseException {
        Map<String,Object> map=getFlightPlan(model,request);
        JSONObject json=JSONObject.fromObject(map);
        System.out.println("转成json了===================");
        return json;
    }

    /**
     * 获取符合条件的飞行计划记录数
     * @return
     */
    public Map<String, Object> getFlightPlan(Model model,HttpServletRequest request) throws ParseException {
         int curPage;//当前页码
         int pageSize=10;//每页显示的记录数
         int countNumber;//分页起始位置下表
         int countPage;//总页码数
         Date startDate=null;
         Date endDate=null;
         //当前页码
         String pageNo=request.getParameter("curPage");
         if (pageNo==null||pageNo==""){
             curPage=1;
         }else{
             curPage=Integer.parseInt(pageNo);
             System.out.println(" curPage="+curPage+"==================");
         }
        //开始时间
        String startTime=request.getParameter("startDate")==null?"":request.getParameter("startDate");
        //结束时间
        String endTime=request.getParameter("endDate")==null?"":request.getParameter("endDate");
        //用户编号
//       int userId=session.get

        SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd");
        if(startTime!=""){
             startDate=sdf.parse(startTime);
        }
        if(endTime!=""){
             endDate=sdf.parse(endTime);
        }
        System.out.println("startTime:"+startTime);
        System.out.println("endTime:"+endTime);
        System.out.println("startDate:"+startDate);
        System.out.println("endDate:"+endDate);
        Map<String,Object> map=new HashMap<String, Object>();
         countPage=flightPlanService.getCountByChoose(pageSize,startDate,endDate);//总页码数
         countNumber=(curPage-1)*pageSize;//获取数据的起始位置
         List<FlightPlan> fpList=flightPlanService.getAllByChoose(countNumber,pageSize,startDate,endDate);
        System.out.println(fpList.size()+"条数据===================");
         //回传的参数
        map.put("fpList",fpList);
        map.put("curPage",curPage);
        map.put("countPage",countPage);
        map.put("startDate",startTime);
        map.put("endDate",endTime);

         return map;
    }

    /**
     * 根据主键获取信息并跳转到展示页面
     * @return
     */
    @RequestMapping("/getFlightPlan")
    public String getFlightPlanById(HttpServletRequest request){
        String id=request.getParameter("id");
        FlightPlan flightPlan=flightPlanService.getFlightPlanById(Integer.parseInt(id));
        return "showPlan";
    }

    /**
     * 根据主键删除计划信息  异步
     * @return
     */
    @RequestMapping("/deleteFlightPlan")
    public String deleteFlightPlanById(HttpServletRequest request){
        String id=request.getParameter("id");
        int row=flightPlanService.deleteFlightPlanById(id);
        if(row>0){
            request.setAttribute("message","删除成功！！！");
            return "deletePlan";
        }else{
            request.setAttribute("message","删除失败！！！");
            return "deletePlan";
        }
    }

    /**
     * 根据主键修改计划信息
     * @param request
     * @param flightPlan
     * @return
     */
    @RequestMapping("/updateFlightPlan")
    public String updateFlightPlanById(HttpServletRequest request, @RequestParam FlightPlan flightPlan){
        int row=flightPlanService.updateFlightPlanById(flightPlan);
        if(row>0){
            request.setAttribute("message","修改成功！！！");
            return "deletePlan";
        }else{
            request.setAttribute("message","修改失败！！！");
            return "updatePlan";
        }
    }

    public String addFlightPlan(HttpServletRequest request,@RequestParam FlightPlan flightPlan){
        int row=flightPlanService.addFlightPlan(flightPlan);
        if(row>0){
            request.setAttribute("message","添加成功！！！");
            return "addPlan";
        }else{
            request.setAttribute("message","添加失败！！！");
            return "addPlan";
        }
    }
}
