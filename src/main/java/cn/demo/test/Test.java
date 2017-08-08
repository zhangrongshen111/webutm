package cn.demo.test;

import cn.demo.dao.UserDao;
import cn.demo.model.Account;
import cn.demo.model.User;
import cn.demo.service.UserService;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import java.io.IOException;
import java.io.Reader;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.TimeZone;

/**
 * Created by HDPC on 2017/7/27.
 */
public class Test {

    public static void main(String [] args){
        long unixstamp = 1437646938000l;
        Date dt = new Date(unixstamp);
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH：mm：ss");
        sdf.setTimeZone(TimeZone.getTimeZone("GMT + 8"));
        System.out.println("jdskfjs"+sdf.format(dt));
    }
}
