package cn.demo.service;

import cn.demo.dao.AccountDao;
import cn.demo.model.Account;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import javax.annotation.Resource;
import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by Administrator on 2017/7/25.
 */
@RunWith(SpringJUnit4ClassRunner.class)
//这个是用来加载写好的配置文件，传入的值是数组形式多个配置文件如下 {"····","·······"}
@ContextConfiguration({"classpath:spring/spring-dao-config.xml"})
public class AccountServiceTest {
     @Autowired
    private AccountDao accountDao;

    @Test
    public void getAllAccount() throws Exception {
        List<Account> accountList=accountDao.getAllAccount();
        System.out.println("accountList=" + accountList.toString());
    }
}