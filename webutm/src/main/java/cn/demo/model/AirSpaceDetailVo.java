package cn.demo.model;

import java.util.List;

/**
 * Created by DELL on 2017/8/7.
 */
public class AirSpaceDetailVo {

    //用于接受JSON包 数据
    private List<AirSapceDetail> asdVO;

    public List<AirSapceDetail> getAsdVO() {
        return asdVO;
    }

    public void setAsdVO(List<AirSapceDetail> asdVO) {
        this.asdVO = asdVO;
    }
}
