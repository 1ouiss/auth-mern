const Shop = require("../models/shop.model");
const User = require("../models/user.model");

const ShopController = {
  getAll: async (req, res) => {
    try {
      const shops = await Shop.find();
      res.status(200).json(shops);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  getShopsOfUser: async (req, res) => {
    try {
      const shops = await Shop.find({ user: req.user._id });
      console.log(shops);
      res.status(200).json(shops);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  create: async (req, res) => {
    try {
      const shop = new Shop(req.body);
      const newShop = shop.save();
      const user = await User.findById(req.user._id);
      user.shops.push(newShop._id);
      await user.save();
      res.status(201).json(shop);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};

module.exports = ShopController;
