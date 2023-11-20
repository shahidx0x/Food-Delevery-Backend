const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Signup",
  new mongoose.Schema(
    {
      cartNumber: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      company: String,
      isAccountVerified: {
        type: Boolean,
        default: false,
      },
      isEmailVerified: {
        type: Boolean,
        default: false,
      },
      cardVerified: {
        type: Boolean,
        default: false,
      },
      phoneNumber: String,
      isAccountActive: {
        type: Boolean,
        default: false,
      },
      profilePicture: String,
      location: String,
      zipCode: String,
      firstName: String,
      lastName: String,
      subscription: String,
      paymentMethod: String,
      cardNumber: String,
      firebaseFCM: String,
      resetPasswordToken: Number,
      resetPasswordExpires: Number,
      refreshToken: String,
      role: {
        type: String,
        enum: ["user", "admin"],
        default: "user",
      },
    },
    {
      timestamps: true,
    }
  )
);
