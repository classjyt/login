$(function(){

	var flag1=false;
	var flag2=false;
	var flag3=false;
	var flag4=false;
	var flag5=false;


	var reg1=/^1\d{10}$/;
	var reg2=/^\w{4,10}$/i;
	var reg3=/^\w+@\w+(\.[a-z]{2,3}){1,2}$/i;
	var falg=1;
	$(".input1").blur(function(){
		if(reg1.test($(this).val())){
			$(".ture").show();
			$(".false").hide();
			$(".input1").css({"border":"1px solid green"});
			flag1=true;
		}else{
			$(".false").show();
			$(".ture").hide();
			$(".input1").css({"border":"1px solid red"});
			flag1=false;
		}
	});
	$(".input2").blur(function(){
		if(reg2.test($(this).val())){
			$(".ture2").show();
			$(".false2").hide();
			$(".input2").css({"border":"1px solid green"});
			flag2=true;

		}else{
			$(".false2").show();
			$(".ture2").hide();
			$(".input2").css({"border":"1px solid red"});
			flag2=false;

		}
	});
	$(".input3").blur(function(){
		if($(this).val()==$(".input2").val()){
			$(".ture3").show();
			$(".false3").hide();
			$(".input3").css({"border":"1px solid green"});
			flag3=true;

		}else{
			$(".false3").show();
			$(".ture3").hide();
			$(".input3").css({"border":"1px solid red"});
			flag3=false;

		}
	});
	$(".input4").blur(function(){
		if(reg3.test($(this).val())){
			$(".ture4").show();
			$(".false4").hide();
			$(".input4").css({"border":"1px solid green"});
			flag4=true;

		}else{
			$(".false4").show();
			$(".ture4").hide();
			$(".input4").css({"border":"1px solid red"});
			flag4=false;
		}
	});
	$(".input5").blur(function(){
		if($(this).val()=="e7ab"){
			$(".ture5").show();
			$(".false5").hide();
			$(".input5").css({"border":"1px solid green"});
			flag5=true;

		}else{
			$(".false5").show();
			$(".ture5").hide();
			$(".input5").css({"border":"1px solid red"});
			flag5=false;

		}
	});
	// 申请注册通过
    $("button").prop("disabled", true); //禁用按钮
	$(".check").click(function(){
		if($(this).prop("checked")){
			$("button").prop("disabled",false).css("background-color", "#ff9000").click(function() {
                if (flag1 && flag2 && flag3 && flag4 && flag5) {

                    // 保存用户信息
                    var count = localStorage.count;
                    if (!count) {
                        count = 1;
                    } else {
                        count++;
                    }
                    localStorage.setItem("phonenumber" + count, $(".input1").val());
                    localStorage.setItem("pwd" + count, $(".input2").val());
                    localStorage.setItem("email" + count, $(".input4").val());
                    localStorage.setItem("count", count);


                    // 跳转页面
                    location.href = "index2.html";
                }
            });
        } else {
            $("button").prop("disabled", true).css("background-color", "#ccc");
        }
    });
});
		