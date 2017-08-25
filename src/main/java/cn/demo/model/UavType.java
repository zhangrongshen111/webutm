package cn.demo.model;

/**
 * Created by Administrator on 2017/8/24.
 * 该实体类为无人机用途类别标识信息
 */
public class UavType {
    //无人机用途ID
    private Integer uavTypeId;
    //无人机用途名称
    private String uavTypeName;

    @Override
    public String toString() {
        return "UavType{" +
                "uavTypeId=" + uavTypeId +
                ", uavTypeName='" + uavTypeName + '\'' +
                '}';
    }

    public Integer getUavTypeId() {
        return uavTypeId;
    }

    public void setUavTypeId(Integer uavTypeId) {
        this.uavTypeId = uavTypeId;
    }

    public String getUavTypeName() {
        return uavTypeName;
    }

    public void setUavTypeName(String uavTypeName) {
        this.uavTypeName = uavTypeName;
    }
}
