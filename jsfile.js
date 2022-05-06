
// // // function validate_name(){
// // //     let name1=document.getElementById("name").value;
// // //     const dikhana=document.getElementById("dikha");
// // //     if(name1 === ""){
        
// // //         const pro=document.createElement("p");
// // //         const prot=document.createTextNode("andha hai kya lode")
// // //         pro.append(prot);
// // //         dikhana.append(pro);

// // //     }
// // // }
// const nameContainer=document.getElementById("name-container");
// let userName = document.getElementById("name");
// let userNameVal =userName.value;
// let userEmail=document.getElementById("email");
// let userEmailVal=userEmail.value;
// let userMobile =document.getElementById("mob");
// let userMobileVal=userMobile.value;

// function nameValid(){
//     if(nameContainer.contains(document.getElementById("remo"))){
//         const parag=document.getElementsByClassName("remo");
//         parag.remove();
//     }

     
//  else if(userNameVal ===""){
    
    
//     const newEle=document.createElement("p");
//     const eleText=document.createTextNode("Please Fill This feild");
//     newEle.append(eleText);
//     nameContainer.append(newEle);
//     newEle.classList.add("text-danger");
//     newEle.classList.add("remo");
    
//     return false;
//     }
//     return true;
// }



// name validation
let userName=document.getElementById("name");

function nameValid(){
    var reg = /^[A-Za-z\'\s\.\,]+$/;

    if(userName.value == ""){
    alert("please fill name field");
    return false;
    }
    else if(userName.value.length>20){
        alert("you have exceeded limit of 20 letters");
        return false;
    }
    else if(!isNaN(userName.value)){
        alert("Name should contain only alphabets");
        return false;

    }
    else if(!reg.test(userName.value)){
        alert("special characters not allowed");
        return false;
    }
    else{
        return true;
    }
}

// Email validation

let userEmail = document.getElementById("email");
function emailValid(){
    const reg= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(userEmail.value==""){
        alert("please fill Email field");
        return false;
    }
   
    else if(!reg.test(userEmail.value)){
    alert("please enter a valid email");
    return false;
     }
    else{
        return true;
    }
}






// phone nullmber validation


let userMobile =document.getElementById("mob");

function mobileValid(){
    if(userMobile.value == ""){
        
        return true;
    }
    else if(userMobile.value.length != 10){
        alert("Please enter 10 digit mobile number");
        return false;

    }
    else if(isNaN(userMobile.value)){
        alert("please enter only numeric value");
        return false;
    }
    else{
        return true;
    }
}

// saving data to local storage

function storeLocal(){
    localStorage.setItem("Name",userName.value);
    localStorage.setItem("Email",userEmail.value);
    localStorage.setItem("Mobile",userMobile.value);
    let para=document.getElementById("dataGet");
    getLocalData();
    // para.textContent=localStorage.getItem("Name");
}

// collective funtion mobile and stuffs

// getting data from local storage
function getLocalData(){
    let rowEntry= document.createElement("tr");
    let mainTable=document.getElementById("tableMain");
    
    // first column
    let col1=document.createElement("td");
    let data1= document.createTextNode(localStorage.getItem("Name"));
    col1.append(data1);
    rowEntry.append(col1);
    
    //second Column
    let col2=document.createElement("td");
    let data2= document.createTextNode(localStorage.getItem("Email"));
    col2.append(data2);
    rowEntry.append(col2);

    // Third column
    let col3=document.createElement("td");
    let data3= document.createTextNode(localStorage.getItem("Mobile"));
    col3.append(data3);
    rowEntry.append(col3);
    mainTable.append(rowEntry);

    document.getElementById("reForm").reset();

}


function totalValid(){
    if(nameValid() && (emailValid() && mobileValid())){
        storeLocal();
        return true;
    }
    else{
        return false;
    }
}
