const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/products", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to the DB"))
    .catch(err => console.log("Something went wrong", err));