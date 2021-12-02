const { Router } = require("express");
const router = Router();

const {
  addCar,
  getCar,
  getCarall,
  deleteCar,
  updateCar,
  addProductincar,
  removeProductinCar,
} =  require("../Controllers/Shopoing_car.Controller");


// Routes

// router.post("/add", addCar);

// router.get("/", getCar);

// router.get("/all", getCarall);

// router.put("/updateProduct", updateCar);

// router.delete("/", deleteCar);

// router.put("/addProduct", addProductincar);

// router.put("/RemoveProduct", removeProductinCar);



module.exports = router;;