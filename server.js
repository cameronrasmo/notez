var express = require("express");
var app = express();
require("dotenv").config();
var morgan = require("morgan");
var cors = require("cors");
var mongoose = require("mongoose");
var path = require("path");
var port = process.env.PORT || 8080;
var secret = process.env.SECRET || "silly billy fo philly";
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/notezDB", {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
}, function () {
    console.log("Connected to MongoDB");
});
app.use("/auth", require("./routes/authRouter.ts"));
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, function () {
    console.log("Listening");
});
