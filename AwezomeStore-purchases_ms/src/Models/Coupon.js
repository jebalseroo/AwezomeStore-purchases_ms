const mongoose = require("mongoose");
const { Schema } = mongoose;

const Coupon = new Schema(
  {
    name: {type: String, required: true ,  default: 'none'},
    Aplied: { type: Boolean, default: false },
    value: { type: Number, default: 0}
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Coupon", Coupon);