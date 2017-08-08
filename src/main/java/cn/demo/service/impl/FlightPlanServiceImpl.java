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
}
