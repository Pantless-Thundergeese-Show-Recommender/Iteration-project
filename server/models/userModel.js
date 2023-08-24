const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SALT_WORK_FACTOR = 10;
const bcrypt = require('bcrypt');

const userSchema = new Schema ({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
})

userSchema.pre('save', async function (next) {
    try {
      if (!this.isModified('password')) {
        return next();
      }
      const hashedPassword = await bcrypt.hash(this.password, 10);
      this.password = hashedPassword;
      return next();
    } catch (error) {
      return next(error);
    }
});

module.exports = mongoose.model('User', userSchema);