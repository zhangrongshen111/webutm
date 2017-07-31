package cn.demo.service.impl;

import cn.demo.dao.FlightPlanDao;
import cn.demo.model.FlightPlan;
import cn.demo.service.FlightPlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
    public List<FlightPlan> getAll() {
        List<FlightPlan> list=flightPlanDao.getAll();
        return list;
    }

    public List<FlightPlan> getFlightPlanByChoose() {
        return null;
    }

    public int getCountByChoose() {
        return 0;
    }
}
