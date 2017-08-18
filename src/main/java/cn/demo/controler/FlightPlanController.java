package cn.demo.controler;

import cn.demo.model.FlightPlan;
import cn.demo.service.FlightPlanService;
import net.sf.json.JSON;
import net.sf.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
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
    @RequestMapping(value = "/show",method = RequestMethod.GET)
    public String show(Model model, HttpServletRequest request, HttpSession session) throws ParseException {
        String loginName=(String) session.getAttribute("loginName");
        if(loginName==null){
            System.out.println("进入show，失败");
            return "login";
        }else{
            System.out.println("进入show,chenggong");
            Map<String,Object> map=getFlightPlan(model,request);
            model.addAttribute("map",map);
            return "flightPlan";
        }

    }

    /**
     * 异步请求  获取飞行计划数据
     * @return
     */
    @ResponseBody
    @RequestMapping(value="/ajax",method = RequestMethod.GET)
    public JSON showAjax(Model model, HttpServletRequest request) throws ParseException {
        Map<String,Object> map=getFlightPlan(model,request);
        JSONObject json=JSONObject.fromObject(map);
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
        Map<String,Object> map=new HashMap<String, Object>();
         countPage=flightPlanService.getCountByChoose(pageSize,startDate,endDate);//总页码数
         countNumber=(curPage-1)*pageSize;//获取数据的起始位置
         List<FlightPlan> fpList=flightPlanService.getAllByChoose(countNumber,pageSize,startDate,endDate);

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
    @RequestMapping(value="/getFlightPlan",method=RequestMethod.GET)
    public String getFlightPlanById(HttpServletRequest request,@RequestParam int id){
        FlightPlan flightPlan=flightPlanService.getFlightPlanById(id);
        request.setAttribute("flightPlan",flightPlan);
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
     * 点击修改后获取数据并展示
     * @return
     */
    @RequestMapping(value = "/updateDetails",method = RequestMethod.GET)
    public String updateDetails(HttpServletRequest request,@RequestParam int id){
        FlightPlan flightPlan=flightPlanService.getFlightPlanById(id);
        request.setAttribute("flightPlan",flightPlan);
        return "updatePlan";
    }

    /**
     * 根据主键修改计划信息
     * @param request
     * @param flightPlan
     * @return
     */
    @RequestMapping(value="/updateFlightPlan",method=RequestMethod.POST)
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

    /**
     * 转换日期格式
     * @param binder
     */
    @InitBinder
    public void initBinder(WebDataBinder binder) {
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        dateFormat.setLenient(false);
        binder.registerCustomEditor(Date.class, new CustomDateEditor(dateFormat, false));
    }
        /**
         *  添加飞行计划信息
         * @param request
         * @param flightPlan
         * @return
         */
    @RequestMapping(value = "/addFlightPlan",method=RequestMethod.POST)
    public String addFlightPlan(Model model,HttpServletRequest request,HttpSession session, FlightPlan flightPlan) throws ParseException {
        int row=flightPlanService.addFlightPlan(flightPlan);
        System.out.println(row+"========================");
        if(row>0){
            request.setAttribute("message","添加成功！！！");
            return "redirect:/flightPlan/show";
        }else{
            request.setAttribute("message","添加失败！！！");
            return "addPlan";
        }
    }

    /**
     * 跳转到添加飞行计划页面
     * @return
     */
    @RequestMapping("/toAdd")
    public String toAdd(){
        return "addFlightPlan";
    }
}
