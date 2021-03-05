const authExpress = require("express");
const authRouter = authExpress.Router();
const User = require("../models/user.ts");
const jwt = require("jsonwebtoken");

authRouter.route("/signup").post((req, res, next) => {
    const { username, password } = req.body;
    User.findOne({ username }, (err, found) => {
        if (err) {
            res.status(500);
            return next(err);
        }

        if (found) {
            res.status(403);
            return next(new Error("Username already exists"));
        }

        const newUser = new User({ username, password });
        newUser.save((err, saved) => {
            if (err) {
                res.status(500);
                return next(err);
            }

            const token = jwt.sign(newUser.toObject(), process.env.SECRET);
            res.status(200).send({ token, user: newUser });
        });
    });
});

module.exports = authRouter;
