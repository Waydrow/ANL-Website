/**
 * This file is the `Document` definition. This type of documents will be public, therefore they can be datasets,
 * papers,books.
 *
 * @name      document.js
 * @summary   `Document` definition
 * @link      /models/document.js
 * @since     2016-08-02
 * @author    Shilei Tian <tianshilei@sjtu.edu.cn>
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//定义资料的模式
var DocumentSchema = new mongoose.Schema({
    // 资料名称
    name: {
        type: String,
        required: true
    },
    // 资料简介
    introduction: {
        type: String
    },
    // 资料的大小
    size: {
        type: Number,
        required: true
    },
    // 资料本地存储的路径
    path: {
        type: String,
        required: true
    },
    // 添加日期
    date: {
        type: Date,
        required: true
    },
    // 上传者
    uploader: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

module.exports = mongoose.model('Document', DocumentSchema);