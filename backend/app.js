const express = require("express");
const mongoose = require("mongoose");
const categoryRoutes = require("./routes/category")

const app = express();
app.use(express.json())
app.set('port', process.env.PORT || 3000)

app.use("/category",categoryRoutes);


async function connectDB() {
    await mongoose.connect("mongodb://localhost:27017/ecommerce");
    console.log("mongoDb connected")
}

connectDB();
app.listen(app.get("port"));