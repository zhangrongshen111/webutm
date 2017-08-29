package cn.demo.model;

import java.util.Date;

/**
 * Created by Administrator on 2017/8/28.
 * 该类主要负责无人机注册信息数据在前台的展现
 */
public class UavPack {
    //无人机编码
    private Integer uavCode;
    //无人机品牌名称
    private String uavBrandName;
    //无人机型号名称
    private String uavVersionName;
    //无人机用途名称
    private String uavTypeName;
    //无人机所属用户ID
    private Integer uavUserId;
    //无人机注册时间
    private Date registerTime;
    //无人机状态（是否有效）
    private Integer isDelete;

    @Override
    public String toString() {
        return "UavPack{" +
                "uavCode=" + uavCode +
                ", uavBrandName='" + uavBrandName + '\'' +
                ", uavVersionName='" + uavVersionName + '\'' +
                ", uavTypeName='" + uavTypeName + '\'' +
                ", uavUserId=" + uavUserId +
                ", registerTime=" + registerTime +
                ", isDelete=" + isDelete +
                '}';
    }

    public Integer getUavCode() {
        return uavCode;
    }

    public void setUavCode(Integer uavCode) {
        this.uavCode = uavCode;
    }

    public String getUavBrandName() {
        return uavBrandName;
    }

    public void setUavBrandName(String uavBrandName) {
        this.uavBrandName = uavBrandName;
    }

    public String getUavVersionName() {
        return uavVersionName;
    }

    public void setUavVersionName(String uavVersionName) {
        this.uavVersionName = uavVersionName;
    }

    public String getUavTypeName() {
        return uavTypeName;
    }

    public void setUavTypeName(String uavTypeName) {
        this.uavTypeName = uavTypeName;
    }

    public Integer getUavUserId() {
        return uavUserId;
    }

    public void setUavUserId(Integer uavUserId) {
        this.uavUserId = uavUserId;
    }

    public Date getRegisterTime() {
        return registerTime;
    }

    public void setRegisterTime(Date registerTime) {
        this.registerTime = registerTime;
    }

    public Integer getIsDelete() {
        return isDelete;
    }

    public void setIsDelete(Integer isDelete) {
        this.isDelete = isDelete;
    }
}
