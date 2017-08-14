package cn.demo.dao;

import cn.demo.model.AirSapceDetail;

import java.util.List;

/**
 * Created by DELL on 2017/8/2.
 */

public interface AirSpaceDetailDao {

    //存储空域相关信息
    public void save_asd(AirSapceDetail airSapceDetail);

    //查询空域相关信息
    public List<AirSapceDetail> find_asdAll();

}
