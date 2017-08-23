package cn.demo.dao;

import cn.demo.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by HDPC on 2017/7/27.
 */
@Repository
public interface UserDao {
    //登陆验证
    public User login(String loginName,String pwd);
    //查询所有用户
    public List<User> getAll();
}
