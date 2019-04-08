/**
 * Created by zhihui on 15-5-26.
 * Modified by Shilei Tian since 16-08-09
 */
// 3rd party modules
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var jwt = require("jsonwebtoken");

var config = require("../configs/config");

// Models
var Schema = mongoose.Schema;
var Publication = require("./publication");
var Education = require("./education");
var Award = require("./award");
var Group = require("./group");

var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // 中文姓名
    name: {
        type: String,
        required: true
    },
    // 英文姓名
    name_en: {
        type: String,
        required: true
    },
    // 导师
    supervisor: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    // 用户权限，普通用户 user，管理员 admin
    admin: {
        type: Boolean,
        required: true,
        default: false
    },
    // 身份,代表正在攻读什么学位。0 本科，1 硕士，2 博士，3 教师
    role: {
        type: Number,
        enum: [0, 1, 2, 3],
        require: true,
        default: 0
    },
    // 研究方向
    interests: {
        type: String
    },
    // 发表的论文
    publications: [{
        type: Schema.Types.ObjectId,
        ref: "Publication"
    }],
    // 教育背景
    educations: [{
        type: Schema.Types.ObjectId,
        ref: "Education"
    }],
    // 获奖情况
    awards: [{
        type: Schema.Types.ObjectId,
        ref: "Award"
    }],
    // 自我介绍
    introduction: {
        type: String
    },
    // 联系方式-邮箱
    email: {
        type: String
    },
    // 联系方式-个人主页
    homepage: {
        type: String
    },
    // 个人照片,在 public 文件夹下边的路径，不直接存在 mongodb 中
    photo: {
        type: String,
        default: "/img/no_avatar.png"
    },
    // 用户所在的分组
    groups: [{
        type: Schema.Types.ObjectId,
        ref: "Group"
    }],
    // 是否已经毕业
    graduate: {
        type: Boolean,
        default: false
    }
});

// 对密码进行加密存储
UserSchema.methods.setPassword = function (password) {
    var salt = bcrypt.genSaltSync(config.bcrypt.salt_round);
    this.password = bcrypt.hashSync(password, salt);
};

// 判断用户输入的明文密码是否和加密密码一致
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

// 生成 jsonwebtoken
UserSchema.methods.generateJWT = function () {
    var today = new Date(Date.now());
    //token过期时间
    var expire = today;
    expire.setDate(expire.getDate() + config.jwt.session_days);
    var payload = {
        username: this.username,
        id: this._id,
        admin: this.admin,
        expire: expire
    };
    return jwt.sign(payload, config.jwt.secret);
};

module.exports = mongoose.model("User", UserSchema);