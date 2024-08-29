const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: String
})

let Category = mongoose.model("categories", schema)
module.exports = Category;