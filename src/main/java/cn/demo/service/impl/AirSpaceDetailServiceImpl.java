package cn.demo.service.impl;

import cn.demo.dao.AirSpaceDetailDao;
import cn.demo.model.AirSpaceDetail;
import cn.demo.service.AirSpaceDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
/**
 * Created by DELL on 2017/8/2.
 */
@Service
public class AirSpaceDetailServiceImpl implements AirSpaceDetailService {
    @Autowired
    private AirSpaceDetailDao airSpaceDetailDao;
    /**
     * @param airSpaceDetail
     * 增加空域数据
     */
    public void saveData(AirSpaceDetail airSpaceDetail) {
        airSpaceDetailDao.save_asd(airSpaceDetail);
    }
    /*
    * 自动查询查询空域信息
    * */
    public List<AirSpaceDetail> find_asdAll() {
        List<AirSpaceDetail> listAsd = airSpaceDetailDao.find_asdAll();
        return listAsd;
    }
}