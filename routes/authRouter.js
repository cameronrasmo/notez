var authExpress = require("express");
var authRouter = authExpress.Router();
var User = require("../models/user.ts");
authRouter
    .route("/")
    .get(function (req, res) {
    res.send("Hey silly billy");
})
    .post(function (req, res) {
    var newUser = new User(req.body);
    newUser.save(function (err, saved) {
        if (err) {
            return;
        }
        res.send(newUser);
    });
});
module.exports = authRouter;
