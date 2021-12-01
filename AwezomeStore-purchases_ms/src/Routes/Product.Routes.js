const { Router } = require("express");
const router = Router();

const {
  addProduct,
  getProduct,
  deleteProduct,
  updateProduct,
  addCouponinProduct,
  removeCouponinProduct,
} =  require("../Controllers/Product.Controller");


// Routes

router.post("/add", addProduct);

router.get("/", getProduct);

router.put("/updateProduct", updateProduct);

router.delete("/", deleteProduct);

router.put("/addCoupon", addCouponinProduct);

router.put("/RemoveCoupon", removeCouponinProduct);



module.exports = router;;