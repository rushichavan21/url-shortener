import mongoose from "mongoose";
import crypto from "crypto";


function getGravatarUrl(email) {
  const hash = crypto.createHash("md5").update(email.trim().toLowerCase()).digest("hex");
  const defaultTypes = ["identicon", "monsterid", "wavatar", "retro", "robohash"];
  const randomType = defaultTypes[Math.floor(Math.random() * defaultTypes.length)];
  return `https://www.gravatar.com/avatar/${hash}?d=${randomType}`;
}

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  avatar: { type: String },
  createdAt: { type: Date, default: Date.now },
});
userSchema.pre("save", function (next) {
  if (!this.avatar) {
    this.avatar = getGravatarUrl(this.email);
  }
  next();
});

const User = mongoose.model("User", userSchema);
export default User;