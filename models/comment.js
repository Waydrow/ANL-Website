var mongoose = require('mongoose');
var User = require('./user');

//博客评论的Schema
var CommentSchema = new mongoose.Schema({
    //评论的内容
    content: {
        type: String,
        required: true
    },
    //评论的作者
    author :{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    //评论的发表日期
    date:{
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment',CommentSchema);