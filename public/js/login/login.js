/**
 * Created by Administrator on 2016/12/17 0017.
 */
window.onload=function (){
	$(".btn_login" ).click(function(){
		console.log(document.getElementById("cell_name" ).innerHTML)
		if(document.getElementById("cell_name" ).value==""||document.getElementById("cell_pass" ).value==""){
			alert("用户名或密码不能为空")
		}
		else{
			alert("登录成功")
		}
	})
};


