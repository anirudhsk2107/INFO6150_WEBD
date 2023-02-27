$(document).ready(function() {
    welcome();

    $('#input1').on('input', function() {
      var numOnly = $(this).val().replace(/[^0-9]/g, '');
      $(this).val(numOnly);
    });

    $('#input2').on('input', function() {
        var numOnly = $(this).val().replace(/[^0-9]/g, '');
        $(this).val(numOnly);
    });

    add();
    subtract();
    multiply();
    divide();
});

function welcome(){
    var username = sessionStorage.getItem('username');
    $('#welcomeHead').html('Hi' + ' ' + username + '!');
}

function add(){
    $('#add').click(() => {
        var input1 = parseFloat($("#input1").val());
        var input2 = parseFloat($("#input1").val());
        $('#output').val(parseFloat(input1+input2));
    });
}
function subtract(){
    $('#subtract').click(() => {
        var input1 = parseFloat($("#input1").val());
        var input2 = parseFloat($("#input1").val());
        $('#output').val(parseFloat(input1-input2));        
    });
}
function multiply(){
    $('#multiply').click(() => {
        var input1 = parseFloat($("#input1").val());
        var input2 = parseFloat($("#input1").val());
        $('#output').val(parseFloat(input1*input2));        
    });
}
function divide(){
    $('#divide').click(() => {
        var input1 = parseFloat($("#input1").val());
        var input2 = parseFloat($("#input1").val());
        $('#output').val(parseFloat(input1/input2));        
    });
}