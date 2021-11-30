const { Router } = require("express");
const router = Router();

const {
  addCoupon,
  getCoupon,
  deleteCoupon,
  updateCoupon
} =  require("../Controllers/Coupon.Controller");


// Routes

router.post("/add", addCoupon);

router.get("/", getCoupon);

router.put("/updateCoupon", updateCoupon);

router.delete("/", deleteCoupon);

module.exports = router;;