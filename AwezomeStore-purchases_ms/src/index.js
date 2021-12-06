const express = require('express')
const CouponRoutes = require("./routes/Coupon.Routes");
const ProductRoutes = require("./routes/Product.Routes");
const CarRoutes = require("./routes/Shoping_car.Routes");
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