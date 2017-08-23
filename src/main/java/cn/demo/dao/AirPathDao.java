package cn.demo.dao;

import cn.demo.model.AirPath;

import java.util.List;

/**
 * Created by ThinkPad on 2017/8/15.
 */
public interface AirPathDao {
    //保存航迹数据
    public void save_apData(AirPath airPath);
    //查询所有航迹信息
    public List<AirPath> find_apData();
}
