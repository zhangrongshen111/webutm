package cn.demo.service;

/**
 * Created by New52 on 2017/8/24.
 */

import cn.demo.dao.RegistDao;
import cn.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public interface RegistService {
  //注册用户
    public int Registadd(User  user);


}
