package cn.demo.model;

/**
 * Created by Administrator on 2017/8/23.
 * 无人机型号表
 */
public class UavModel {
    //无人机编号ID
    private Integer uavModelId;
    //无人机具体名称
    private String uavModelName;
    //无人机品牌ID
    private Integer uavBrandId;

    @Override
    public String toString() {
        return "UavModel{" +
                "uavModelId=" + uavModelId +
                ", uavModelName=" + uavModelName +
                ", uavBrandId=" + uavBrandId +
                '}';
    }

    public Integer getUavModelId() {
        return uavModelId;
    }

    public void setUavModelId(Integer uavModelId) {
        this.uavModelId = uavModelId;
    }

    public String getUavModelName() {
        return uavModelName;
    }

    public void setUavModelName(String uavModelName) {
        this.uavModelName = uavModelName;
    }

    public Integer getUavBrandId() {
        return uavBrandId;
    }

    public void setUavBrandId(Integer uavBrandId) {
        this.uavBrandId = uavBrandId;
    }
}
