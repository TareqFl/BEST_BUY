import mongoConnect from "@/utils/mongoConnect";
import Products from "@/models/ProductModel";

export default async function handleProducts(req, res) {
  await mongoConnect();
  if (req.method === "POST") {
    try {
      const { product } = req.body;

      const resp = await Products.insertMany(product);
      if (resp) {
        return res.status(200).json(resp);
      }
    } catch (error) {
      res.send(200).json({ message: error.message });
    }
  } else {
    try {
      const resp = await Products.find();
      return res.status(200).json(resp);
    } catch (error) {
      res.send(200).json({ message: error.message });
    }
  }
}
