const express = require('express');
const router = express.Router();

// mongoose
const mongoose = require('mongoose');
const MessageSchema = mongoose.Schema({
    name: { type: String, default: '' },
    image: { type: String, default: '/imgs/1.jpg' },
    createdAt: { type: String, default: '' },
    content: { type: String, default: '' },
});
mongoose.model('Message', MessageSchema);
const Message = mongoose.model('Message');
mongoose.connect('mongodb://localhost/socket');
const db = mongoose.connection;

db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', () => {
    // 开始连接
});
router.get('/', (req, res) => {
    res.redirect('/chatroom');
});
router.get('/chatroom', (req, res) => {
    Message.find({}, (err, docs) => {
        if (!err) {
            const mes = [];
            docs.forEach(key => {
                mes.push(key);
            });
            // 进入聊天室
            res.render('index', {
                title: '网络聊天室',
                message: mes,
            });
        } else {
            throw err;
        }
    });
});

module.exports = router;
