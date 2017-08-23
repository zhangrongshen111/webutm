package cn.demo.model;

import java.util.Date;

/**
 * Created by Administrator on 2017/7/27.
 */
public class AirTest {
    private Integer Id;
    //飞机名称
    private String Name;
    //飞机飞行高度
    private Double Height;
    //飞机所在经度
    private Double Longitude;
    //飞机所在纬度
    private Double Latitude;
    //当前日期
    private Date Date;

    public Integer getId() {
        return Id;
    }

    public void setId(Integer id) {
        Id = id;
    }

    public String getName() {
        return Name;
    }

    public void setName(String name) {
        Name = name;
    }

    public Double getHeight() {
        return Height;
    }

    public void setHeight(Double height) {
        Height = height;
    }

    public Double getLongitude() {
        return Longitude;
    }

    public void setLongitude(Double longitude) {
        Longitude = longitude;
    }

    public Double getLatitude() {
        return Latitude;
    }

    public void setLatitude(Double latitude) {
        Latitude = latitude;
    }

    public java.util.Date getDate() {
        return Date;
    }

    public void setDate(java.util.Date date) {
        Date = date;
    }

    @Override
    public String toString() {
        return "AirTest{" +
                "Id=" + Id +
                ", Name='" + Name + '\'' +
                ", Height=" + Height +
                ", Longitude=" + Longitude +
                ", Latitude=" + Latitude +
                ", Date=" + Date +
                '}';
    }
}
