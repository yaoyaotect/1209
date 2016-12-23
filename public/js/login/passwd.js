/**
 * Created by Administrator on 2016/12/19 0019.
 */
$(".icon-back" ).on('tap',function(){
	window.location.href='../../login/login.html';
});
$(".header_handing").on('tap',function(){
	window.location.href='../../login/login.html';
});

var wait=60;
function time(o){
	if(wait ==0){
		o.removeAttribute("disabled");
		o.value="获取验证码";
		wait = 60;
	}else{
		o.setAttribute("disabled",true);
		o.value="重新发送("+wait+")";
		$("#input").css("background-color","#C7C7C7");
		wait--;
		setTimeout(function(){
			time(o)
		},1000)
	}
}
document.getElementById("input").onclick = function(){time(this)};