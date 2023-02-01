//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");

document.getElementById("button").disabled = true;

var hiddenRows = document.getElementsByClassName('dropDownTextArea');
for (let i = 0; i < hiddenRows.length; i++){
  hiddenRows[i].style.display = 'none'; 
}

var checkboxes = document.getElementsByTagName('input');
for (let i = 0; i < checkboxes.length; i++){
  checkboxes[i].setAttribute('id', 'checkbox'+[i+1]) 
}

function additionalDetails(row){
  var trow = row.parentNode.parentNode;
  let tindx = trow.rowIndex;
  if (document.getElementsByTagName("tr")[tindx + 1].style.display == 'none')
    document.getElementsByTagName("tr")[tindx + 1].style.display = '';
  else
    document.getElementsByTagName("tr")[tindx + 1].style.display = 'none';
}

function checkedBox(inpt){
  var flag = false;
  var parentRow = inpt.parentElement.parentElement;
  var tbl = parentRow.parentElement;
  var headerRow = tbl.firstElementChild;

  if(document.getElementById(inpt.id).checked == true){
    parentRow.style.backgroundColor = "yellow";

    if(headerRow.cells.length<=8){
      var deleteHeader = document.createElement("th");
      var editHeader = document.createElement("th");

      deleteHeader.innerHTML = 'DELETE'
      editHeader.innerHTML = 'EDIT'

      headerRow.appendChild(deleteHeader);
      headerRow.appendChild(editHeader);
    }
    
    var deleteButton = document.createElement("td");
    deleteButton.setAttribute("id", "deleteTd");
    deleteButton.innerHTML =
      '<button id="delete" type="button" onclick="deleteRow(this)">Delete</button>';
      parentRow.appendChild(deleteButton);

    var editButton = document.createElement("td");
    editButton.setAttribute("id", "editTd");
    editButton.innerHTML =
      '<button id="editbtn" type="button" onclick="editRow()">Edit</button>';
      parentRow.appendChild(editButton);
  }
  else{
    parentRow.style.backgroundColor = "";
    parentRow.deleteCell(9);
    parentRow.deleteCell(8);
  }

  var checkboxes = document.getElementsByTagName('input');
  for (let i = 0; i < checkboxes.length; i++){
    if(document.getElementById(checkboxes[i].id).checked == true)
      flag = true;
  }

  if(flag)
    document.getElementById("button").disabled = false;
  else{
    document.getElementById("button").disabled = true;

    headerRow.deleteCell(9);
    headerRow.deleteCell(8);
  }
}

function editRow(){
  alert("Edit the details.")
}

function deleteRow(inpt){
  var parentRow = inpt.parentElement.parentElement;
  var dropDownDetails = inpt.parentElement.parentElement.nextElementSibling;
  document.getElementById("myTable").deleteRow(parentRow.rowIndex);
  document.getElementById("myTable").deleteRow(dropDownDetails.rowIndex);
  alert("Row deleted successfully!");
}

function addNewRow(){   
  var table = document.getElementById("myTable");
  var tbodyRef = document.getElementsByTagName("tbody")[0];
  var lastStudent = table.lastElementChild.lastElementChild.previousElementSibling?.firstElementChild?.nextElementSibling?.innerHTML || "Student 0";
  var latestIndex = lastStudent.split(" ")[1];

  //Creating a new ROW
  var tdRowNode = document.createElement("tr");
  
  var trCheckBoxCell = document.createElement("td");
  trCheckBoxCell.innerHTML =
    '<input type="checkbox" onclick="checkedBox(this);" id="checkbox' + (parseInt(latestIndex) + 1) + '"/><br /><br /><img src="down.png" width="25px" onclick="additionalDetails(this);"/>';
  
  var trStudentCell = document.createElement("td");
  trStudentCell.innerHTML = "Student " + (parseInt(latestIndex) + 1);
  
  var trTeacherCell = document.createElement("td");
  trTeacherCell.innerHTML = "Teacher " + (parseInt(latestIndex) + 1);
  
  var trAwardCell = document.createElement("td");
  trAwardCell.innerHTML = "Approved";

  var trSemesterCell = document.createElement("td");
  trSemesterCell.innerHTML = "Fall";

  var trTypeCell = document.createElement("td");
  trTypeCell.innerHTML = "TA";

  var trBudgetCell = document.createElement("td");
  var budget = (parseInt(latestIndex) + 1)*10000 + (parseInt(latestIndex) + 2)*1000 + (parseInt(latestIndex) + 3)*100 
             + (parseInt(latestIndex) + 4)*10 + (parseInt(latestIndex) + 5);
  trBudgetCell.innerHTML = budget;

  console.log(trBudgetCell);

  var trpercntCell = document.createElement("td");
  trpercntCell.innerHTML = "100%";

  tdRowNode.appendChild(trCheckBoxCell);
  tdRowNode.appendChild(trStudentCell);
  tdRowNode.appendChild(trTeacherCell);
  tdRowNode.appendChild(trAwardCell);
  tdRowNode.appendChild(trSemesterCell);
  tdRowNode.appendChild(trTypeCell);
  tdRowNode.appendChild(trBudgetCell);
  tdRowNode.appendChild(trpercntCell);

  //Creating a new Dropdown row 
  var tdDropDownNode = document.createElement("tr");
  tdDropDownNode.setAttribute('class', 'dropDownTextArea');
  tdDropDownNode.style.display = 'none';

  var dropDownHtml = document.createElement("td");
  dropDownHtml.colSpan = 8;
  dropDownHtml.innerHTML = 'Advisor:<br /><br /> Award Details<br /> Summer 1-2014(TA)<br /> Budget Number: <br /> Tuition Number: <br /> Comments:<br /><br /><br /> Award Status:<br /><br /><br />';
  
  tdDropDownNode.appendChild(dropDownHtml);

  //Appending to the table
  tbodyRef.appendChild(tdRowNode);
  tbodyRef.appendChild(tdDropDownNode);
}