/**
 * Created by Administrator on 2016/12/19 0019.
 */
$(".icon-back").on('tap',function(){
	window.location.href='../../views/login/login.html';
});
$(".header_handing").on('tap',function(){
	window.location.href='../../views/login/login.html';
});
$("#agent").on('tap',function(){
	window.location.href='../../views/agent.html';
});

/*$(".icon-down").mouseover(function(){
	$(".identity_selection").slideDown(1000);
})
$(".icon-down").mouseover(function(){
	$(".identity_selection").slideUp(1000);
})*/

function onClick(){
//	var iconDown=document.getElementsByClassName("icon-down")[0];
	var identity=document.getElementsByClassName("identity_selection")[0];
	console.log(identity.style.height);
	if(identity.style.height==""||identity.style.height=="0px"){
		identity.style.height="155px";identity.style.transition="height 2s";
		
	}else{
		identity.style.height="0";identity.style.transition="height 2s";
		
	}
};


var wait=60;
function time(o){
	if(wait ==0){
		o.removeAttribute("disabled");
		o.value="获取验证码";
		wait = 60;
	}else{
		o.setAttribute("disabled",true);
		o.value="重新发送("+wait+")";
		$("#input").css("background-color","#C7C7C7")
		wait--;
		setTimeout(function(){
			time(o)
		},1000)
	}
}
document.getElementById("input").onclick = function(){time(this)};