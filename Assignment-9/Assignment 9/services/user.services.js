var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/user.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const { ObjectId } = require("mongoose").Types;


const createuser = async (req, res) => {
    console.log('creating user')
    user = await User.findOne({ email: req.body.email });
    if (user) {
        console.log('already user')
        res.send(
            "User already exists"
        );
        return;
    }
    else {
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        console.log('user checking')
        User.addUser(user, (err, result) => {
            if (err) {
                res.send(err);
            }
            else {
                res.send(user);
            }
        });
    }
}


const getusers = async (req, res) => {
    try {
        const data = await User.find();
        res.send(data)
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateusers = async (req, res) => {

    user = await User.findOne({ email: req.body.email });

    if (user) {
        const name = req.body.name;
        const password = req.body.password;
        const email = req.body.email;
        const salt = await bcrypt.genSalt(10);
        const password1 = await bcrypt.hash(password, salt);
        const options = { new: true };
        const result = await User.findOneAndUpdate({ email: email }, { name: name, password: password1 }, options);
        res.send(result);
        return;
    }
    else {
        res.status(404).send("User not found in Database");
    }
}


const removeuser = async (req, res) => {
    try {
        const email = req.body.email;
        const id = req.params.id;

        user = await User.findOne({ email: req.body.email });
        if (user) {
            user.delete(email)
            return res.send(user)
        }
        else {
            res.status(404).send(
                "Cannot delete as email id doesn't exist in database"
            );
            return;
        }
    }
    catch (error) {
        return res.status(400).send({ message: error.message })
    }
}

module.exports = {
    getusers,
    createuser,
    updateusers,
    removeuser,
};



