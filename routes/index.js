const express = require('express');
const router = express.Router();


// mongoose
const mongoose = require('mongoose');

const MessageSchema = mongoose.Schema({
    message: [{
        name: { type: String, default: '' },
        image: { type: String, default: '/imgs/1.jpg' },
        createdAt: { type: Date, default: Date.now },
        content: { type: String, default: '' },
    }],
});
const Message = mongoose.model('Message', MessageSchema);
mongoose.connect('mongodb://localhost/socket');
const db = mongoose.connection;

db.on('error', console.error.bind(console, '连接错误:'));
db.once('open', () => {
    // 开始连接
    // const a = new ChatModel({ name: 'Silence' });
    // console.log(a.name); // 'Silence'
    Message.find({}, function(err, docs) {
        if (!err) {
            console.log(docs);
            // process.exit();
        } else {
            throw err;
        }
    });
    /* GET home page. */
    router.get('/', (req, res) => {
        res.render('index', { title: '网络聊天室' });
    });

});






module.exports = router;
