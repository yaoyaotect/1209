/**
 * Created by Administrator on 2016/12/8 0008.
 */
var path=require('path');
var express=require('express');
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

//定义一个接口，端口号输入127.0.0.1:9999/login
app.get('/login',function(req,res){
	res.send('ha ha ha');
});



app.listen(9777,function(){
	console.log('server run at port 9888')
});
module.exports=app;