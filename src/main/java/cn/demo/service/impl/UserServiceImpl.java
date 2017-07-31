package cn.demo.service.impl;


import cn.demo.dao.UserDao;
import cn.demo.model.User;
import cn.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by HDPC on 2017/7/27.
 */
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserDao userDao;
    /**
     * 登陆验证
     * @param loginName
     * @param pwd
     * @return
     */
    public User login(String loginName,String pwd) {
        User user=userDao.login(loginName,pwd);
        return user;
    }



    public List<User> getAll() {

        return userDao.getAll();
    }
}
