package cn.demo.service.impl;

import cn.demo.dao.UavLoginDao;
import cn.demo.model.Uav;
import cn.demo.model.UavBrand;
import cn.demo.model.UavModel;
import cn.demo.model.UavType;
import cn.demo.service.UavLoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by Administrator on 2017/8/23.
 */
@Service
public class UavLoginServiceImpl implements UavLoginService{

    @Autowired
    private UavLoginDao uavLoginDao;
    //查看无人机品牌
    public List<UavBrand> findUavBrand() {
        return uavLoginDao.findUavBrand();
    }

    //根据无人机品牌查看无人型号
    public List<UavModel> findUavVersion(Integer id) {
        return uavLoginDao.findUavVersion(id);
    }

    //初始化查询无人机用途
    public List<UavType> finUavType() {
        return uavLoginDao.findUavType();
    }

    //保存无人机注册相关信息
    public void saveUavDetail(Uav uav) {

    }

}
