package cn.demo.service.impl;

import cn.demo.dao.AirSpaceDetailDao;
import cn.demo.model.AirSapceDetail;
import cn.demo.service.AirSpaceDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
/**
 * Created by DELL on 2017/8/2.
 */
@Service
public class AirSpaceDetailServiceImpl implements AirSpaceDetailService {
    @Autowired
    private AirSpaceDetailDao airSpaceDetailDao;
    /**
     * @param airSapceDetail
     * 增加空域数据
     */
    public void saveData(AirSapceDetail airSapceDetail) {
        airSpaceDetailDao.save_asd(airSapceDetail);
    }
    /*
    * 自动查询查询空域信息
    * */
    public List<AirSapceDetail> find_asdAll() {
        List<AirSapceDetail> listAsd = airSpaceDetailDao.find_asdAll();
        return listAsd;
    }
}