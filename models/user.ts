const userSchemaMongoose = require("mongoose");

const Schema = userSchemaMongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

module.exports = userSchemaMongoose.model("User", userSchema);
