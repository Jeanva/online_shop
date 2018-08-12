//使用原生node模块，创建WebServer
const http=require('http');
const port = 5000;

var server = http.createServer((req,res)=>{
    //使用Node原生的http模块向客户端输出响应信息
    res.writeHead(200,{
        "Content-Type":"text/html;charset=UTF-8"
    });
    res.write("<h3>欢迎访问我的官网</h3>");
    res.write("<hr>");  
    res.end();  //结束响应消息的输出
});

server.listen(port,()=>{
    console.log("服务器启动，正在监听端口:",port);
});