
var formData = JSON.parse(localStorage.getItem("formData"));

document.getElementById("title").innerHTML = formData.title;
document.getElementById("firstName").innerHTML = formData.firstName;
document.getElementById("lastName").innerHTML = formData.lastName;
document.getElementById("emailId").innerHTML = formData.emailId;
document.getElementById("phoneNumber").innerHTML = formData.phoneNumber;
document.getElementById("streetAddress1").innerHTML = formData.streetAddress1;
document.getElementById("streetAddress2").innerHTML = formData.streetAddress2;
document.getElementById("city").innerHTML = formData.city;
document.getElementById("state").innerHTML = formData.state;
document.getElementById("zipcode").innerHTML = formData.zipcode;
document.getElementById("howDidYouHear").innerHTML = formData.source;
document.getElementById("comments").innerHTML = formData.text;
document.getElementById("feedback").innerHTML = formData.feedback;
document.getElementById("why").innerHTML = formData.reason == undefined ? '': formData.reason;
document.getElementById("reasonForWhy").innerHTML = formData.reasonForWhy;