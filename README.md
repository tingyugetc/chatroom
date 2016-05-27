网络编程大作业，做一个在线多人聊天室

使用express+socket.io

```js
io.emit('login',{'onlineList':onlineList,'onlineCount':onlineCount,'user':obj.name});//通知所有人，包括当前用户
socket.emit('test',{'msg':"11"});//给当前用户发信息
socket.broadcast.emit('other');//给除了当前连接以外的所有人发信息
socket.send('hi');//message接收,对于当前用户，相当于socket.emit('message',{'msg':"11"});
socket.on('login',function(obj){
    //服务器端监听客户端发送的信息，并做处理
});
```