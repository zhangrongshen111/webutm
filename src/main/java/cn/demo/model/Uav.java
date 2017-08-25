package cn.demo.model;

import java.util.Date;

/**
 * Created by Administrator on 2017/8/25.
 * 无人机信息
 */
public class Uav {
    //无人机表Id
    private Integer uavId;
    //无人机编码
    private String uavCode;
    //无人机品牌Id
    private Integer b_id;
    //无人机型号
    private Integer m_id;
    //无人机用途Id
    private Integer t_id;
    //无人机用户Id
    private Integer userId;
    //注册时间
    private Date registerTime;
    //无人机状态标识
    private Integer isDelete;

    @Override
    public String toString() {
        return "Uav{" +
                "uavId=" + uavId +
                ", uavCode='" + uavCode + '\'' +
                ", b_id=" + b_id +
                ", m_id=" + m_id +
                ", t_id=" + t_id +
                ", userId=" + userId +
                ", registerTime=" + registerTime +
                ", isDelete=" + isDelete +
                '}';
    }

    public Integer getUavId() {
        return uavId;
    }

    public void setUavId(Integer uavId) {
        this.uavId = uavId;
    }

    public String getUavCode() {
        return uavCode;
    }

    public void setUavCode(String uavCode) {
        this.uavCode = uavCode;
    }

    public Integer getB_id() {
        return b_id;
    }

    public void setB_id(Integer b_id) {
        this.b_id = b_id;
    }

    public Integer getM_id() {
        return m_id;
    }

    public void setM_id(Integer m_id) {
        this.m_id = m_id;
    }

    public Integer getT_id() {
        return t_id;
    }

    public void setT_id(Integer t_id) {
        this.t_id = t_id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
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
