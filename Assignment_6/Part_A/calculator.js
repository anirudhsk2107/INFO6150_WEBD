var isNumber = false;

$(document).ready(function() {
    welcome();
    inputValidation();
    add();
    subtract();
    multiply();
    divide();
});

function welcome(){
    var username = sessionStorage.getItem('username');
    $('#welcomeHead').html('Hi' + ' ' + username + '!');
}

function inputValidation(){
    $('input[name="number"]').blur(() => {
        var elementId = event.target.id;
        $('#' + elementId + 'Error').html("");
        var regExNo = /^-?\d*\.?\d+$/; 
        var inputNo = $("#" + elementId).val();
        
        if (regExNo.test(inputNo)) {
            $('#' + elementId + 'Error').append("");
        } else {
            $('#' + elementId + 'Error').append("Input should be a number");
            isNumber = false;
        }

        isNumber = ($('#input1Error').html() == "" && $('#input2Error').html() == "") ? true : false;
        console.log(isNumber);
    });
}

function add(){
    $('#add').click(() => {
        if(isNumber){
            var input1 = parseFloat($("#input1").val());
            var input2 = parseFloat($("#input2").val());
            $('#output').val(parseFloat(input1+input2));
        } else {
            alert('Please enter numbers only in the input field.');
            $('#output').val("");
        }
    });
}

function subtract(){
    $('#subtract').click(() => {
        if(isNumber){
            var input1 = parseFloat($("#input1").val());
            var input2 = parseFloat($("#input2").val());
            $('#output').val(parseFloat(input1-input2));        
        } else {
            alert('Please enter numbers only in the input field.');
            $('#output').val("");
        }
    });
}

function multiply(){
    $('#multiply').click(() => {
        if(isNumber){
            var input1 = parseFloat($("#input1").val());
            var input2 = parseFloat($("#input2").val());
            $('#output').val(parseFloat(input1*input2));        
        } else {
            alert('Please enter numbers only in the input field.');
            $('#output').val("");
        }
    });
}

function divide(){
    $('#divide').click(() => {
        if (isNumber) {
            var input1 = parseFloat($("#input1").val());
            var input2 = parseFloat($("#input2").val());
            $('#output').val(parseFloat(input1/input2));   
        } else {
            alert('Please enter numbers only in the input field.');
            $('#output').val("");
        }     
    });
}