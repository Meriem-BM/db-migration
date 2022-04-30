const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({});
const Menu = mongoose.model("Order", MenuSchema);
module.exports = Menu;