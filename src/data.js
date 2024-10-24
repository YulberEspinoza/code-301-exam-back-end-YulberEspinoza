"use strict";

const mongoose = require("mongoose");
const ItemModel = require("./item-model");

const Data = {};

Data.addAnItem = async (req, res, next) => {
  try {
    const data = req.body;
    const item = new ItemModel(data);
    await item.save();
    res.status(200).json(item);
  } catch (e) {
    next(e);
  }
};

Data.getAllItems = async (req, res, next) => {
  try {
    const items = await ItemModel.find({});
    res.status(200).json(items);
  } catch (e) {
    next(e);
  }
};

Data.getOneItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log("Requested ID:", id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
      console.log("Invalid ID format");
      return res.status(400).json({ message: "Invalid ID format" });
    }

    console.log("Searching for item...");
    const item = await ItemModel.findById(id);

    if (!item) {
      console.log("Item not found");
      return res.status(404).json({ message: "Item not found" });
    }

    console.log("Item found:", item);
    res.status(200).json(item);
  } catch (e) {
    console.error("Error in getOneItem:", e);
    next(e);
  }
};

Data.updateAnItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const item = await ItemModel.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (e) {
    next(e);
  }
};

Data.deleteAnItem = async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await ItemModel.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (e) {
    next(e);
  }
};

module.exports = Data;
