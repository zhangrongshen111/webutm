package cn.demo.model;

/**
 * Created by ThinkPad on 2017/8/15.
 */
public class AirPath {
    //航迹编号
    private Integer apCode;
    //航迹名称
    private String apName;
    //航迹坐标
    private String apLngLat;
    //航迹类型
    private String apType;
    //航迹所属
    private String apUser;

    @Override
    public String toString() {
        return "AirPath{" +
                "apCode=" + apCode +
                ", apName='" + apName + '\'' +
                ", apLngLat='" + apLngLat + '\'' +
                ", apType='" + apType + '\'' +
                ", apUser='" + apUser + '\'' +
                '}';
    }

    public Integer getApCode() {
        return apCode;
    }

    public void setApCode(Integer apCode) {
        this.apCode = apCode;
    }

    public String getApName() {
        return apName;
    }

    public void setApName(String apName) {
        this.apName = apName;
    }

    public String getApLngLat() {
        return apLngLat;
    }

    public void setApLngLat(String apLngLat) {
        this.apLngLat = apLngLat;
    }

    public String getApType() {
        return apType;
    }

    public void setApType(String apType) {
        this.apType = apType;
    }

    public String getApUser() {
        return apUser;
    }

    public void setApUser(String apUser) {
        this.apUser = apUser;
    }
}
