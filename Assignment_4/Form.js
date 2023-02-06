var cbSource = document.getElementsByName('source');
for(i=0; i<cbSource.length; i++){
    cbSource[i].required = true;
}

var form = document.getElementById("myForm");
form.addEventListener("submit", submitted);

document.getElementById("whyDiv").style.display='none';
document.getElementById("excellent").style.display='none';
document.getElementById("verygood").style.display='none';
document.getElementById("good").style.display='none';
document.getElementById("bad").style.display='none';
document.getElementById("verybad").style.display='none';
document.getElementById("reasonForWhyDiv").style.display='none';

var validFirstName = false;
var validLastName = false;
var validEmail = false;
var validPhone = false;
var validZipCode = false;

var regExName = /^[a-z A-Z]+$/;
var regExPhone = /^\d{3}-\d{3}-\d{4}$/;
var regExEmailId = /^([a-z\d\.]+@northeastern.edu)$/; 
var regExZipCode = /^\d{6}$/;

var firstName = document.getElementById("firstName");
firstName.addEventListener("input", validate);
var lastName = document.getElementById("lastName");
lastName.addEventListener("input", validate);
var emailId = document.getElementById("emailId");
emailId.addEventListener("input", validate);
var phoneNumber = document.getElementById("phoneNumber");
phoneNumber.addEventListener("input", validate);
var zipcode = document.getElementById("zipcode");
zipcode.addEventListener("input", validate);

function validate(e){
    var value = e.target.value;
    var type = this.id;
    var em = "error_" + type;

    switch(type){
            case "firstName":
                if(!value.trim().match(regExName)){
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validFirstName = false;
                }
                else{
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validFirstName = true;
                }
                break;
            case "lastName":
                if(!value.trim().match(regExName)){
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validLastName = false;
                }
                else{
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validLastName = true;
                }
                break;
            case "emailId":
                if(!value.trim().match(regExEmailId)){
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validEmail = false;
                }
                else{
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validEmail = true;
                }
                break;
            case "phoneNumber":
                if(!value.trim().match(regExPhone)){
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validPhone = false;
                }
                else{
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validPhone = true;
                }
                break;
            case "zipcode":
                if(!value.trim().match(regExZipCode)){
                    document.getElementById(em).style.display = "block";
                    this.style.border = "2px solid red";
                    validZipCode = false;
                }
                else{
                    document.getElementById(em).style.display = "none";
                    this.style.border = "";
                    validZipCode = true;
                }
                break;
        }
}

function dropDownChange(value){
    var cbarray = document.getElementsByName('reason');
    for(i=0; i<cbarray.length; i++)
        cbarray[i].checked = false;

    document.getElementById("whyDiv").style.display='none';
    document.getElementById("excellent").style.display='none';
    document.getElementById("verygood").style.display='none';
    document.getElementById("good").style.display='none';
    document.getElementById("bad").style.display='none';
    document.getElementById("verybad").style.display='none';
    document.getElementById("reasonForWhyDiv").style.display='none';

    if(value != 'select' && value != ''){
        document.getElementById("whyDiv").style.display='';
        document.getElementById(value).style.display='';
    }
}

function checkboxClicked(chkbox){
    console.log(chkbox.checked);
    if(chkbox.checked){
        document.getElementById("reasonForWhyDiv").style.display='';
        document.getElementById("reasonForWhy").required = true;
    }
    else{
        document.getElementById("reasonForWhyDiv").style.display='none';
        document.getElementById("reasonForWhy").required = false;
    }
}

function submitted(e){
    e.preventDefault();
    var form = document.getElementById("myForm");
     
    if (validFirstName && validLastName && validEmail && validPhone && validZipCode){	
        var formData = new FormData(form);
        var feedback = document.getElementById("feedback").value === "select"?"":document.getElementById("feedback").value;

        switch(feedback){
            case "excellent":
                feedback = "Excellent";
                break;
            case "verygood":
                feedback = "Very Good";
                break;
            case "good":
                feedback = "Good";
                break;   
            case "bad":
                feedback = "Bad";
                break;    
            case "verybad":
                feedback = "Very Bad";
                break;   
            default:
                feedback = "";
                break;
        }

        var sourcevar = '';
        for(i=0; i<cbSource.length; i++){
            if(cbSource[i].checked){
                sourcevar = sourcevar + cbSource[i].value + ', ' ;
            }
        }

        sourcevar = sourcevar.slice(0, -2);
        formData.set('source', sourcevar);
        formData.set('feedback', feedback);

        localStorage.setItem("formData", JSON.stringify(Object.fromEntries(formData)));
        
        var resetbtn = document.querySelector("#resetForm");
        resetbtn.click();
        dropDownChange('');
        window.location.href = "Details.html";
    }
    else{
        alert("Some fields require your attention.");
    }
}

function howDidyouHearCheckBox(cb){
    var sources = document.getElementsByName('source');
    
    if(cb.checked){
        for(i=0; i<sources.length; i++){
            if(sources[i].required)
                sources[i].required = false;
        }
    }
    else{
        var flag = false;
        for(i=0; i<sources.length; i++){
            if(sources[i].checked){
                flag = true;
            }
        }
        if(!flag){
            for(i=0; i<sources.length; i++){
                sources[i].required = true;
            }
        }
    }
}