package cn.demo.service;


import cn.demo.model.Uav;
import cn.demo.model.UavBrand;
import cn.demo.model.UavModel;
import cn.demo.model.UavType;

import java.util.List;

/**
 * Created by Administrator on 2017/8/23.
 */
public interface UavLoginService {

    //查询无人机品牌
    public List<UavBrand> findUavBrand();

    //根据无人机品牌查询无人机型号
    public List<UavModel> findUavVersion(Integer id);

    //查看无人机用途
    public List<UavType> finUavType();

    //增加无人机注册信息
    public void saveUavDetail(Uav uav);

    //当前用户下已注册无人机信息
    public List<Object> findUserIdUavAll(String UserId);
}
