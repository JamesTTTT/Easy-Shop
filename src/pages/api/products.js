// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { initMongoose } from "lib/mongoose";
import Product from "models/product";

export default async function handler(req, res) {
  await initMongoose();
  res.json(await Product.find().exec());
}
