const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const cors = require("cors");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/auth", require("./routes/AuthRouter.ts"));

app.listen(8080, () => {
    console.log("Listening");
});