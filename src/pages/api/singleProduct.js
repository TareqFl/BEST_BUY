import mongoConnect from "@/utils/mongoConnect";
import Products from "@/models/ProductModel";

export default async function fetchProduct(req, res) {
  await mongoConnect();
  if (req.method === "POST") {
    const { id } = JSON.parse(req.body);
    const response = await Products.findOne({ id });
    if (response) {
      return res.status(200).json(response);
    }

    return res.status(200).json({ message: "not found" });
  }
  return;
}
