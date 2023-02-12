import mongoConnect from "@/utils/mongoConnect";
import Category from "@/models/CategoryModel";

export default async function handleProducts(req, res) {
  await mongoConnect();

  if (req.method === "POST") {
    const { categories } = req.body;

    const resp = await Category.findOne({ categories });

    if (!resp) {
      let newCategory = new Category({
        categories,
      });

      await newCategory.save((err) => {
        if (err) {
          return res.status(200).json({ message: err.message });
        }

        return res.status(200).json(newCategory);
      });
    }
    return res.status(200).json(resp);
  } else if (req.method === "GET") {
    const resp = await Category.find();
    return res.status(200).json(resp);
  }
}
