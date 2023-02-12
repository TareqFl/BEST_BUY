import { Schema, model } from "mongoose";

const categorySchema = new Schema({
  categories: [String],
});

let Category;

try {
  Category = model("Category");
} catch (err) {
  Category = model("Category", categorySchema);
}

export default Category;
