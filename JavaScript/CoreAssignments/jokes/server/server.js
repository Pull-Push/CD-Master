const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokeRoutes = require("./routes/jokes.routes");
AllMyJokeRoutes(app);

app.listen(8080, () => console.log("The server is operation on port 8080"));