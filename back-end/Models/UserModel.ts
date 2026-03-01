import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { Document } from "mongoose";

export interface IUser extends Document {
  password: string;
  name: string;
  email: string;
  slug: string;
  passwordconfirm: string;
  phone: string;
  role: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    phone: {
      type: String,
    },
    role: {
      type:String,
      enum: ["admin", "user"],
      required:true,
      default:"user",
    },
  },
  { timestamps: true },
);

UserSchema.pre<IUser>("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcrypt.hash(this.password, 10);
});

export const UserModel = mongoose.model<IUser>("User", UserSchema);
