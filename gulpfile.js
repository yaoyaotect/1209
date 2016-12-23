/**
 * Created by Administrator on 2016/12/8 0008.
 */
var gulp=require('gulp');

//var gulp=require('gulp');

var stylus=require('gulp-stylus');

var minifycss=require('gulp-minify-css');

var uglify=require('gulp-uglify');

var browserSync=require('browser-sync' ).create();

var reload=browserSync.reload;

var nodemon=require('gulp-nodemon')
gulp.task('nodemon',function(ab){
	var ft=false;
	return nodemon({
		script: './app.js'
	} ).on('start',function(){
		if(!ft){
			ab();
			ft = true;
		}
	})
});

gulp.task('browserSync',['nodemon'],function(){
	browserSync.init({
		proxy: {
			target: 'http://127.0.0.1:9777'
		},
		files: ['*'],
		port:9999,
		open:false

	})
});


gulp.task('stylus',function(){
	//获取瑶编译的文件
	//gulp.src('./stylus/*.styl')
	//指定一个母驴及所有子目录下的文件
	return gulp.src('./stylus/**/*.styl')  //需要编译的文件
		.pipe(stylus())  //执行编译方法
		.pipe(gulp.dest('./public/css/'))   //编译后输出的目录
})
/*gulp.task('logs',function(){
	console.log('this is log')
})

gulp.task('cs6',function(){
	console.log('this is es6')
})*/

//压缩文件
gulp.task('minifycss',['stylus'],function(){
	return gulp.src('./public/css/**/*.css')
		.pipe(minifycss())
		.pipe(gulp.dest('./public/mincss'))
})

gulp.task('uglify',function(){
	return gulp.src('./public/js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./public/minjs'))

})

//转换文件，
gulp.task('watcher',['browserSync','stylus','nodemon'],function(){
	gulp.watch('./stylus/**/*.styl',['stylus']);
	//gulp.watch('./public/js/**/*.js',['uglify'])

	gulp.watch([
		'./public/css/**/*.css',
		'./public/minjs/**/*.js'
	] ).on('change',function(){
		reload();//用于网页刷新
	})
});


/*gulp.task('minijs',['es6'],function(){
	console.log('this is minijs')
})*/
/*gulp.task('all',['logs','es6','css','minijs'],function(){
	console.log('this is all')
})*/

gulp.task('default',function(){
	console.log ('this default')
})