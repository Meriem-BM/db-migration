const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({});
const Category = mongoose.model("Company", CategorySchema);
module.exports = Category;