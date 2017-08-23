package cn.demo.service;

import cn.demo.dao.AirTestDao;
import cn.demo.model.AirTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by Administrator on 2017/7/27.
 */
@Service
public class AirTestService {
    @Autowired
    private AirTestDao airTestDao;

    @Transactional
    public List<AirTest> findAll(){
        List<AirTest> findList = airTestDao.findAll();
        return findList;
    }

}
