var express = require('express');
var router = express.Router();
var app = express();
var User = require('../models/user.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const { ObjectId } = require("mongoose").Types;
var usercontroller= require('../controllers/user.controllers')


router.post('/Logintest', usercontroller.loginuser);

router.post('/user/create', usercontroller.userpost);

router.get('/user/getAll', usercontroller.getAlluser);

router.put('/user/edit',usercontroller.editusers);

router.delete('/user/delete', usercontroller.deleteuser)

module.exports = router;