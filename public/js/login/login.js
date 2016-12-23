

	function testVal(){

		if(document.getElementById("cell_name" ).value!="" && document.getElementById("cell_pass" ).value!=""){
			$('.btn_login' ).css('background','#ED692B')
		}
	}



/*window.onload=function(){
	$(".btn_login" ).click(function(){
		if(document.getElementById("cell_name" ).value==""){
			alert("帐号不能为空")
		}
		else if(document.getElementById("cell_pass" ).value==""){
			alert("密码不能为空")
		}
		else{
			$(".btn_login" ).css("background-color","#ED692B");
			alert("登录成功")
		}
	})
};*/
//console.log(1)

	//$(".bt-passwd" ).click(function(){
	//	window.location.href = '../../views/login/passwd.html';
	//});
//注册，忘记密码链接跳转
	$(".bt-passwd" ).on('tap', function(){
		window.location.href = '../login/passwd.html';
	});
	$(".bt-reg" ).on('tap',function(){
		window.location.href ='../login/register.html';
	});
	$(".icon-back" ).on('tap',function(){
		window.location.href='../../../loading.html';
		console.log(1)
	});
	//<img src="../../img/nav_back_icon@2x.png" border="0" onlick="javascript:history.back(-1);">
   /* $(".icon-back" ).on('tap',function(){
		window.location.href=history.back(-1);
	});*/
	//$(".bt-reg" ).click(function(){
	//	window.location.href = '../../views/login/register.html';
	//})



