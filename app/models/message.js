'use strict';

// // mongoDB
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/socket');
// const db = mongoose.connection;


// Message Schema

const MessageSchema = mongoose.Schema({
    name: { type: String, default: '' },
    createdAt: { type: Date, default: Date.now },
    content: { type: String, default: '' }
});


// Methods


ArticleSchema.methods = {

  // Save message

  save: function () {

  },

  // Add message

  addMessage: function (user, comment) {

  },

  // Remove message

  removeMessage: function (commentId) {

  }
};


mongoose.model('Message', MessageSchema);
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

// pre hook
