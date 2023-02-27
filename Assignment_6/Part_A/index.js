$(document).ready(function() {
  emailValidation();
  pwdValidation();
  submit();
});

function emailValidation(){
  $('input[name="email"]').blur(function(){
    $('#emailError').html("");
    var regExEmailId = /^([a-z\d\.]+@northeastern.edu)$/; 
    var email = $("input[name='email']").val();

    if (regExEmailId.test(email)) {
      $('#emailError').append("");
    } else {
      $('#emailError').append("Email should have @northeastern.edu at the end <br>");
    }
  });
}

function pwdValidation(){
  $('input[name="password"]').blur(function () {
    $('#passwordError').html("");
    var password = $("input[name='password']").val();

    var pwdSpecial = /[!@#$%^&()'[\]"?+-/*={}.,;:_]+/;
    var pwdUpper = /[A-Z]+/;
    var pwdLower = /[a-z]+/;
    var pwdNumber = /[0-9]+/;

    if (password.length >= 8) {
      $('#passwordError').append("");
    } else {
      $('#passwordError').append("Password should have at least 8 characters <br>");
    }

    if (pwdUpper.test(password)) {
      $('#passwordError').append("");
    } else {
      $('#passwordError').append("Password should contain at least 1 uppercase letter <br>");
    }
    
    if (pwdLower.test(password)) {
      $('#passwordError').append("");
    } else {
      $('#passwordError').append("Password should contain at least 1 lowercase letter <br>");
    }

    if (pwdNumber.test(password)) {
      $('#passwordError').append("");
    } else {
      $('#passwordError').append("Password should contain at least 1 number (0–9) <br>");
    }

    if (pwdSpecial.test(password)) {
      $('#passwordError').append("");
    } else {
      $('#passwordError').append("Password should contain at least 1 special character <br>");
    }
  });
}

function submit(){
  $("form").submit(function(event) {
    event.preventDefault();

    var email = $("input[name='email']").val();
    var username = $("input[name='username']").val();
    var password = $("input[name='password']").val();
    var hasError = false;
  
    if (email === "") {
      $("#emailError").append("Please enter your EmailId.");
      hasError = true;
    } else if ($("#emailError").html() != ""){
      hasError = true;
    } else if (username === "") {
      $("#usernameError").append("Please enter your Username.");
      hasError = true;
    } else if (password === "") {
      $("#passwordError").append("Please enter your password.");
      hasError = true;
    } else if ($("#passwordError").html() != ""){
      hasError = true;
    } else {
      hasError = false;
    }
  
    if (!hasError) {
      var username = $('#username').val();
      sessionStorage.setItem('username', username);
      $(location).attr('href','/Assignment_6/Part_A/calculator.html');
    }
  });
}