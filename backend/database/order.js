const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    date: Date,
    items:[],
    status:Number

})

const Order = mongoose.model("orders", schema);

module.exports = Order