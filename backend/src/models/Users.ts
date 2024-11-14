import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcrypt"

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  role: 'admin' | 'editor' | undefined;
  portfolio?: string[];
  comparePassword(candidatePassword: string, cb: (err: any, isMatch?: boolean) => void): void;
}

const UserSchema: Schema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'editor'],
    default: 'editor',
  },
  portfolio: {
    type: [String], default: [],
  }
});


UserSchema.pre("save", function (next) {
  const user = this as any;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // Hash password
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function (
  candidatepassword: string,
  cb: (arg: any, isMatch?: boolean) => void
) {
  bcrypt.compare(candidatepassword, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

export default mongoose.model<IUser>('User', UserSchema);