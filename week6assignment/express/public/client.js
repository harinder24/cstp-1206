// const button = document.getElementById('btn')
// button.addEventListener("click", function (event) {
//     event.preventDefault()
//     let name = document.getElementById("#name");
//     let employeeID = document.getElementById("#employeeID");
//     let email = document.getElementById("#email")
//     let department = document.getElementById("#department");
    
//     if(name.value.length == 0 || employeeID.value.length == 0|| department.value.length == 0 ||email.value.length == 0){
//         alert("Some fields are empty")
//     }
//     else{
//         alert("success")
//         let employeeData = {
//             name : name.value,
//             employeeID : employeeID.value,
//             email : email.value,
//             department : department.value
//         }
//         exports.userArr =  function () {
//             return employeeData
//         }

//     }
// })
let employeeData
$(document).ready(function () {
    $("#btn").click(function (event) {
        event.preventDefault()
        let name = document.getElementById("#name");
        let employeeID = document.getElementById("#employeeID");
        let email = document.getElementById("#email")
        let department = document.getElementById("#department");

        if(name.value.length == 0 || employeeID.value.length == 0|| department.value.length == 0 ||email.value.length == 0){
            alert("Some fields are empty")
        }
        else{
            alert("success")
            employeeData = ""
            employeeData = {
                name : name.value,
                employeeID : employeeID.value,
                email : email.value,
                department : department.value
            }
            
            $.post("/request", (employeeData),
            function(request) { console.log(request); });
    
        }
        
       
    });
 });