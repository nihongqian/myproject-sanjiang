
let gulp = require("gulp");
let connect = require("gulp-connect");

gulp.task("index",()=>{
    //gulp.src()//找到源文件的目录
    //gulp.pipe()//在连缀之中继续调用gulp方法
    //gulp.dest()//转存方法
    //实现功能的时候，一定要用ruturn
    return gulp.src("index.html").pipe(gulp.dest("dist")).pipe(connect.reload());
})

gulp.task("watch",()=>{
    //监控index.html文件，如果发生改变，那么执行index指令
    gulp.watch("index.html",["index"]);
})


gulp.task("server",()=>{
    connect.server({
        root:"src",     //以哪个文件夹为服务器
        port:8888        //端口号
//      livereload:true  //是否可以自动刷新
		,open:true
    })
})


gulp.task("default",["server","watch"]);