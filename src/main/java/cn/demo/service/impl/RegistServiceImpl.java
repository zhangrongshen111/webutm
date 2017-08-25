package cn.demo.service.impl;

import cn.demo.dao.RegistDao;
import cn.demo.model.User;
import cn.demo.service.RegistService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by New52 on 2017/8/24.
 */
@Service
public class RegistServiceImpl {
    @Autowired
    private RegistDao registDao;
    /*
    用户注册信息
     */
    public int  Regist(User user){
        return registDao.Registadd(user);
    }
}
