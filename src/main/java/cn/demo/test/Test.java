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
import java.util.List;

/**
 * Created by HDPC on 2017/7/27.
 */
public class Test {

    public static void main(String[] args) throws IOException {

        String resource="mybatis-config.xml";
        Reader reader = Resources.getResourceAsReader(resource);
        SqlSessionFactory ssf= new SqlSessionFactoryBuilder().build(reader);

        SqlSession sqlSession = ssf.openSession();
        UserDao userDao=sqlSession.getMapper(UserDao.class);
        List<User> list=userDao.getAll();
        if(list.size()==0){
            System.out.println("没有数据");
        }else{
            System.out.println(list.get(0).getLoginName());
        }
    }
}
