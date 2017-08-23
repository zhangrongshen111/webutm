package cn.demo.service;

import cn.demo.model.AirSpaceDetail;

import java.util.List;

/**
 * Created by DELL on 2017/8/2.
 */
public interface AirSpaceDetailService {
    //增加空域数据
    public void saveData(AirSpaceDetail airSapceDetail);

    //查询空域数据信息
    public List<AirSpaceDetail> find_asdAll();
}
