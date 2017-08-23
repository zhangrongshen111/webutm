package cn.demo.dao;

import cn.demo.model.AirTest;

import java.util.List;

/**
 * Created by Administrator on 2017/7/27.
 */

public interface AirTestDao {
    //查找所有飞机所在位置
    public List<AirTest> findAll();
}
