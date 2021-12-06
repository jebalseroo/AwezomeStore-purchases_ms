const { Router } = require("express");
const router = Router();

const {
  addCar,
  getCar,
  getCarall,
  addProductincar,
  removeProductinCar,
} =  require("../Controllers/Shopoing_car.Controller");


// Routes

router.post("/add", addCar);

router.get("/", getCar);

router.get("/all", getCarall);

router.put("/addProduct", addProductincar);

router.put("/RemoveProduct", removeProductinCar);



module.exports = router;;