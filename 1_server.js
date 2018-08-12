//使用第三方Express框架创建WebServer
const http=require('http');     //原生模块
const fs=require('fs');     //原生模块
const express = require('express');     //第三方模块
const port = 5000;

//运行express,得到一个函数---负责接收请求并输出响应
var app =express();

var server = http.createServer(app);
server.listen(port,()=>{
    console.log('服务器1启动成功，正在监听端口:',port);
});

//为客户端的不同形式的请求，提供不同的响应消息---路由
//路由  =目的地+方法 + 解决方案
app.get('/',(req,res)=>{
    //Express中提供的send等价于原生http提供的方法：readFile+writeFile+writeHead + write+end
    //console.log(__dirname);
    res.sendFile(__dirname+'/public/index.html');
})

//WebServer对外公布的是‘虚拟地址’--在真正的服务器源代码中可能是多个真是的源文件
//静态资源文件的‘打包压缩’
app.get('/css/app.css',(req,res)=>{
    //res.sendFile(__dirname+'/public/3.css')
    var css2=fs.readFileSync('./public/css/color.css');
    css2 = css2.toString();

    var css3= fs.readFileSync('./public/css/font.css');
    css3 = css3.toString();

    var css = css2 + css3;
    css.replace(/\s/g,'');  //删除所有的空白字符
    console.log(css);
    res.set('Content-Type','text/css');
    res.send(css);
});