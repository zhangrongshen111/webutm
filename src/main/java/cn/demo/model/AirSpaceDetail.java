package cn.demo.model;

import java.lang.ref.SoftReference;

/**
 * Created by ThinkPad on 2017/8/17.
 */
public class AirSpaceDetail {
    //空域ID
    private Integer asdId;
    //空域编码
    private  String asdCode;
    //空域名称
    private String asdName;
    //空域坐标
    private String asdLngLat;
    //空域高度
    private String asdHeight;
    //空域形状
    private String asdShape;
    //空域类型
    private String asdType;
    //空域状态
    private String asdStatus;
    //空域半径
    private String asdRadius;

    @Override
    public String toString() {
        return "AirSpaceDetail{" +
                "asdId=" + asdId +
                ", asdCode='" + asdCode + '\'' +
                ", asdName='" + asdName + '\'' +
                ", asdLngLat='" + asdLngLat + '\'' +
                ", asdHeight='" + asdHeight + '\'' +
                ", asdShape='" + asdShape + '\'' +
                ", asdType='" + asdType + '\'' +
                ", asdStatus='" + asdStatus + '\'' +
                ", asdRadius='" + asdRadius + '\'' +
                '}';
    }

    public Integer getAsdId() {
        return asdId;
    }

    public void setAsdId(Integer asdId) {
        this.asdId = asdId;
    }

    public String getAsdCode() {
        return asdCode;
    }

    public void setAsdCode(String asdCode) {
        this.asdCode = asdCode;
    }

    public String getAsdName() {
        return asdName;
    }

    public void setAsdName(String asdName) {
        this.asdName = asdName;
    }

    public String getAsdLngLat() {
        return asdLngLat;
    }

    public void setAsdLngLat(String asdLngLat) {
        this.asdLngLat = asdLngLat;
    }

    public String getAsdHeight() {
        return asdHeight;
    }

    public void setAsdHeight(String asdHeight) {
        this.asdHeight = asdHeight;
    }

    public String getAsdShape() {
        return asdShape;
    }

    public void setAsdShape(String asdShape) {
        this.asdShape = asdShape;
    }

    public String getAsdType() {
        return asdType;
    }

    public void setAsdType(String asdType) {
        this.asdType = asdType;
    }

    public String getAsdStatus() {
        return asdStatus;
    }

    public void setAsdStatus(String asdStatus) {
        this.asdStatus = asdStatus;
    }

    public String getAsdRadius() {
        return asdRadius;
    }

    public void setAsdRadius(String asdRadius) {
        this.asdRadius = asdRadius;
    }
}
