package cn.demo.service;

import cn.demo.dao.FlightPlanDao;
import cn.demo.model.FlightPlan;

import java.util.Date;
import java.util.List;

/**
 * Created by HDPC on 2017/7/27.
 */
public interface FlightPlanService {
    /**
     * 查询全部飞行计划信息
     * @return
     */
    public List<FlightPlan> getAllByChoose(int countNumber,int pageSize,Date startDate,Date endDate);


    /**
     * 查询符合条件的飞行计划记录数
     * @return
     */
    public int getCountByChoose(int pageSize,Date startDate,Date endDate);

    /**
     * 根据主键查询信息
     * @param id
     * @return
     */
    public FlightPlan getFlightPlanById(int id);

    /**
     * 根据主键删除信息
     * @param id
     * @return
     */
    public int deleteFlightPlanById(String id);

    /**
     * 添加飞行信息
     * @param flightPlan
     * @return
     */
    public int addFlightPlan(FlightPlan flightPlan);

    /**
     * 修改飞行计划信息
     * @param flightPlan
     * @return
     */
    public int updateFlightPlanById(FlightPlan flightPlan);
}
