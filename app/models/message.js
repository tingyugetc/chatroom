// // // mongoDB
// const mongoose = require('mongoose');
// // mongoose.connect('mongodb://localhost/socket');
// // const db = mongoose.connection;


// // Message Schema

// const MessageSchema = mongoose.Schema({
//     message: [{
//         name: { type: String, default: '' },
//         image: {},
//         createdAt: { type: Date, default: Date.now },
//         content: { type: String, default: '' },
//     }],
// });


// Methods

// MessageSchema.methods = {

//     // Save message

//     // saveMessage: () => {
//     //     this.save();
//     // },

//     // Add message

//     addMessage: (name, content) => {
//         this.message.push({
//             name,
//             content,
//         });
//         this.save();
//     },

//     // Remove message

//     // removeMessage: (messageId) => {

//     // },
// };


// mongoose.model('Message', MessageSchema);
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
