/**
 * Created by zhihui on 15-5-29.
 * 科研成果,以喜报的形式报到科研成果
 * Refactored by Shilei TIan on 2016-08-23
 */
var mongoose = require('mongoose');

var AchievementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    title_en: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    content_en: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    visit_count: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('Achievement', AchievementSchema);