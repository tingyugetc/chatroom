在线多人聊天室

# 安装
	npm install

# 运行
	node app.js

# 预览地址
[http://socket.fengyuanzemin.com](http://socket.fengyuanzemin.com)

# 技术

使用express+socket.io

```js
// 通知所有人，包括当前用户
io.emit('login',{'onlineList':onlineList});

//给当前用户发信息
socket.emit('test',{'msg':"11"});

//message接收,对于当前用户，相当于socket.emit('message',{'msg':"11"});
socket.send('hi');

//给除了当前连接以外的所有人发信息
socket.broadcast.emit('other');

socket.on('login',function(obj){
    //服务器端监听客户端发送的信息，并做处理
});
```

# 缺陷

只能与一个人进行私聊，第三人开始私聊会发生错误


# 还未实现的功能

* 像qq一样，自己的气泡在右边，别人的气泡在左边
* 自己的气泡固定一种颜色，别人的随机颜色。后面可以选择颜色
* 聊天记录MongoDB
* 可以选择头像
* 未进行空字符验证
* 使用Webpack进行自动化构建
* 使用Vue.js
* 使用ES6