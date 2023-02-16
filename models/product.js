import { model, models, Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  image: String,
});

const Product = models?.Product || model("Product", productSchema);

export default Product;
