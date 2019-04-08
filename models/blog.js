var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./comment');
var User = require('./user');
var Group = require('./group');

var BlogSchema = new mongoose.Schema({
    // 博客标题
    title: {
        type: String,
        required: true
    },
    // 博客正文
    content: {
        type: String,
        required: true
    },
    // 博客作者
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // 发表日期
    date: {
        type: Date,
        required: true
    },
    // 该博客可能是某个小组的组会总结
    group: {
        type: Schema.Types.ObjectId,
        ref: 'Group'
    },
    // 博客的评论
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    // 附件
    attachments: [{
        type: Schema.Types.ObjectId,
        ref: "File"
    }],
    // 访问数量
    visit_count: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model("Blog", BlogSchema);