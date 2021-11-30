const Coupon = require("../Models/Coupon");

const CouponCtrl = {};

CouponCtrl.addCoupon = async (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name )
      throw "The required data is incomplete.";

    const coupon = new Coupon(req.body);
    await coupon.save();

    return res.status(201).json(coupon);
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "Error creating Coupon."
      });
    }
  }
};

CouponCtrl.updateCoupon = async (req, res, next) => {
  try {
    const { CouponId, name, value, Aplied} = req.body;

    if (!CouponId )
      throw "The required data is incomplete";

    var coupon = await Coupon.findById(CouponId);
    if (name){
      coupon.name = name
    }
    if (Aplied){
      coupon.Aplied = Aplied
    }
    if (value){
      coupon.value = value
    }
    await Coupon.findByIdAndUpdate(CouponId, coupon);

    return res.status(200).json({
      message: "the Coupon qualification has been successful."
    })
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "An error occurred while rating the Coupon." , err
      });
    }
  }
};


CouponCtrl.deleteCoupon = async (req, res, next) => {
  try {
    const { CouponId } = req.body;

    if (!CouponId)
      throw "The required data is incomplete";

    await Coupon.findByIdAndDelete(CouponId);

    return res.status(200).json({
      message: "Coupon has been successfully removed"
    });
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The Coupon does not exist",
      });
    }
  }
};

CouponCtrl.getCoupon = async (req, res, next) => {
  try {
    const { CouponId } = req.body;

    if (!CouponId)
      throw "The required data is incomplete";

    const coupon = await Coupon.findById(CouponId);

    return res.status(200).json(coupon);
  } catch (err) {
    if (!err.message) {
      return res.status(400).json({ message: err });
    } else {
      return res.status(400).json({
        message: "The Coupon does not exist",
      });
    }
  }
};

module.exports = CouponCtrl;