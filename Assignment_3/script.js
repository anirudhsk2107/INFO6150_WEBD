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
  document.getElementById("myTable").deleteRow(parentRow.rowIndex);
  alert("Row deleted successfully!");
}

function addNewRow(){

}