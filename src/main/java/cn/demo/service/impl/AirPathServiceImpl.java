package cn.demo.service.impl;

import cn.demo.dao.AirPathDao;
import cn.demo.model.AirPath;
import cn.demo.service.AirPathService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by ThinkPad on 2017/8/15.
 */
@Service
public class AirPathServiceImpl implements AirPathService{

    @Autowired
    private AirPathDao airPathDao;
    //保存航迹信息
    public void save_apData(AirPath airPaths){
        airPathDao.save_apData(airPaths);
    }
    //查询所有航迹信息
    public List<AirPath> find_apData() {
        return airPathDao.find_apData();
    }
}
