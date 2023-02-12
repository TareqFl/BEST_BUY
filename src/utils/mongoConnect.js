import { connect, set } from "mongoose";

async function mongoConnect() {
  set("strictQuery", false);
  await connect("mongodb://127.0.0.1:27017/NextAuthDB");
}

export default mongoConnect;
