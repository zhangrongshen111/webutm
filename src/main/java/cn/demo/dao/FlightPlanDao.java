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
}
