/**
 * Created by 11591 on 2017/8/1.
 */

function iFrameHeight() {


    var ifm= document.getElementById("iframepage");


    var subWeb = document.frames ? document.frames["iframepage"].document :


        ifm.contentDocument;


    if(ifm != null && subWeb != null) {


        ifm.height = subWeb.body.scrollHeight;


    }
}


function iFrameWidth() {


    var ifm1= document.getElementById("iframepage");


    var subWeb1 = document.frames ? document.frames["iframepage"].document :


        ifm1.contentDocument;


    if(ifm1 != null && subWeb1 != null) {


        ifm1.width = subWeb1.body.scrollWidth;


    }
}
