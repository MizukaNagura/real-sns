const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        min: 3,
        max: 25,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        max: 50,
        unique: true,
    },
    password: {
        type: String,
        require: true,
        min: 6,
        max: 50,
    },
    profilePiture: {
        type: String,
        default: "",
    },
    coverPiture: {
        type: String,
        default: "",
    },
    followers: {
        type: Array,
        default: [],
    },
    following: {
        type: Array,
        default: [],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    desc: {
        type: String,
        max: 70,
    },
    city: {
        type: String,
        max: 50,
    },
},
    {timestamps: true},
);

module.exports = mongoose.model("User", UserSchema);