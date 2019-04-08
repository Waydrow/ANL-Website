/**
 * Created by Shilei Tian on 2017-07-30.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义文件的模式
var FileSchema = new mongoose.Schema({
    // 文件名称
    name: {
        type: String,
        required: true
    },
    // 文件的大小
    size: {
        type: Number,
        required: true
    },
    // 文件本地存储的路径
    path: {
        type: String,
        required: true
    },
    // 添加日期
    date: {
        type: Date,
        required: true
    },
    // 被下载的次数
    downloads: {
        type: Number,
        required: true,
        default: 0
    },
    // 上传者
    publisher: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('File', FileSchema);