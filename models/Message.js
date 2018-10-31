let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let messageSchema = new mongoose.Schema({
  username: String,
  content: String,
  timestamp: {
    type: Date,
    default: Date.now
  }
})


module.exports = mongoose.model('Message', messageSchema);
