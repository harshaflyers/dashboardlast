var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button")
var tabPanels=document.querySelectorAll(".tabContainer .tabPanel")

function showPanel (panelIndex,colorCode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundcolor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundcolor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node) {
        node.style.display = "none";
    });
    if(panelIndex != 2) {
        tabPanels[panelIndex].style.display="block";
         tabPanels[panelIndex].style.backgroundcolor=colorCode;
    } else {
        tabPanels[panelIndex].style.display="block";
        tabPanels[panelIndex].style.backgroundcolor="transparent";
        
    }
}
showPanel(2,'F44336');
var inputText = document.getElementById("txt"),
items = document.querySelectorAll("#list li"),
tab = [], index;

// get the selected li index using array
// populate array with li values

for(var i = 0; i < items.length; i++){
tab.push(items[i].innerHTML);
}

// get li index onclick
for(var i = 0; i < items.length; i++){

items[i].onclick = function(){
    index = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + " INDEX = " + index);
    // set the selected li value into input text
    inputText.value = this.innerHTML;
};
}

function refreshArray()
{
// clear array
tab.length = 0;
items = document.querySelectorAll("#list li");
// fill array
for(var i = 0; i < items.length; i++){
tab.push(items[i].innerHTML);
}
}
function addLI(){

var listNode = document.getElementById("list"),
   textNode = document.createTextNode(inputText.value),
   liNode = document.createElement("LI");
   
   liNode.appendChild(textNode);
   listNode.appendChild(liNode); 
   liNode.className(".float-left");

   refreshArray();
   
   // add event to the new LI
   
   liNode.onclick = function(){
    index = tab.indexOf(liNode.innerHTML);
    console.log(liNode.innerHTML + " INDEX = " + index);
    // set the selected li value into input text
    inputText.value = liNode.innerHTML;
};
   
}

function editLI(){
// edit the selected li using input text
items[index].innerHTML = inputText.value;
refreshArray();
}

function deleteLI(){
 
     refreshArray();
     if(items.length > 0){
         items[index].parentNode.removeChild(items[index]);
         inputText.value = "";
     }
}
// card number3
var count=document.getElementById('count').innerText;
var temp = count - 822;
function counting() {
  if(temp < count) {
    setTimeout(function() {
      document.getElementById('count').innerText = temp;
      temp=temp+11;
      counting();
    },30);
  } else {
    setTimeout(function() {
      document.getElementById('count').innerText = count;
    },30);
  }
}
counting();
// count2================
var count2=document.getElementById('count2').innerText;
var temp = count2 - 1;
function counting() {
  if(temp < count2) {
    setTimeout(function() {
      document.getElementById('count2').innerText = temp;
      temp=temp+12;
      counting();
    },30);
  } else {
    setTimeout(function() {
      document.getElementById('count2').innerText = count2;
    },30);
  }
}
counting();
// count3----------------------------------
var count3=document.getElementById('count3').innerText;
var temp = count3 - 422;
function counting() {
  if(temp < count3) {
    setTimeout(function() {
      document.getElementById('count3').innerText = temp;
      temp=temp+12;
      counting();
    },30);
  } else {
    setTimeout(function() {
      document.getElementById('count3').innerText = count3;
    },30);
  }
}
counting();


