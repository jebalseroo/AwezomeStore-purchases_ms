const express = require('express')
const CouponRoutes = require("./Routes/Coupon.Routes");
const ProductRoutes = require("./Routes/Product.Routes");
const CarRoutes = require("./Routes/Shoping_car.Routes");
const app = express();
require('./database')

// Settings
app.set("port", 3000);

// Middlewares
app.use(express.json());

// Routes
app.use("/Coupon", CouponRoutes);
app.use("/Product", ProductRoutes);
app.use("/Car", CarRoutes);


app.listen(3000);

console.log('server on port', 3000);