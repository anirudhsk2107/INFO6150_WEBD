var User = require("./models/users");
var path = require("path");
var bcrypt = require("bcrypt");

function validateMail(email) {
  var regExEmailId = /^([a-z\d\.]+@northeastern.edu)$/; 
  return regExEmailId.test(email);
}

function validatePassword(password) {

  var regexPassword = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/;
  return regexPassword.test(password);
}

module.exports = function (app) {

  app.get("/user/getAll", async (req, res) => {
    try {
      const users = await User.find({}).lean();
      res.json(users);
      console.log(users);
    } catch (err) {
      console.log(err);
      res.send(err);
    }
  });

  app.post("/user/create", async (req, res) => {
    try {
      console.log("Inside");
      let fullname = ""
      let email = ""
      let password = ""
      fullname = req.body.fullname
      email = req.body.email
      password = req.body.password

      console.log("Type: " + typeof fullname)

      if ( !fullname || !email || !password){
        return res.status(400).json({ 
          message: "All fields are mandatory"
        });
      }

      if (!validateMail(email)){
        return res.status(400).json({
          message: "Email should be a valid northeastern ID"
        });
      }

      if (!validatePassword(password)){
        return res.status(400).json({
          message: "Password must contain at least one upper case character & one special character"
        });
      }

      var existingUser = await User.findOne({email}).lean().exec();
      if (existingUser){
        return res.status(409).json({
          message: "User with this email already exists."
        });
      }

      var userResult = await User.create({ "fullname": fullname, "email": email, "password": password });

      console.log(userResult);
      res.send(userResult);
    } catch (err) {
      console.log(err);
    }
  });

  app.put("/user/edit/:email", async (req, res) => {
    try {

      var email = req.params.email;
      var { fullname, password } = req.body;

      if (!fullname || !email || !password){
        return res.status(400).json({ 
          message: "All fields are mandatory"
        });
      }

      if (!validatePassword(password)){
        return res.status(400).json({
          message: "Password must contain at least one upper case character & one special character"
        });
      }

      var existingUser = await User.findOne({ email }).lean().exec();
      
      if (existingUser) {

        password = await bcrypt.hash(password, 10);

        const resultUser = await User.updateOne({ email }, { fullname, password }).lean().exec();
        if (resultUser) { 
          res.status(200).json({ 
            message: "Details updated successfully" 
          });
        }
        res.send(resultUser); 
    } else {
      return res.status(400).json({ 
        message: "The given email does not exist" 
      });
    }
    } catch (err) {
      console.log(err);
    }
  });

  app.delete("/user/delete/:email", async (req, res) => {
    try{
      var email = req.params.email;
      console.log("Email ++ : "+ email);
      var check  = await User.findOne({ email }).lean().exec();

      if( check == null ){
        return res.status(400).json({
          message: "This email does not exist."
        });
      } else {
        User.deleteOne({ email }).exec();
        return res.status(200).json({ 
          message: "User deleted successfully" 
        });
      }
    } catch(err) {
      console.log(err);
    }
  });

  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/views/index.html"));
  });
};