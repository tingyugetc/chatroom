在线多人聊天室

# 演示地址
[http://socket.fengyuanzemin.com](http://socket.fengyuanzemin.com)

# 安装
## 安装依赖
	npm install

## 安装mongoDB
要显示聊天记录

[https://docs.mongodb.com/manual/installation/](https://docs.mongodb.com/manual/installation/)

安装完毕之后新建一个叫`socket`的数据库

# 运行
	node app.js

# 调试方式运行
	DEBUG=express:application node app.js

# 服务器后台长时间运行
需要守护进程forever

## 安装
	 [sudo] npm install forever -g
## 运行
	forever start app.js
## 关闭
	forever stop app.js

# 技术

使用express+socket.io

```js
// 通知所有人，包括当前用户
io.emit('login',{'onlineList':onlineList});

// 给当前用户发信息
socket.emit('test',{'msg':"11"});

// message接收,对于当前用户，相当于socket.emit('message',{'msg':"11"});
socket.send('hi');

// 给除了当前连接以外的所有人发信息
socket.broadcast.emit('other');

socket.on('login',function(obj){
    // 服务器端监听客户端发送的信息，并做处理
});
```

# 缺陷

只能与一个人进行私聊，第三人开始私聊会发生错误


# 还未实现的功能

* 像qq一样，自己的气泡在右边，别人的气泡在左边
* 自己的气泡固定一种颜色，别人的随机颜色。后面可以选择颜色
* 可以选择头像
* 使用react
* 使用ES6