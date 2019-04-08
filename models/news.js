var mongoose = require('mongoose');

var NewsSchema = new mongoose.Schema({
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

module.exports = mongoose.model('News', NewsSchema);