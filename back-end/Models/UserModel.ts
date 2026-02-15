import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      minlength: 5,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true },
);

export const UserModel = mongoose.model("User", UserSchema);
