const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nome: {
      type: String,
      require: true,
      unique: false

    }

});

module.exports = mongoose.model('User', UserSchema);
