let fname = document.getElementById("#fname");
let lname = document.getElementById("#lname");
let studentID = document.getElementById("#studentID")
let email = document.getElementById("#email");
let password = document.getElementById("#password");
let cpassword = document.getElementById("#cpassword");
let randomWord;

let validation = true;
let userList = []
let updatedUserList;
const passMustCharacter1 = /[a-z]/g;
const passMustCharacter2 = /[A-z]/g;
const passMustCharacter3 = /[0-9]/g;
const passMustCharacter4 =  /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;


btn.addEventListener("click", function () {
    const emailMustCharacter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let fnameLengthCheck = ""
    let lnameLengthCheck = ""
    let studentIDCheck = ""
    let emailCheck = ""
    let nanCheck = ""
    let passwordCheck = ""
    let passwordIdenticalCheck = ""
    let missingInfo = ""
    let duplicateEmail = ""
    let duplicateID = ""
    validation = true;


    if(fname.value.length == 0 || lname.value.length == 0|| studentID.value.length == 0 ||email.value.length == 0 || password.value.length == 0 || cpassword.value.length == 0 ){
        missingInfo = "Some fields are empty."
    }
    if(fname.value.length <= 3){
        fnameLengthCheck = "First name should be more than 3 characters.\n"
        validation = false
    }
    
    if(lname.value.length <= 3){
        lnameLengthCheck = "Last name should be more than 3 characters.\n"
        validation = false
    }
    if (Number.isInteger(parseInt(studentID.value))){
    }
    else{
        nanCheck = "Student ID must be a number\n"
        validation = false
    }
    if(studentID.value.length <= 5){
        studentIDCheck = "Student ID should be more than 5 integer\n"
        validation = false
    }


    if(email.value.match(emailMustCharacter)){
  
    }
    else{
        emailCheck = "Email syntax is wrong.\n"
        validation = false
    }
    if (updatedUserList != undefined ) {
        for ( let i = 0; i < updatedUserList.length; i++ ){
            if(updatedUserList[i].emailInfo === email.value){
                validation = false
                duplicateEmail = "User already exist with this email, try sign in \n"
            } 
            if(updatedUserList[i].student_id === studentID.value){
                validation = false
                duplicateID = "User already exist with this Student ID, try sign in with your email\n"
            }
        }
    }

    if (password.value.match(passMustCharacter1) && password.value.match(passMustCharacter2) && password.value.match(passMustCharacter3) && password.value.match(passMustCharacter4) && password.value.length > 7){
    }
    else{
        passwordCheck = "Password syntax is wrong.\n"
        validation = false
    }

    if(cpassword.value != password.value ){
        passwordIdenticalCheck = "Password and confirm password does not match.\n"
        validation = false
    }
    if (validation === false){
        if(missingInfo === ""){
        alert(fnameLengthCheck + lnameLengthCheck + nanCheck + studentIDCheck + duplicateID + duplicateEmail +emailCheck + passwordCheck + passwordIdenticalCheck)
        }
        else{
            alert(missingInfo)
        }
    }
    else{
        let userData = {
            firstName: fname.value,
            lastName: lname.value,
            student_id: studentID.value,
            emailInfo: email.value,
            passwordInfo: password.value
        }
        userList.push(userData)
        localStorage.setItem("userList", JSON.stringify(userList));
        updatedUserList = JSON.parse(localStorage.getItem("userList"))
        alert("Registration Complete")
    }  
})
let signInTable = document.getElementById("#signInTable")
let h2 = document.createElement("h2")
let table1 = document.createElement("table")
let emailVerification = document.getElementById("#emailVerification");
let passwordVerification = document.getElementById("#passwordVerification");
let validation2 = true;
let firstNameOutput = ""
let lastNameOutput = ""
let studentIDOutput = ""
let emailOutput = ""
let passwordOutput = ""
btn2.addEventListener("click", function(){
    table1.innerHTML = ""
    h2.innerHTML = ""
    validation2 = true
    let myBool = false;
    if(emailVerification.value.length == 0 || passwordVerification.value.length == 0){
        alert("Some fields are empty")
        validation2 = false
    }
    if(updatedUserList != undefined && validation2 == true){
        for ( let i = 0; i < updatedUserList.length; i++ ){
            if(updatedUserList[i].emailInfo === emailVerification.value){
                myBool = true;
                if(updatedUserList[i].passwordInfo === passwordVerification.value){
                    firstNameOutput = updatedUserList[i].firstName
                    lastNameOutput = updatedUserList[i].lastName
                    studentIDOutput = updatedUserList[i].student_id
                    emailOutput = updatedUserList[i].emailInfo
                    passwordOutput = updatedUserList[i].passwordInfo
                }
                else if(updatedUserList[i].passwordInfo != passwordVerification.value){
                    alert("Incorrect Password, change password to access information")
                    validation2 = false
                }
            }
            
        }
    }
    if(emailVerification.value.length != 0 && passwordVerification.value.length != 0 && myBool == false){
        alert("Invalid email")
        validation2 = false
    }
    else if (updatedUserList == undefined && validation2 == true){
        alert("Local storage is empty, register first")
    }
    if(validation2 == true){

        let signInArr = [firstNameOutput,lastNameOutput,studentIDOutput,emailOutput,passwordOutput]
        let outputNames = ["First Name", "Last Name", "Student Id" ,"Email", "Password"]

        h2.classList.add("clear")
        h2.textContent = "Your Information: "
        signInTable.appendChild(h2)

        let tr1 = document.createElement("tr")
        for (let i = 0; i < signInArr.length; i++){
            let td1 = document.createElement("td")
            td1.textContent = outputNames[i] + " = " + signInArr[i]
            td1.classList.add("border")
            tr1.appendChild(td1)           
        }
        table1.appendChild(tr1)
        table1.classList.add("clear")
        signInTable.appendChild(table1)
    }

})

