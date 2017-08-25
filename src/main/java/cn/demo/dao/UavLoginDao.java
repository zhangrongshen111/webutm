package cn.demo.dao;

import cn.demo.model.UavBrand;
import cn.demo.model.UavModel;
import cn.demo.model.UavType;

import java.util.List;

/**
 * Created by Administrator on 2017/8/23.
 */
public interface UavLoginDao {
    //查找无人机品牌
    public List<UavBrand> findUavBrand();

    //根据无人机品牌查看无人机具体型号
    public List<UavModel> findUavVersion(Integer id);

    //查看无人机用途
    public List<UavType> findUavType();

    //保存无人机注册相关信息
    public void saveUavDetail();
}
