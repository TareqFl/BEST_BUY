import mongoConnect from "@/utils/mongoConnect";
import User from "@/models/UserModel";
import { hash, compare } from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handleForm(req, res) {
  if (req.method === "POST") {
    mongoConnect();
    const { username, password } = JSON.parse(req.body);

    hash(password, Number(process.env.HASH_KEY), (err, key) => {
      // if theres an error return the error
      if (err) {
        return res
          .status(200)
          .json({ is_SignedIn: false, message: err.message });
      }

      // check for user
      User.findOne({ username }, (err, found) => {
        if (err) {
          return res.status(200).json({ message: err.message });
        }
        if (!found) {
          const newUser = new User({
            username,
            password: key,
          });
          newUser.save();
          const token = jwt.sign(
            {
              id: newUser._id,
              username,
              date: Date.now().toLocaleString(),
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
          );
          newUser.token = token;
          newUser.save();
          return res
            .status(200)
            .json({ message: "new User signed In", username, value: true });
        }

        compare(password, found.password, (err, result) => {
          if (err) {
            return res.status(200).json({ message: err.message });
          }
          if (!result) {
            return res.status(200).json({ message: "Wrong password" });
          }
          const refreshToken = jwt.sign(
            {
              id: found._id,
              username,
              date: Date.now().toLocaleString(),
            },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
          );

          found.token = refreshToken;
          found.save();
          return res.status(200).json({
            message: "signed in",
            username,
            value: true,
          });
        });
      });
    });
  } else {
    res.send("hello");
  }
}
