const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use(express.static(path.join(__dirname, "client", "build")));
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/notezDB",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useUnifiedTopology: true,
    },
    () => {
        console.log("Connected to MongoDB");
    }
);

app.use("/auth", require("./routes/authRouter.ts"));

app.use((err, req, res, next) => {
    console.log(err.message);
    res.send({ errMsg: err.message });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => {
    console.log("Listening");
});
