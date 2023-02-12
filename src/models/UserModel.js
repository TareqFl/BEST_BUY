import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    unqiue: true,
  },
  password: String,
  token: String,
});

let User;

try {
  User = model("User");
} catch (err) {
  User = model("User", userSchema);
}

export default User;
