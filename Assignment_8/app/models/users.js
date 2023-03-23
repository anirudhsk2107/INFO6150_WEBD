var mongoose = require('mongoose');

module.exports = mongoose.model("Users",{
    
    fullname:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    }
});
