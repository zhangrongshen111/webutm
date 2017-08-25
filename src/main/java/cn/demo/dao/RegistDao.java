package cn.demo.dao;


import cn.demo.model.User;
import org.apache.ibatis.annotations.Param;

/**
 * Created by New52 on 2017/8/24.
 */
public interface RegistDao {
    //注册用户
    public int Registadd(@Param("regist")User user);
}
