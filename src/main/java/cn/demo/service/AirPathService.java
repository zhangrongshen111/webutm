package cn.demo.service;


import cn.demo.model.AirPath;

import java.util.List;

/**
 * Created by ThinkPad on 2017/8/15.
 */
public interface AirPathService {
    //保存航迹信息(单条信息)
    public void save_apData(AirPath airPaths);
    //查询航迹信息（所有信息）
    public List<AirPath> find_apData();
}
