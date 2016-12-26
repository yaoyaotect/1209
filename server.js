/**
 * Created by Administrator on 2016/12/8 0008.
 */
var path=require('path');
var express=require('express');
var proxy=require('http-proxy-middleware');
var nodegrass=require('nodegrass');
var sha1=require('sha1');
//引入转发请求插件
//var proxy=require('http-proxy-middleware');
//实例express
var app=express();
//console.log(__dirname);
var viewsPath=path.join(__dirname,'views');
	//console.log(viewsPath);
app.use('/',express.static(viewsPath));
var publicPath=path.join(__dirname,'public');
app.use('/public',express.static(publicPath));


//定义验证接口
app.use('/weixin', function(req, res){
	//获取get传递数据
	var obj = req.query;
	console.log("weixin", obj);
	//将数据添加到一个数组
	var arr = ["nodemodule", obj.timestamp, obj.nonce];
	//排序
	arr.sort();
	//拼接字符串，并进行 sha1 加密
	var str = sha1(arr.join(""));
	console.log('sha1   ', str);
	console.log('signature', obj.signature === str);
	//匹配是否是微信请求
	if( obj.signature === str){
		//成功返回 echostr 随机字符串
		res.send(obj.echostr).end();
	}else{
		res.send("验证失败").end();
	}
});
//定义一个接口，端口号输入127.0.0.1:9999/login
app.get('/login',function(req,res){
	res.send('ha ha ha');
});
//定义通过/api 访问的请求，转发到指定路径
app.use('/api',proxy({
	target:'http://guanjp.com:9805',
	changeOrigin:true,
	ws:true,
	cookieRewrite:true,
	pathRewrite: {
		'^/api':'/'
	}
}));


app.listen(16940,function(){
	console.log('server run at port 16940')
});
module.exports=app;