const express = require("express");
const cors =require("cors");
const app = express();
const port = 8008


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


require('./config/mongoose.config')
require('./routes/pet.routes')(app);

app.listen(port, () => console.log(`listening on port ${port}`));
