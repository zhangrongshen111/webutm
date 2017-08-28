/**
 * Created by 11591 on 2017/8/23.
 */
$(function(){
    $(".btn").click(function(){
        var cadID=$("#cadID").attr("data");
        //alert(cadID);0
        var userName= $("#username").val();
        var relName= $("#relname").val();
        var userPass=  $("#password1").val();
        var userPass2= $("#password2").val();
        var userEmail= $("#mail").val();
        var userPhone= $("#phone").val();
        var address = $("#address").val();
        var cardID = $("#cardID").val();
        userPass=$.trim(userPass);
        userPass2=$.trim(userPass2);
        $(".input_div1 span,.input_div2 span,.input_div3 span,.input_div4 span,.input_div5 span,.input_div6 span,.input_div7 span,.input_div8 span ").html("");
        $(".btn").val('注册中...').attr('disabled','disabled');

        if(!isRegisterUserName(userName)){
            $(".input_div1 span").html('<img src="images/register/text_error.png"><font color=red>账户名格式不正确!</font>');
            $("#username").focus();
            $(".btn").val('注册').removeAttr('disabled');
            return false;
        }else if(!isRelName(relName)){
            $(".input_div2 span").html('<img src="images/register/text_error.png"><font color=red>姓名格式不正确!</font>');
            $("#relname").focus();
            $(".btn").val('注册').removeAttr('disabled');
            return false;
        }
        else if(!isEmail(userEmail)){
            $(".input_div3 span").html('<img src="images/register/text_error.png"><font color=red>邮箱格式不正确!</font>');
            $("#mail").focus();
            $(".btn").val('注册').removeAttr('disabled');
            return false;
        }else if(userPass.length <8){
            $(".input_div4 span").html('<img src="images/register/text_error.png"><font color=red>密码格式不正确!</font>');
            $("#password1").focus();
            $(".btn").val('注册').removeAttr('disabled');
            return false;
        }else if(userPass != userPass2){
            $(".input_div5 span").html('<img src="images/register/text_error.png"><font color=red>两次输入的密码不一致!</font>');
            $("#password2").focus();
            $(".btn").val('注册').removeAttr('disabled');
            return false;
        }else if(!isPhone(userPhone)){
            $(".input_div6 span").html('<img src="images/register/text_error.png"><font color="red">手机号输入格式不正确</font>');
            $("#phone").focus();
            $(".btn").val('注册').removeAttr('disabled');
            return false;
        }
        else if(address ==''){
            $(".input_div7 span").html('<img src="images/register/text_error.png"><font color=red>输入的地址格式不对</font>').fadeIn();
            $("#address").focus();
            $(".btn").val('注册').removeAttr('disabled');
            return false;
        }
       else  if(!iscarID(cardID )){
                $(".input_div8 span").html('<img src="images/register/text_error.png"><font color=red>身份证格式不正确!</font>');
                $("#cardID").focus();
                $(".btn").val('注册').removeAttr('disabled');
                return false;
        }else{
            $("#registerForm").ajaxSubmit(function(e){
                var obj=json_parse(e);
                var code=obj.code;
                var info = '<img src="images/register/text_error.png"><font color=red>'+obj.info+"</font>";
                if(code=='-1' || code=='-5'){
                    $(".input_div1 span").html(info);
                    $("#username").focus();
                }else if(code =='-2'||code =='-4'){
                    $(".input_div2 span").html(info);
                    $("#relname").focus();
                } else if(code =='-3' || code == '-7'){
                    $(".input_div3 span").html(info)
                    $("#password1").focus();
                }else if(code =='-6' ){
                    $(".input_div3 span").html(info);
                    $("#mail").focus();
                }else if(code == '-8'){
                    $(".input_div6 span").html(info);
                    $("#phone").focus();
                }else if(code == '-9'){
                    $(".input_div7 span").html(info);
                    $("#address").focus();
                }else if (ccode =='-10'){
                    $(".input_div8 span").html(info);
                    $("#cardID").focus();
                }

                else if(code == '1'){
                    //alert('恭喜您，注册成功!');
                    //window.location.href='register/success';
                    window.location.href=obj.acturl;
                }
                //flushCode();
                $(".change").click();
                $(".btn").val('注册').removeAttr('disabled');
            })
        }

    })
    $(".change").click(function(){
        $("#imgcode").attr('src','vercode');
    })

    $('.check2').click(function(){
        var rel = $('#cadID').attr("data");
        //alert(rel);
        if(rel =='1'){
            $('#cadID').attr("data","0");
        }else{
            $('#cadID').attr("data","1");
        }
        $('.check2').toggleClass("check1");
    });

});
//账户名格式
function isRegisterUserName(s){
    var patrn=/^[a-zA-Z0-9]{1}([a-zA-Z0-9]|[._]){5,19}$/;
    if (!patrn.exec(s)) return false;
    return true;
}
//真实姓名格式
function isRelName(s){
    var patrn=/^[a-zA-Z]{1}([a-zA-Z]|[._]){5,19}$/;
    if (!patrn.exec(s)) return false;
    return true;
}
//邮箱格式
function isEmail(email){
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if(!myreg.test(email)) return false;
    return true;
}
//手机号格式
function isPhone(s){
    var patrn=/^[0-9]{1}([0-9]|[._]){10}$/;
    if(!patrn.exec(s)) return false;
    return true;
}
//身份证格式
function iscarID(s){
    var patrn=/^[a-zA-Z0-9]{1}([a-zA-Z0-9]|[._]){18}$/;
    if (!patrn.exec(s)) return false;
    return true;
}