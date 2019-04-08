var mongoose = require("mongoose");

// 定义上传的图片的 schema，注意，该 schema 只针对主页图片
var ImageSchema = new mongoose.Schema({
    // 图片存储的路径
    path: {
        type: String,
        required: true,
        unique: true
    },
    // 添加日期
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("Image", ImageSchema);