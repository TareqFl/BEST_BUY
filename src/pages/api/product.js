import mongoConnect from "@/utils/mongoConnect";
import Products from "@/models/ProductModel";

export default async function handleProducts(req, res) {
  await mongoConnect();
  if (req.method === "POST") {
    const { product } = req.body;

    const resp = await Products.insertMany(product);
    if (resp) {
      return res.status(200).json(resp);
    }
  }
  const resp = await Products.find();
  return res.status(200).json(resp);
}
