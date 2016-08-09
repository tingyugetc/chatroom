$(function() {
    //prompt层
    layer.prompt({
        title: '请输入昵称',
        offset: ['200px', '400px'],
        skin: 'layui-layer-lan',
        // success:function(layero,index){
        //     $(".layui-layer-input").on('keydown',function(e){
        //         if(e.which === 13){
        //             name=$('.layui-layer-input').val();
        //             layer.close(index);
        //         }
        //     });
        // },
    }, function(value, index) {
        layer.close(index);
        var name = value;
        if ($.trim(name).length > 0) {
            $('#m').focus();
            // 聊天开始
            var socket = io();
            // 定义一个私聊公聊的变量吧

            socket.emit('user connection', name);
            $('button').click(function() {
                // 非空验证
                if ($('#m').val().length > 0) {
                    socket.emit('chat message', $('#m').val());
                    $('#m').val('');
                }
                // return 去掉的话，页面会刷新
                return false;
            });
            // 头像点击事件 ，直接开始私聊
            $('body').on('click', '#messages .avatar', function() {
                var socket_id = $(this).data('id');
                socket.emit('whisper-1', socket_id);
            });

            // 接收到服务器的消息，被请求的客户端有个confirm
            // second是to的窗口
            socket.on('whisper-2', function(msg) {
                layer.confirm('有个叫' + msg.user.name + '的人想和你私聊，是否同意？', {
                    skin: 'layui-layer-lan',
                }, function(index) {
                    layer.close(index);
                    // 同意，先发送同意消息，然后打开一个聊天的layer
                    socket.emit('whisper-3', {
                        to: msg.to,
                        from: msg.from
                    });
                    // 打开一个私聊窗口，里面只有from和to两个人
                    layer.open({
                        type: 1,
                        area: ['500px', '600px'],
                        title: '与 ' + msg.user.name + ' 的私聊窗口',
                        move: false,
                        skin: 'layui-layer-lan', //加上边框
                        shift: 2,
                        content: '<ul id="si"><li class="users-in-out">你们的私聊已经开始</li></ul><form class="s"><input id="s" autocomplete="off" /><button>发送</button></form>',
                        success: function() {
                            $('.s button').click(function() {
                                if ($('#s').val().length > 0) {
                                    socket.emit('whisper-5', {
                                        to: msg.to,
                                        from: msg.from,
                                        chatMsg: $('#s').val(),
                                    });
                                    $('#s').val('');
                                }
                                return false;
                            });
                        },
                        // 如果to方关闭
                        end: function() {
                            socket.emit('whisper-8', {
                                to: msg.to,
                                from: msg.from
                            });
                        }
                    });
                });
            });
            // forth是from的窗口
            socket.on('whisper-4', function(msg) {

                // 打开一个私聊窗口，里面只有from和to两个人
                layer.open({
                    type: 1,
                    area: ['500px', '600px'],
                    title: '与 ' + msg.user.name + ' 的私聊窗口',
                    move: false,
                    skin: 'layui-layer-lan', //加上边框
                    shift: 2,
                    content: '<ul id="si"><li class="users-in-out">你们的私聊已经开始</li></ul><form class="s"><input id="s" autocomplete="off" /><button>发送</button></form>',
                    success: function() {
                        $('.s button').click(function() {
                            if ($('#s').val().length > 0) {
                                socket.emit('whisper-7', {
                                    to: msg.to,
                                    from: msg.from,
                                    chatMsg: $('#s').val(),
                                });
                                $('#s').val('');
                            }
                            return false;
                        });
                    },
                    // 如果from方关闭
                    end: function() {
                        socket.emit('whisper-10', {
                            to: msg.to,
                            from: msg.from
                        });
                    },
                });
            });
            // sixth是接收到服务器的消息，然后展现在私聊框的，不管有自己的还是别人的
            socket.on('whisper-6', function(msg) {
                $('#si').append(
                    '<li>' +
                    '<div class="avatar" data-id="' + msg.user.id + '">' +
                    '<img src="imgs/' + msg.user.avatar + '.jpg" alt="头像" />' +
                    '<p class="name">' + msg.user.name + '<p>' +
                    '</div>' +
                    '<div class="chat">' +
                    '<span class="tan"></span>' +
                    '<p>' + msg.msg + '</p>' +
                    '</div>' +
                    '</li>');
                $('.layui-layer-content').animate({ scrollTop: $(document).height() }, 400);
            });
            // ninth是当有一方关闭窗口时，另一方接收到的消息
            socket.on('whisper-9', function(msg) {
                $('#si').append($('<li class="users-in-out">').text(msg.user.name + ' 已经退出了私聊'));
                $('.layui-layer-content').animate({ scrollTop: $(document).height() }, 400);
            });
            // 开始公开聊天
            socket.on('chat message', function(msg) {
                $('#messages').append(
                    '<li>' +
                    '<div class="avatar" data-id="' + msg.user.id + '">' +
                    '<img src="imgs/' + msg.user.avatar + '.jpg" alt="头像" />' +
                    '<p class="name">' + msg.user.name + '<p>' +
                    '</div>' +
                    '<div class="chat">' +
                    '<p class="time">' + msg.createdAt + '</p>' + msg.msg +
                    '</div>' +
                    '</li>');
                $('html, body, #message').animate({ scrollTop: $(document).height() }, 400);
            });
            socket.on('hi', function(msg) {
                $('#messages').append($('<li class="users-in-out">').text(msg));
                $('html, body, #message').animate({ scrollTop: $(document).height() }, 400);
            });
        }
    });
});