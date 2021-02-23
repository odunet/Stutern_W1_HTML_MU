//Initialize DOM element for counter
let counter = document.querySelector("#count");

//Initializa button for adding post
let btn = document.querySelector("#btn");

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//Initializa button for adding post
let btnModal = document.querySelector("#submitModal");

//Initializa author
let author = document.querySelector("#author");

//Initializa message
let logMessage = document.querySelector("#message");

//Initializa message
let logList = document.querySelector("#userLog");

btn.addEventListener( "click", function() {
  // alert("Ayo");
    modal.style.display = "block";
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//what happens after submitting modal
btnModal.addEventListener( "click", function() {
  let newLog = document.createElement("LI");
  let name = document.createElement("h4");
  let brk = document.createElement("P");
  let msg = document.createElement("P");
  let hLine = document.createElement("P");
  
  name.innerHTML = author.value;
  msg.innerHTML = logMessage.value;
  hLine.innerHTML = "<hr>";
  
  newLog.appendChild(name);
  newLog.appendChild(msg);
  newLog.appendChild(hLine);
  
  //Exit function if any input field was left empty
  if (name.innerHTML == "" || msg.innerHTML == "") {
    //Clear fields
    author.value = "" ;
    logMessage.value = "" ;
    
    //Remove modal
    modal.style.display = "none";
    
    //Exit function
    return null;
  }
  
  //Append new entry to list
  logList.appendChild(newLog);
  
  //Exit modal
  modal.style.display = "none";
  
  //Print the latest list count
  counter.innerHTML = `You have a total of ${logList.childElementCount} Posts`
  
  //Clear fields
  author.value = "";
  logMessage.value = "";
  
  //Hides section is no data is in the log
  if (logList.childElementCount != 0) {
    document.querySelector(".log").style.display = "";
    document.querySelector(".log2").style.display = "";
    document.querySelector(".log3").style.display = "";
  }
})

//Shows the number of logs onload
counter.innerHTML = ` You have a total of ${logList.childElementCount} Posts`

//Hides section is no data is in the log
if (logList.childElementCount == 0) {
  document.querySelector(".log").style.display = "none";
  document.querySelector(".log2").style.display = "none";
  document.querySelector(".log3").style.display = "none";
}
