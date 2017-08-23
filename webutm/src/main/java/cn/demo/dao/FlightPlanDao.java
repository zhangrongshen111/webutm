package cn.demo.dao;

import cn.demo.model.FlightPlan;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

/**
 * Created by HDPC on 2017/7/27.
 */
@Repository
public interface FlightPlanDao {
    /**
     * 查询全部飞行计划信息
     * @return
     */
    public List<FlightPlan> getAllByChoose(@Param("countNumber") int countNumber, @Param("pageSize") int pageSize,
                                   @Param("startDate") Date startDate, @Param("endDate") Date endDate);

    /**
     * 查询符合条件的飞行计划记录数
     * @return
     */
    public int getCountByChoose(@Param("startDate") Date startDate, @Param("endDate") Date endDate);

    /**
     * 根据主键查询信息
     * @param id
     * @return
     */
    public FlightPlan getFlightPlanById(@Param("id") int id);

    /**
     * 根据主键删除信息
     * @param id
     * @return
     */
    public int deleteFlightPlanById(@Param("id") String id);

    /**
     * 添加飞行计划信息
     * @param flightPlan
     * @return
     */
    public int addFlightPlan(@Param("flightPlan") FlightPlan flightPlan);

    /**
     * 修改飞行计划信息
     * @param flightPlan
     * @return
     */
    public int updateFlightPlanById(@Param("flightPlan") FlightPlan flightPlan);
}
