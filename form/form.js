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
const passMustCharacter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,25}$/ 



btn.addEventListener("click", function () {
    const emailMustCharacter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let text = ""
    let missingInfo = ""
    validation = true;


    if(fname.value.length == 0 || lname.value.length == 0|| studentID.value.length == 0 ||email.value.length == 0 || password.value.length == 0 || cpassword.value.length == 0 ){
        missingInfo = "Some fields are empty."
    }
    if(fname.value.length <= 3){
        text += "First name should be more than 3 characters.\n"
        validation = false
    }
    if(fname.value.includes(" ")){
        text += "First name must not include spaces\n"
        validation = false
    }
    if(lname.value.includes(" ")){
        text += "Last name must not include spaces\n"
        validation = false
    }
    

    if(studentID.value.length <= 5){
        text += "Student ID should be more than 5 integer.\n"
        validation = false
    }

    if(email.value.match(emailMustCharacter)){
  
    }
    else{
        text += "Email syntax is wrong.\n"
        validation = false
    }
    if (updatedUserList != undefined ) {
        for ( let i = 0; i < updatedUserList.length; i++ ){
            if(updatedUserList[i].emailInfo === email.value){
                validation = false
                text += "User already exist with this email, try sign in.\n"
            } 
            if(updatedUserList[i].student_id === studentID.value){
                validation = false
                text += "User already exist with this Student ID, try sign in with your email.\n"
            }
        }
    }

    if (password.value.match(passMustCharacter)){
    }
    else{
        text += "Password syntax is wrong.\n"
        validation = false
    }

    if(cpassword.value != password.value ){
        text += "Password and confirm password does not match.\n"
        validation = false
    }
    if (validation === false){
        if(missingInfo === ""){
        alert(text)
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
        fname.value = ""
        lname.value = ""
        studentID.value = ""
        email.value = ""
        password.value = ""
        cpassword.value = ""
    }  
})
let signInTable = document.getElementById("#signInTable")
let h2 = document.createElement("h2")
let table1 = document.createElement("table")
let emailVerification = document.getElementById("#emailVerification");
let passwordVerification = document.getElementById("#passwordVerification");
let validation2 = true;

btn2.addEventListener("click", function(){
    table1.innerHTML = ""
    h2.innerHTML = ""
    validation2 = true
    let myBool = false;
    if (updatedUserList == undefined){
        alert("Local storage is empty, register first")
        validation2 = false
    }
    if((emailVerification.value.length == 0 || passwordVerification.value.length == 0) && updatedUserList != undefined){
        alert("Some fields are empty")
        validation2 = false
    }
    if(updatedUserList != undefined && validation2 == true){
        for ( let i = 0; i < updatedUserList.length; i++ ){
            if(updatedUserList[i].emailInfo === emailVerification.value){
                myBool = true;}}}
    if(emailVerification.value.length != 0 && passwordVerification.value.length != 0 && myBool == false){
        alert("Invalid email")
        validation2 = false
    }
   
    if(updatedUserList != undefined && validation2 == true){
        for ( let i = 0; i < updatedUserList.length; i++ ){
            if(updatedUserList[i].emailInfo === emailVerification.value){
                if(updatedUserList[i].passwordInfo === passwordVerification.value){
                    h2.classList.add("clear")
                    h2.textContent = "Your Information: "
                    signInTable.appendChild(h2)  
                    let tr1 = document.createElement("tr")
                    for(let j = 0; j < Object.keys(updatedUserList[i]).length; j++){                           
                        let td1 = document.createElement("td")
                        td1.textContent = Object.keys(updatedUserList[i])[j] + " = " + Object.values(updatedUserList[i])[j]
                        td1.classList.add("border")
                        tr1.appendChild(td1) 
                    }
                    table1.appendChild(tr1)
                    table1.classList.add("clear")
                    signInTable.appendChild(table1)
                    alert("Successfully signed in")
                    emailVerification.value = ""
                    passwordVerification.value = ""
                }
                else if(updatedUserList[i].passwordInfo != passwordVerification.value){
                    alert("Incorrect Password, change password to access information")
                }
            }
            
        }
    }
})

let emailRecovery = document.getElementById("#emailRecovery")

btn3.addEventListener("click", function () {
    let myBool3 = false;
    randomWord = Math.floor(Math.random() * 25)
    if(updatedUserList == undefined){
        alert("Local storage is empty, please register first")
    }
    else if(emailRecovery.value.length == 0){
        alert("Email field is empty")
    }
    else if(emailRecovery.value.length != 0 && updatedUserList != undefined){
        for ( let i = 0; i < updatedUserList.length; i++ ){
            if(updatedUserList[i].emailInfo == emailRecovery.value){
                alert("Access code is " + randomWord)
                myBool3 = true
            }
        }       
    }
    if(emailRecovery.value.length != 0 && updatedUserList != undefined && myBool3 === false){
        alert("Invalid email")
    }
    
})

let accessCode = document.getElementById("#accessCode")
let newPass = document.getElementById("#newPass")
let confirmNewPass = document.getElementById("#confirmNewPass")
btn4.addEventListener("click", function(){
    if(updatedUserList === undefined){
        alert("Local storage is empty, register first")
    }
    else if(emailRecovery.value.length === 0){
        alert("Enter your email first and get access code to change password")
    }
    else if(accessCode.value.length === 0){
        alert("Click on 'Get access code' to fill access code field and then fill out password fields")
    }
    else if(accessCode.value.length === 0 || newPass.value.length === 0 || confirmNewPass.value.length === 0){
        alert("Some fields are empty")
    }
    else if(parseInt(accessCode.value) == randomWord){
        if (newPass.value.match(passMustCharacter)){
            if(newPass.value == confirmNewPass.value){
                    for ( let i = 0; i < updatedUserList.length; i++ ){
                        if(updatedUserList[i].emailInfo === emailRecovery.value){
                            if(newPass.value != updatedUserList[i].passwordInfo){
                                updatedUserList[i].passwordInfo = newPass.value
                                userList = updatedUserList
                                localStorage.setItem("userList", JSON.stringify(userList))
                                alert("Password has been updated")
                                emailRecovery.value = ""
                                accessCode.value = ""
                                newPass.value = ""
                                confirmNewPass.value = ""
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
            alert("Wrong syntax for Password")
        }
    }
    else if(parseInt(accessCode.value) != randomWord && accessCode.value.length != 0){
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
        alert("All user data is down below")
    }
    else if (updatedUserList == undefined){
        alert("Localstorage is empty, please register first")
    }
})

btn7.addEventListener("click", function(){
    table2.innerHTML = ""
    h2v2.innerHTML = ""
})
