package cn.demo.service.impl;

import cn.demo.dao.FlightPlanDao;
import cn.demo.model.FlightPlan;
import cn.demo.service.FlightPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by HDPC on 2017/7/27.
 */
@Service
public class FlightPlanServiceImpl implements FlightPlanService {
    @Autowired
    private FlightPlanDao flightPlanDao;

    // TODO: 2017/7/27 缺少userid
    /**
     * 查询全部飞行计划
     * @return
     */
    public List<FlightPlan> getAllByChoose(int countNumber,int pageSize,Date startDate,Date endDate) {
        List<FlightPlan> list=flightPlanDao.getAllByChoose(countNumber, pageSize,startDate,endDate);
        return list;
    }


    /**
     * 按条件获取总记录数并计算总页数
     * @param pageSize
     * @return
     */
    public int getCountByChoose(int pageSize,Date startDate,Date endDate) {
        int countRow=flightPlanDao.getCountByChoose(startDate,endDate);
        //计算总页码数
        int countPage=countRow/pageSize+(countRow%pageSize==0?0:1);
        return countPage;
    }

    /**
     * 根据主键查询信息
     * @param id
     * @return
     */
    public FlightPlan getFlightPlanById(int id) {
        return flightPlanDao.getFlightPlanById(id);
    }

    /**
     * 根据主键删除信息
     * @param id
     * @return
     */
    public int deleteFlightPlanById(String id) {
        return flightPlanDao.deleteFlightPlanById(id);
    }

    /**
     * 添加飞行飞行计划信息
     * @param flightPlan
     * @return
     */
    public int addFlightPlan(FlightPlan flightPlan) {
        return flightPlanDao.addFlightPlan(flightPlan);
    }

    /**
     * 修改飞行计划信息
     * @param flightPlan
     * @return
     */
    public int updateFlightPlanById(FlightPlan flightPlan) {
        return flightPlanDao.updateFlightPlanById(flightPlan);
    }

}
