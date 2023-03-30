var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');



var userRoute = require('./routes/user.routes');

// connect to mongoDB 
mongoose.connect("mongodb://127.0.0.1:27017/test", { useNewUrlParser: true });
// mongoose.connect(dbUrl);
mongoose.connection.on('connected', () => {
    console.log('connected to mongo database');
});

mongoose.connection.on('error', err => {
    console.log('Error at mongoDB: ' + err);
});

var port = 8080;
var app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(userRoute);
app.use(express.json());

var server = http.createServer(app);
server.listen(port, () => {
    console.log('Server is starting = ' + port);
});
