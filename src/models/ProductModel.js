import { Schema, model } from "mongoose";

const productSchema = new Schema({
  id: Number,
  title: String,
  description: String,
  price: String,
  discountPercentage: String,
  rating: String,
  stock: String,
  brand: String,
  category: String,
  thumbnail: String,
  images: Array,
});

let Product;

try {
  Product = model("Product");
} catch (err) {
  Product = model("Product", productSchema);
}

export default Product;
