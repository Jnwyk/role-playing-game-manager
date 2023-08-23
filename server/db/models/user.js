const mongoose = require("mongoose");
const { Schema } = mongoose;

const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const validatePassowrd = (password) => {
  const re = new RegExp("^(?=.*[0-9])");
  return re.test(password);
};

const userSchema = new Schema(
  {
    username: { type: String, required: [true, "Username is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      validate: [validateEmail, "Wrong email address"],
      unique: true,
    },
    password: {
      type: String,
      validate: [validatePassowrd, "Password does not contain number"],
    },
    picture: {
      type: String,
      default:
        "https://ed-spaces.com/wp-content/uploads/2020/10/default-avatar-profile-icon-vector-18942381.jpg",
    },
    strategy: {
      type: String,
      enum: ["local", "google"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
