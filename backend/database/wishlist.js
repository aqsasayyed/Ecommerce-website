const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    userId:{
        type: Schema.Types.ObjectId, ref:"users"
    },
    productsId:[String]

})

const WishList = mongoose.model("wishlists", schema);
module.exports = WishList;