var mongoose = require('mongoose');

var PublicationSchema = new mongoose.Schema({
    //文章标题
    title: {
        type: String,
        required: true
    },
    // 文章发表的会议或期刊名称
    name: {
        type: String,
        required: true
    },
    // 0 会议 1 期刊
    type: {
        type: Number,
        enum: [0, 1],
        default: 0,
        required: true
    },
    // 发表日期
    date: {
        type: Date,
        required: true
    },
    // 作者列表
    authors: {
        type: String,
        required: true
    },
    // 卷期页码
    page: {
        type: String
    },
    vol: {
        type: String
    },
    issue: {
        type: String
    }
});

module.exports = mongoose.model('Publication', PublicationSchema);