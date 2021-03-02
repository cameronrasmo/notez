const AuthExpress = require("express");
const AuthRouter = AuthExpress.Router();

AuthRouter.route("/")
    .get((req, res) => {
        res.send("Hey silly billy");
    })
    .post((req, res) => {
        const { username, password } = req.body;
        res.send(`${username} && ${password}`);
    });

module.exports = AuthRouter;
