import { connect, set } from "mongoose";

async function mongoConnect() {
  const uri =
    "mongodb+srv://admin-tareq:Tareq123@cluster0.ycu8b.mongodb.net/?retryWrites=true&w=majority";

  set("strictQuery", false);

  connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).catch((err) => err);
}

export default mongoConnect;
