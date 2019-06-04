//main solution
// var childElements = document.getElementsByClassName('item');
// var buttonElement = document.getElementsByClassName('delete');

// var _handler = function(e) {
//      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
// }

// function deleteItem(buttonsClass, childClass) {
//   for (var i=0;i<buttonsClass.length;i++) {
//     buttonsClass[i].addEventListener('click', _handler, false);
//   }    
// }

// deleteItem(buttonElement, childElements);

// function deleteItem(buttonsClass, childClass) {
//     for (var i=0;i<buttonsClass.length;i++) {
//       (function(child) {
//           buttonsClass[i].addEventListener('click', function(e) {
//              child.parentNode.removeChild(child);
//           }, false);
//       })(childClass[i]);
//     }    
//   }
//   //end here

//   //next solution
//   (function(window, htmlElement) {

//     'use strict';

//     htmlElement.addEventListener("click", handleClick, false);

//     function handleClick(event) {
//         if (event.target.classList.contains("delete")) {
//             event.preventDefault();
//             removeItem(event.target);
//         }
//     }

//     function removeItem(button) {
//         var item = getItem(button),
//             confirmMessage;

//         if (item) {
//             confirmMessage = item.getAttribute("data-confirm");

//             if (!confirmMessage || window.confirm(confirmMessage)) {
//                 item.parentNode.removeChild(item);
//             }
//         }
//         else {
//             throw new Error("No item found");
//         }
//     }

//     function getItem(button) {
//         var element = button.parentNode,
//             item = null;

//         while (element) {
//             if (element.nodeName === "LI" || element.nodeName === "TR") {
//                 item = element;
//                 break;
//             }

//             element = element.parentNode;
//         }

//         return item;
//     }

// })(this, this.document.documentElement);
//ends here.........................

/*
let inputText = document.getElementById('txt');
    items = document.querySelector('list LI')
    tab = [], index;
    //get the selected li index using arrays
    for(var i = 0; i < items.length; i++){
        tab.push(items[i].innerHtml);
    }
    //get li index onclick
    for(var i = 0; i < items.length; i++){
        items[i].onclick = function(){
            index = tab.indexOf('this.innerHtml');
            console.log(this.innerHtml + "INDEX="+ index);
        }
    }
function addLi(){
    listNode = document.getElementById('list');
    textNode = document.createTextNode(inputText.value);
    liNode = document.createElement('LI');

    liNode.appendChild(textNode);
    listNode.appendChild(liNode);
}
*/
/*
function addLi(){
    let input = document.getElementById("txt").value;    
    let list = document.getElementById("list");
    let text = document.createTextNode(input);
    let createList= document.createElement("LI");
    createList.appendChild(text);
    list.appendChild(createList)
    document.getElementById("txt").value = "";
}
*/

// function addLi(){
//     let input = document.getElementById("txt").value;
//     let createP = document.createElement("span");
//     let textInput = document.createTextNode(input);
//     createP.appendChild(textInput);

//     let createButton = document.createElement("button");
//     let deleteText = document.createTextNode("Delete");
//     createButton.appendChild(deleteText);

//     let createEditButton = document.createElement("button");
//     let editText = document.createTextNode("Edit");
//     createEditButton.appendChild(editText);

//     let divContainer = document.createElement("div");
//     divContainer.appendChild(createP);
//     divContainer.appendChild(createButton);
//     divContainer.appendChild(createEditButton);

//     let createListItem = document.createElement("LI");
//     createListItem.appendChild(divContainer);

//     let list = document.getElementById("list");
//     list.appendChild(createListItem);
//     document.getElementById("txt").value = "";



//     // let list = document.getElementById("list");
//     // liText = document.createTextNode(input);
//     // let createList = document.createElement("LI");
//     // createList.appendChild(liText);
//     // let divText = document.createTextNode(input);
//     // let createDiv = document.createElement("P");
//     // createDiv.appendChild(divText);
//     // let btnText = 
// }



/*
function addLi(){
    let txt = document.getElementById("txt").value;
let list = document.getElementById("list");
let btn = document.createTextNode("delete");
let btnElement = document.createElement("button");
btnElement.appendChild(btn);

let pText = document.createTextNode(txt);
let pElement = document.createElement("paragraph");
pElement.appendChild(pText);

let creatDiv = document.createElement("Div");
creatDiv.appendChild(btnElement);
creatDiv.appendChild(pElement);

let creatLi = document.createElement("LI");
creatLi.appendChild(creatDiv);
list.appendChild(creatLi);
document.getElementById("")
document.getElementById("txt").value = "";
}
*/

//document.getElementById('btnAdd').addEventListener('click', addLi);

//Variable scope & function

// let username = 'john doe';

// let toUpperCase = function(name) { 
//     return name.toUpperCase();
// }

// let logUser = function() {
//     let username = 'lazarus hazard';

//     let logToUpperCase = function() {
        
//         toUpperCase(username);
//     }

//     logToUpperCase();
// }















