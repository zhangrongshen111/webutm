package cn.demo.service;

import cn.demo.model.User;

import java.util.List;

/**
 * Created by HDPC on 2017/7/27.
 */
public interface UserService {
    /**
     * 登陆验证
     * @param loginName
     * @param pwd
     * @return
     */
    public User login(String loginName,String pwd);

    /**
     * 查询所有用户信息
     * @return
     */
    public List<User> getAll();
}
