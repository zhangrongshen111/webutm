package cn.demo.model;

import java.sql.Date;

public class User {
    private Long userid;
    private String username;
    private String userpwd;
    private Long age;
    private Long sex;
    private Long phone;
    private String email;
    private String address;
    private String cardid;
    private Long iddelete;
    private java.sql.Date lastupdatetime;
    private java.sql.Date lastlogintime;
    private Long ut_id;

    public User(Long userid, String username, String userpwd, Long age, Long sex, Long phone, String email, String address, String cardid, Long iddelete, Date lastupdatetime, Date lastlogintime, Long ut_id) {
        this.userid = userid;
        this.username = username;
        this.userpwd = userpwd;
        this.age = age;
        this.sex = sex;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.cardid = cardid;
        this.iddelete = iddelete;
        this.lastupdatetime = lastupdatetime;
        this.lastlogintime = lastlogintime;
        this.ut_id = ut_id;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserpwd() {
        return userpwd;
    }

    public void setUserpwd(String userpwd) {
        this.userpwd = userpwd;
    }

    public Long getAge() {
        return age;
    }

    public void setAge(Long age) {
        this.age = age;
    }

    public Long getSex() {
        return sex;
    }

    public void setSex(Long sex) {
        this.sex = sex;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCardid() {
        return cardid;
    }

    public void setCardid(String cardid) {
        this.cardid = cardid;
    }

    public Long getIddelete() {
        return iddelete;
    }

    public void setIddelete(Long iddelete) {
        this.iddelete = iddelete;
    }

    public java.sql.Date getLastupdatetime() {
        return lastupdatetime;
    }

    public void setLastupdatetime(java.sql.Date lastupdatetime) {
        this.lastupdatetime = lastupdatetime;
    }

    public java.sql.Date getLastlogintime() {
        return lastlogintime;
    }

    public void setLastlogintime(java.sql.Date lastlogintime) {
        this.lastlogintime = lastlogintime;
    }

    public Long getUt_id() {
        return ut_id;
    }

    public void setUt_id(Long ut_id) {
        this.ut_id = ut_id;
    }

    @Override
    public String toString() {
        return "User{" +
                "userid=" + userid +
                ", username='" + username + '\'' +
                ", userpwd='" + userpwd + '\'' +
                ", age=" + age +
                ", sex=" + sex +
                ", phone=" + phone +
                ", email='" + email + '\'' +
                ", address='" + address + '\'' +
                ", cardid='" + cardid + '\'' +
                ", iddelete=" + iddelete +
                ", lastupdatetime=" + lastupdatetime +
                ", lastlogintime=" + lastlogintime +
                ", ut_id=" + ut_id +
                '}';
    }
}
