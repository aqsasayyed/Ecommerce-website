const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId, ref: "users"
    },
    productsId: [String]

})

const Cart = mongoose.model("carts", schema);
module.exports = Cart;