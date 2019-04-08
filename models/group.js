var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// 用户的分组,分成两类:教师和学生
// 教师分成教授,副教授,讲师等
// 学生根据不同的讨论班进行分组,一个学生可以属于多个分组
var GroupSchema = new mongoose.Schema({
    // 分组的类型，0 学生，1 教师。
    category: {
        type: Number,
        enum: [0, 1],
        default: 0,
        required: true
    },
    // 分组名称
    name: {
        type: String,
        unique: true,
        required: true
    },
    parent: {
        type: Schema.Types.ObjectId,
        ref: "Group"
    }
});

module.exports = mongoose.model("Group", GroupSchema);
