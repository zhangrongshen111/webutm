package cn.demo.model;

/**
 * Created by Administrator on 2017/8/23.
 * 无人机品牌表
 */
public class UavBrand{
    //无人机品牌ID
    private Integer uavBrandId;
    //无人机品牌名称
    private String uavBrandName;

    @Override
    public String toString() {
        return "UavBrand{" +
                "uavBrandId=" + uavBrandId +
                ", uavBrandName='" + uavBrandName + '\'' +
                '}';
    }

    public Integer getUavBrandId() {
        return uavBrandId;
    }

    public void setUavBrandId(Integer uavBrandId) {
        this.uavBrandId = uavBrandId;
    }

    public String getUavBrandName() {
        return uavBrandName;
    }

    public void setUavBrandName(String uavBrandName) {
        this.uavBrandName = uavBrandName;
    }
}
