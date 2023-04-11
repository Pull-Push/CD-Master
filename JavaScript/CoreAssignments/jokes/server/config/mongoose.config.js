const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jokes',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Established a connection to the databse"))
    .catch(err => console.log("Somthing went wrong when connecting to the database", err));