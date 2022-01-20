'use strict';

const { HttpProvider } = require('../../providers');

const baseUrl = process.env.MS_PURCHASES_BASE_URL;

module.exports = {
  //coupon
  createCoupon: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/Coupon/add`, data);
  },
  updateCoupon: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/coupon/updateCoupon`, data);
  },
  delateCoupon: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/coupon/`, data);
  },
  // Product
  createProduct: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/Product/add`, data);
  },
  updateProduct: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/Product/updateProduct`, data);
  },
  delateProduct: async (root, {data}) => {
    return await HttpProvider.deleted(`${baseUrl}/Product/`, data);
  },
  addCouponinProduct: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/Product/addCoupon`, data);
  },
  removeCouponinProduct: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/Product/RemoveCoupon`, data);
  },
  // ShopingCar
  createShopingCar: async (root, {data}) => {
    return await HttpProvider.post(`${baseUrl}/Car/add`, data);
  },
  addProductinShopingCar: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/Car/addProduct`, data);
  },
  removeProductinShopingCar: async (root, {data}) => {
    return await HttpProvider.put(`${baseUrl}/Car/RemoveProduct`, data);
  },
};
