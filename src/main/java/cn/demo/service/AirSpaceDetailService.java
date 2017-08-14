package cn.demo.service;

import cn.demo.model.AirSapceDetail;

import java.awt.*;
import java.util.*;
import java.util.List;

/**
 * Created by DELL on 2017/8/2.
 */
public interface AirSpaceDetailService {
    //增加空域数据
    public void saveData(AirSapceDetail airSapceDetail);

    //查询空域数据信息
    public List<AirSapceDetail> find_asdAll();
}
