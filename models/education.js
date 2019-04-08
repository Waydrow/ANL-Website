var mongoose = require('mongoose');

var EducationSchema = new mongoose.Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date
    },
    school: {
        type: String,
        required: true
    },
    // 高中可以不写专业
    major: {
        type: String,
        required: true
    },
    // 学位类型，0 本科，1 硕士，2 博士
    type: {
        type: Number,
        enum: [0, 1, 2]
    }
});

module.exports = mongoose.model('Education', EducationSchema);