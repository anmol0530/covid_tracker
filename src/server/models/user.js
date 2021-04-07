// user model
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// before we save the user we need to modify that password by hashing with 'pre' hook
userSchema.pre("save", async function (next) {
  // try catch to handle errors
  try {
    // if password is not modified move on to the next thing (a middleware, a parameter that is passed to this function - 'next' here, it means 'move on')
    if (!this.isModified("password")) {
      return next();
    }
    // 1 param - a password, 2 param - a salt (work factor) - very important!
    // idea of salting is taking a bit of additional information and putting it into the hash so that the hashes are different for the same password
    // if we were to just take a piece of text and hash it, someone else could technically build a table that does that same exact algorithm and figure out what hash corresponds to a password
    let hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    // if we're passing an error to next, it's going to go to our error handler
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword, next) {
  try {
    // we wait for the bcrypt.compare to resolve (it checks if the password is correct by re-encrypting that password which was put in the form and compares to our encrypted string in the database)
    let isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    return next(err);
  }
};

const User = mongoose.model("User", userSchema);

module.exports = User;
