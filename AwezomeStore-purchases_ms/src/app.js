const express = require("express");

const CouponRoutes = require("./Routes/Coupon.Routes");


const app = express();

// Settings
app.set("port", 3000);

// Middlewares
app.use(express.json());

// Routes
app.use("/Coupon", CouponRoutes);


module.exports = app;