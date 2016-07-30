'use strict';

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('index', { title: '网络聊天室' });
});

// // mongoDB
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/socket');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, '连接错误:'));
// db.once('open', () => {
//     // 开始连接
//     const ChatSchema = mongoose.Schema({
//         name: { type: String, default: '' },
//         createdAt: { type: Date, default: Date.now },
//         content: { type: String, default: ''}
//     });
//     const ChatModel = mongoose.model('Chat', ChatSchema);
//     const a = new ChatModel({ name: 'Silence' });
// 	console.log(a.name); // 'Silence'

// });

module.exports = router;
