const mongoose = require("mongoose");
const { Schema } = mongoose;

const Product = new Schema(
  {
    id_product: {type: String, required: true },
    Avalable: { type: Boolean, default: false },
    Amound: { type: Number, default: 0},
    Coupons: [{ type: Schema.Types.ObjectId, ref: "Coupon" }],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Product", Product);