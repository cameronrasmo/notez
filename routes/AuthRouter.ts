const AuthExpress = require("express");
const AuthRouter = AuthExpress.Router();

AuthRouter.route("/")
    .get((req, res) => {
        res.send("Hey silly billy");
    })
    .post((req, res) => {
        console.log(req);
        res.send(req.body);
    });

module.exports = AuthRouter;
