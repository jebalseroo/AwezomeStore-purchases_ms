const { Router } = require("express");
const router = Router();

const {
  addProduct,
  getProduct,
  getProductall,
  deleteProduct,
  updateProduct,
  addCouponinProduct,
  removeCouponinProduct,
} =  require("../Controllers/Product.Controller");


// Routes

router.post("/add", addProduct);

router.get("/", getProduct);

router.get("/all", getProductall);

router.put("/updateProduct", updateProduct);

router.delete("/", deleteProduct);

router.put("/addCoupon", addCouponinProduct);

router.put("/RemoveCoupon", removeCouponinProduct);



module.exports = router;;