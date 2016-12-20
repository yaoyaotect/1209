/**
 * Created by Administrator on 2016/12/19 0019.
 */
$(".icon-back" ).on('tap',function(){
	window.location.href='../../views/login/login.html';
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
		wait--;
		setTimeout(function(){
			time(o)
		},1000)
	}
}
document.getElementById("input").onclick = function(){time(this)};