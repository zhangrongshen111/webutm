package cn.demo.service;

import cn.demo.dao.AccountDao;
import cn.demo.model.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Administrator on 2017/7/25.
 */
@Service
public class AccountService {
    @Autowired
    private AccountDao accountDao;

    /**
     *
     * @return
     */
    @Transactional
    public List<Account> getAllAccount(){
        List<Account> accountList=new ArrayList<Account>();
        accountList=accountDao.getAllAccount();
        return accountList;
    }
}
