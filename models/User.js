let mongoose = require('mongoose');
var Schema = mongoose.Schema;

let userSchema = new mongoose.Schema({
  username: String
})


module.exports = mongoose.model('User', userSchema);
