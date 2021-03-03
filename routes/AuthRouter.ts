const authExpress = require("express");
const authRouter = authExpress.Router();
const User = require("../models/user.ts");

authRouter
    .route("/")
    .get((req, res) => {
        res.send("Hey silly billy");
    })
    .post((req, res) => {
        const newUser = new User(req.body);
        newUser.save((err, saved) => {
            if (err) {
                return;
            }
            res.send(newUser);
        });
    });

module.exports = authRouter;
