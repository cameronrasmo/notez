const AuthExpress = require("express");
const AuthRouter = AuthExpress.Router();

AuthRouter.route("/")
    .get((req, res) => {
        res.send("Hey silly billy");
    })
    .post((req, res) => {
        const un = req.body.username;
        const pw = req.body.password;
        res.send("You typed in " + un + " " + pw);
    });

module.exports = AuthRouter;
