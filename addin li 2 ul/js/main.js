
    let body = document.getElementById('container');
    let headerContainer = document.getElementById('headerContainer');
    let addBtn = body.firstElementChild.firstElementChild.nextElementSibling;
    // console.log(addBtn);
    addBtn.setAttribute('id', 'addBtn');
    addBtn.addEventListener('click',addLi );

function addLi(){
    let textElement = document.getElementById("txt");
    let txt = textElement.value;
    console.log(checkMyInputTxt(txt));
    if(checkMyInputTxt(txt)){


    
        let list = document.getElementById("list");
        //let myText = "what is a default text";

        let body = document.getElementById('container');
        // let addBtn = body.firstElementChild.firstElementChild.nextElementSibling;
        // // console.log(addBtn);
        // addBtn.setAttribute('id', 'addBtn');
        // document.getElementById('addBtn').addEventListener('click', addLi);

        let createbtnDelete = document.createElement("button");
        let txtBtnDelete = document.createTextNode("Delete");
        createbtnDelete.appendChild(txtBtnDelete);
        createbtnDelete.classList.add("removeItem");
        createbtnDelete.addEventListener("click",deleteItem);

        let createEditBtn = document.createElement("button");
        let txtBtnEdit = document.createTextNode("Edit");
        createEditBtn.appendChild(txtBtnEdit);
        createEditBtn.setAttribute('class', 'editBtn');
        createEditBtn.addEventListener('click', editBtn);

        let createPara = document.createElement("p");
        let paraTxt = document.createTextNode(txt);
        createPara.appendChild(paraTxt);
        createPara.classList.add("myParagraph");
        // console.log(createPara);

        let newCreatePara = document.createElement("p");
        let newParaTxt = document.createTextNode('');
        newCreatePara.appendChild(newParaTxt);
        // newCreatePara.classList.add('styleParagraph');
        // console.log(newCreatePara);

        let creatDiv = document.createElement("div");
        creatDiv.classList.add('itemContainer');
        // console.log(creatDiv);
        creatDiv.appendChild(createbtnDelete);
        creatDiv.appendChild(createEditBtn);
        creatDiv.appendChild(createPara);
        creatDiv.appendChild(newCreatePara);
        
        let creatLi = document.createElement("LI");
        creatLi.classList.add('myListStyle');   
        creatLi.appendChild(creatDiv);
        
        list.appendChild(creatLi);
        // let myValue = document.getElementById("txt").value;
        // function validation call here...
        document.getElementById("txt").value = "";
    }else{
        alert("Please fill the form correctly!!")
    }
}

function deleteItem(event){
    creatLi = event.target.parentNode.parentNode;
    console.log(list);
    creatLi.parentNode.removeChild(creatLi);
    }


function editBtn(event){
    let parentNodeEdit = event.target.parentNode.parentNode;
    // console.log(parentNodeEdit);
    let editParagraph = parentNodeEdit.firstElementChild.lastElementChild.previousElementSibling;
    console.log(editParagraph.textContent);
    newIdAttribute = document.getElementById('test');
    if(newIdAttribute){
        newIdAttribute.removeAttribute('id');
        editParagraph.setAttribute('id', 'test');
    }else{
        editParagraph.setAttribute('id', 'test');
    }
    document.getElementById('input').value = editParagraph.textContent;
    
      let modalDisplay = document.getElementById('modalDisplay');
      if(modalDisplay.classList.contains('not-active')){
          modalDisplay.classList.remove("not-active");
      }else{
          modalDisplay.classList.add('not-active');
      }  
}

let submitEditTxt = document.getElementById('submitBtn');
submitEditTxt.addEventListener('click', submitButton);

function submitButton(event){
    let newIdAttribute = document.getElementById('test');
    //newIdAttribute.textContent;
    //console.log(newIdAttribute);
    var input = document.getElementById('input').value;
    newIdAttribute.textContent = input;
    // console.log(input);
}


let closeBtn = document.getElementById('closeBtn');

closeBtn.addEventListener('click', displayForm);

let spanClose = document.getElementById('spanClose');
spanClose.addEventListener('click', displayForm);


//Re-usable function dispaly toggle
function displayForm(){
    let modalDisplay = document.getElementById('modalDisplay');
    if(modalDisplay.classList.contains('not-active')){
        modalDisplay.classList.remove("not-active");
    }else{
        modalDisplay.classList.add('not-active');
    }  
}
// my function validation code

function checkMyInputTxt(value){
    if(value === "" || (isNaN(value) == false)){
        // alert('Please kindly fill in a task');
        console.log(typeof parseInt(value))
        return false;
    }else{
        return true;
    }
}





