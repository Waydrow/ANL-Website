var mongoose = require('mongoose');

var AwardSchema = new mongoose.Schema({
  //奖项名称
  name: {
    type: String
  },
  //获奖时间
  date: {
    type: String
  }
});

module.exports = mongoose.model('Award', AwardSchema);