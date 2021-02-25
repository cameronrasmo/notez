var express = require("express");
var app = express();
require("dotenv").config();
var morgan = require("morgan");
var cors = require("cors");
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/auth", require("./routes/AuthRouter.ts"));
app.listen(8080, function () {
    console.log("Listening");
});