let emailRecovery = document.getElementById("#emailRecovery")

btn3.addEventListener("click", function () {
    randomWord = Math.floor(Math.random() * 25)
    if(emailRecovery.value.length == 0){
        alert("Email field is empty")
    }
    else if(emailRecovery.value.length != 0 && updatedUserList != undefined){
        for ( let i = 0; i < updatedUserList.length; i++ ){
            if(updatedUserList[i].emailInfo == emailRecovery.value){
                alert("Access code is " + randomWord)
            }

        }
        
    }
    else if(emailRecovery.value.length != 0 && updatedUserList == undefined){
        alert("Local storage is empty, please register first")
    }
})

let accessCode = document.getElementById("#accessCode")
let newPass = document.getElementById("#newPass")
let confirmNewPass = document.getElementById("#confirmNewPass")
btn4.addEventListener("click", function(){
    if(accessCode.value.length === 0 || accessCode.value.length === 0 || confirmNewPass.value.length === 0){
        alert("Some fields are empty")
    }
    if(parseInt(accessCode.value) == randomWord){
        if (newPass.value.match(passMustCharacter1) && newPass.value.match(passMustCharacter2) && newPass.value.match(passMustCharacter3) && newPass.value.match(passMustCharacter4) && newPass.value.length > 7){
            if(newPass.value == confirmNewPass.value){
                    for ( let i = 0; i < updatedUserList.length; i++ ){
                        if(updatedUserList[i].emailInfo === emailRecovery.value){
                            if(newPass.value != updatedUserList[i].passwordInfo){
                                updatedUserList[i].passwordInfo = newPass.value
                                userList = updatedUserList
                                localStorage.setItem("userList", JSON.stringify(userList))
                                alert("Password has been updated")
                            }
                            else{
                                alert("You can't use previous password")
                            }
                        }
                    }
            }
            else{
                alert("New and confirm password doest not match")
            }
        }
        else{
            alert("Wrong syntax for email")
        }
    }
    else{
        alert("Wrong access code")
    }

})

btn5.addEventListener("click", function(){
    table1.innerHTML = ""
    h2.innerHTML = ""
})
let outputTable = document.getElementById("#outputTable")
let h2v2 = document.createElement("h2")
let table2 = document.createElement("table")
btn6.addEventListener("click", function(){  
    table2.innerHTML = ""
    h2v2.innerHTML = ""
    if(updatedUserList != undefined){  
        h2v2.classList.add("clear")
        h2v2.textContent = "User's Information: "
        outputTable.appendChild(h2v2)  
        for(let i = 0; i < updatedUserList.length; i++){
            let tr2 = document.createElement("tr")
            for(let j = 0; j < Object.keys(updatedUserList[i]).length; j++){
                let td2 = document.createElement("td")
                td2.textContent = Object.keys(updatedUserList[i])[j] + " = " + Object.values(updatedUserList[i])[j]
                td2.classList.add("border")
                tr2.appendChild(td2) 
            }
            table2.appendChild(tr2)
            table2.classList.add("clear")
        }
        outputTable.appendChild(table2)
    }
    else if (updatedUserList == undefined){
        alert("Localstorage is empty, please register first")
    }
})

btn7.addEventListener("click", function(){
    table2.innerHTML = ""
    h2v2.innerHTML = ""
})