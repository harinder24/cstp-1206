let employeeData;
let updateEmployeeData;
let table = document.createElement('table')
$(document).ready(function () {
 
    $("#btn").click(function (event) { 
        let name = document.getElementById("#name");
        let email = document.getElementById("#email")
        let employeeID = document.getElementById("#employeeID");
        let department = document.getElementById("#department")
        let salary = document.getElementById("#salary")    
        event.preventDefault()
        if(name.value.length == 0 || email.value.length == 0 || employeeID.value.length == 0 || department.value.length == 0 || salary.value.length == 0){
            alert("Some fields are empty")
        }
        else if(isNaN(employeeID.value) || isNaN(salary.value)){
            alert("Employee id and salary must an integer")
        }
        else{
            employeeData = ""
            employeeData = {
                name : name.value,
                email : email.value,
                employeeID: employeeID.value,
                department : department.value,
                salary: salary.value
            }
            
            $.post("/employee", (employeeData),
            function(request) {
            if(request == true){
                alert("Employee already exist on this email or employee id")
            }
            else{
                alert("Employee added")
            } });      
        }
    });
    $("#btn1").click(function (event){
        let name = document.getElementById("#name");
        let email = document.getElementById("#email")
        let employeeID = document.getElementById("#employeeID");
        let department = document.getElementById("#department")
        let salary = document.getElementById("#salary")
        event.preventDefault()
        if(name.value.length == 0 || email.value.length == 0 || employeeID.value.length == 0 || department.value.length == 0 || salary.value.length == 0){
            alert("Some fields are empty")
        }
        else if(isNaN(employeeID.value) || isNaN(salary.value)){
            alert("Employee id and salary must an integer")
        }
        else{
            updateEmployeeData = ""
            updateEmployeeData = {
                name : name.value,
                email : email.value,
                employeeID: employeeID.value,
                department : department.value,
                salary: salary.value
            }
            $.ajax({
                url: '/'+ employeeID.value,
                method: 'PUT',
                dataType: 'json',
                data: (updateEmployeeData),
                success: function (result) {
                    if(result){
                        alert("Successfully updated")
                    }
                    else{
                        alert("Couldnt update double check employee id")
                    }
                }
            });
           
        }
    })
    $("#btn2").click(function (event){

        let employeeID = document.getElementById("#employeeID");

        event.preventDefault()
        if(employeeID.value.length == 0){
            alert("Employee id is empty")
        }
        else if(isNaN(employeeID.value)){
            alert("Employee id must an integer")
        }
        else{
            $.ajax({
                url: '/'+ employeeID.value,
                method: 'DELETE',
                dataType: 'json',
                success: function (result) {
                    if(result){
                        alert("Successfully deleted")
                    }
                    else{
                        alert("Couldnt delete double check employee id")
                    }
                }
            });
           
        }
    })
    $("#btn3").click(function (event){
        event.preventDefault()
        $.ajax({
            url: '/all/employees',
            method: 'GET',
            dataType: 'json',
            success: function (array) {
                 makeTable(array,table)
                 console.log(array);
             }
        });
    })
    $("#btn4").click(function (event){
        event.preventDefault();
        let employeeID = document.getElementById("#employeeID");
        if(employeeID.value.length == 0){
            alert("Employee id input is empty")
        }  
        else{
            $.ajax({
                url: '/employee/employeeID/'+employeeID.value,
                method: 'GET',
                dataType: 'json',
                success: function (array) {
                     makeTable(array,table)
                 }
            });
        }    
    })
    $("#btn5").click(function(event){
        event.preventDefault();
        let department = document.getElementById("#department");
        if(department.value.length == 0){
            alert("Department input is empty")
        }  
        else{
            $.ajax({
                url: '/department/departmentName/'+department.value,
                method: 'GET',
                dataType: 'json',
                success: function (array) {
                     makeTable(array,table)
                 }
            });
        }
    })
    $("#btn6").click(function (event){
        event.preventDefault()
        $.ajax({
            url: '/salaries/highest',
            method: 'GET',
            dataType: 'json',
            success: function (array) {
                 makeTable(array,table)
                 console.log(array);
             }
        });
    })  
    
        
        
});

function makeTable(array = [],table){
    let tr
    let td
  
    table.innerHTML = ""

        for (let i = 0; i < array.length; i++) {
            
            tr = table.appendChild(document.createElement('tr'));
            if(i === 0){
                for(let k = 0; k < Object.keys(array[i]).length; k++){
                    td = tr.appendChild(document.createElement('td'));
                    td.innerHTML = Object.keys(array[i])[k];
                    td.classList.add('border')
                }
                tr = table.appendChild(document.createElement('tr'));
            }
            
            for(let j = 0; j < Object.keys(array[i]).length; j++){
                td = tr.appendChild(document.createElement('td'));
                td.innerHTML = Object.values(array[i])[j];
                td.classList.add('border')
            }
            
        }
        table.classList.add('clear')
        document.getElementById('#table').appendChild(table);
}
