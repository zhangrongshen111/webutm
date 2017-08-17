package cn.demo.model;

import java.util.Date;

/**
 * Created by HDPC on 2017/7/27.
 */
public class FlightPlan {
    /**
     * 飞行计划属性
     */
    private int fpId;//飞行计划编号
    private Date startDate;//开始时间
    private Date endDate;//结束时间
    private String startPoint;//起飞地点
    private String endPoint;//结束地点
    private int flightHeight;//飞行高度
    private String description;//飞行计划描述
    private Date applyDate;//申请时间
    private int uavId;//无人机编号
    private int userId;//用户编号


    /**
     * 无参构造
     */
    public FlightPlan() {
    }

    /**
     * 全参构造
     * @param startDate
     * @param endDate
     * @param startPoint
     * @param endPoint
     * @param flightHeight
     * @param description
     * @param applyDate
     * @param uavId
     */
    public FlightPlan(int fpId, Date startDate, Date endDate, String startPoint, String endPoint, int flightHeight, String description, Date applyDate, int uavId,int userId) {
        this.fpId = fpId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.flightHeight = flightHeight;
        this.description = description;
        this.applyDate = applyDate;
        this.uavId = uavId;
        this.userId=userId;
    }

    /**
     * getter/setter方法
     * @return
     */
    public Integer getFpId() {
        return fpId;
    }

    public void setFpId(Integer fpId) {
        this.fpId = fpId;
    }

    public Date getStartDate() {
        return startDate;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

    public String getStartPoint() {
        return startPoint;
    }

    public void setStartPoint(String startPoint) {
        this.startPoint = startPoint;
    }

    public String getEndPoint() {
        return endPoint;
    }

    public void setEndPoint(String endPoint) {
        this.endPoint = endPoint;
    }

    public int getFlightHeight() {
        return flightHeight;
    }

    public void setFlightHeight(int flightHeight) {
        this.flightHeight = flightHeight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getApplyDate() {
        return applyDate;
    }

    public void setApplyDate(Date applyDate) {
        this.applyDate = applyDate;
    }

    public int getUavId() {
        return uavId;
    }

    public void setUavId(int uavId) {
        this.uavId = uavId;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }
}
