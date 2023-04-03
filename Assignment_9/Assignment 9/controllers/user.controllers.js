var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/user.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const { ObjectId } = require("mongoose").Types;
var UserService = require('../services/user.services')


const loginuser = async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    if (email == "" && password == "") {
        res.status(400).send(
            "Please enter email and password"
        );
        return;
    }
    if (email == "") {
        res.status(400).send(
            "Please enter email"
        );
        return;
    }
    else {
        if (!email.match(/^([a-z\d\.]+@northeastern.edu)$/)) {
            res.status(400).send(
                "Please enter valid mail"
            );
            return;
        }
    }
    if (password == "") {

        res.status(400).send(
            "Please enter password"
        );
        return;
    }
    else {
        if (!password.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/)) {

            res.status(400).send(
                "Please enter password that contains lowercases, uppercases, digits and special characters and minimum 8 characters "
            );

            return;

        }
        else {
            console.log('Encrption')
            user = await User.findOne({ email: req.body.email });
            console.log("user - ", user);
            if (user) {
                bcrypt.compare(password, user.password, (err, isMatch) => {

                    if (err) {
                        return err;
                    }
                    else {
                        console.log(email);
                        console.log("User Password - ", user.password);
                        console.log("Password - ", password);

                        if (email == user.email && !isMatch) {
                            res.status(401).send("invalid credentials");
                        }
                        else {
                            res.send('Login successful');
                            console.log('checking')
                        }
                    }
                })
            }
            else {
                res.status(400).send("User not found in Database");

            }
        }
    }
}

const userpost = async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password1 = req.body.password;
    var name = req.body.name;
    var email = req.body.email;
    var password1 = req.body.password;
    if (name == "" && email == "" && password1 == "") {
        res.status(400).send(
            "Please enter Full Name and email and password"
        );
        return;
    }
    if (name == "" && email == "") {
        res.status(400).send(
            "Please enter Full Name and email"
        );
        return;
    }
    if (name == "" && password1 == "") {

        res.status(400).send(
            "Please enter Full Name and password"
        );
        return;
    }
    if (email == "" && password1 == "") {
        res.status(400).send(
            "Please enter email and password"
        );
        return;
    }
    if (name == "") {
        res.status(400).send(
            "Please enter Full Name"
        );
        return;
    }
    if (name.length > 10) {
        res.status(400).send(
            "Please enter name less than 10 characters"
        );
        return;
    }
    if (name.match(/(?=.*\d)/)) {
        res.status(400).send(
            "Please enter name without digits"
        );
        return;
    }
    if (email == "") {
        (res.status(400).send(
            "Please enter E-mail"
        ));
        return;
    }
    else {

        if (!email.match(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)) {
            res.status(400).send(
                "Please enter valid mail"
            );
            return;
        }

    }
    if (password1 == "") {
        res.status(400).send(
            "Please enter password"
        );
        return;
    }
    else {
        if (!password1.match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!&$%&? "]).*$/)) {

            res.status(400).send(
                "Please enter password that contains lowercases, uppercases, digits and special characters and minimum 8 characters "
            );
            return;
        }
        else {
               UserService.createuser(req, res)
        }
    }
}

const getAlluser = async (req, res) => {
        UserService.getusers(req, res)
}

const editusers = async (req, res) => {
    var name = req.body.name;
    var email = req.body.email;
    var password1 = req.body.password;
    if (name == "" && email == "" && password1 == "") {
        res.send(
            "Please enter Full Name and email and password"
        );
        return;
    }
    if (name == "" && email == "") {
        res.send(
            "Please enter Full Name and email"
        );
        return;
    }
    if (name == "" && password1 == "") {
        res.send(
            "Please enter Full Name and password"
        );
        return;
    }
    if (email == "" && password1 == "") {
        res.send(
            "Please enter email and password"
        );
        return;
    }
    if (name == "") {
        res.send(
            "Please enter Full Name"
        );
        return;
    }
    if (name.length > 10) {
        res.send(
            "Please enter name less than 10 characters"
        );
        return;
    }
    if (name.match(/(?=.*\d)/)) {
        res.send(
            "Please enter name without digits"
        );
        return;
    }
    if (email == "") {
        (res.send(
            "Please enter E-mail"
        ));

        return;

    }
    else {
        if (!email.match(/^([a-z\d\.]+@northeastern.edu)$/)) {
            res.send(
                "Please enter valid mail"
            );
            return;
        }

    }
    if (password1 == "") {
        res.send(
            "Please enter password"
        );

        return;

    }
    else {
        if (!password1.match(/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/)) {
            res.send(
                "Please enter password that contains lowercases, uppercases, digits and special characters and minimum 8 characters "
            );
            return;
        }
        else {
            UserService.updateusers(req,res)
        }
    }
}

const deleteuser = async (req, res) => {
    var email = req.body.email;
    if (email == "") {
        (res.send(
            "Please enter E-mail"
        ));
        return;
    }
    else {

        if (!email.match(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/)) {
            res.send(
                "Please enter valid mail"
            );
            return;
        }
    }

    UserService.removeuser(req,res)
 
}

module.exports = {
    getAlluser,
    userpost,
    deleteuser,
    editusers,
    loginuser
};