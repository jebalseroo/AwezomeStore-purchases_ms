'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_PURCHASES_BASE_URL;

module.exports = {
  // Coupon
  getCouponById: async (root, {data}) => {
    return await HttpProvider.get(`${baseUrl}/Coupon/`, data);
  },
  // Product
  getProductById: async (root, {data}) => {
    return await HttpProvider.get(`${baseUrl}/Product/`, data);
  },
  // ShopingCar
  getShopingCartById: async (root, {data}) => {
    return await HttpProvider.get(`${baseUrl}/Car/`, data);
  },
};
