const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
let employeeInfo = [];
let mybool;
let mybool2;
let mybool3;
let incomingEmployeeInfo;
let num = 1
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({ extended: true }))
 app.set("view engine", "ejs");
    
app.post("/employee", (req, res) => {
    mybool = false
    incomingEmployeeInfo = req.body
    for(let i = 0; i < employeeInfo.length; i++){
        if(employeeInfo[i].employeeID == incomingEmployeeInfo.employeeID){
            mybool = true
        }
        else if(employeeInfo[i].email == incomingEmployeeInfo.email){
            mybool = true
        }
    }
    if(mybool === false){
        if(employeeInfo.length === 0){
            incomingEmployeeInfo.id = num
        }
        else{
            num++
            incomingEmployeeInfo.id = num
        }
        employeeInfo.push(incomingEmployeeInfo)
        incomingEmployeeInfo = null
    }
    console.log(employeeInfo);
    return res.status(200).json(mybool)
})
app.put("/:employeeID", (req, res) =>{
    mybool2 = false
    const id = req.params.employeeID;
    const update = req.body;
    employeeInfo = employeeInfo.map((post) => {
        if (post.employeeID == Number(id)) {
            let oldID = post.id
            post = update;
            post.id = oldID
            mybool2 = true
        }
        return post;
    })
    return res.status(200).json(mybool2)
})
app.delete("/:employeeID", (req, res) =>{
    mybool3 = false
    const id = req.params.employeeID;
    const index = employeeInfo.findIndex((employee) => {
        if (employee.employeeID == Number(id)) {
            return true;
        }
    })

    if (index !== -1) {
        employeeInfo.splice(index, 1);
        mybool3 = true
        return res.status(200).json(mybool3)
    } else {
        return res.status(404).json(mybool3)
    }
})
app.get("/employee/employeeID/:id", (req, res) => {

    const id = req.params.id;
    let outputArr = []
    const data = res.status(200)
    for (let i = 0 ; i < employeeInfo.length; i++) {
        if (employeeInfo[i].employeeID == Number(id)) {  
            outputArr.push(employeeInfo[i]) 
        
        }
        
    }
    return data.json(outputArr)
    
})
app.get("/department/departmentName/:id", (req, res) => { 
    const id = req.params.id;
    let outputArr = []
    const data = res.status(200)
    for (let i = 0 ; i < employeeInfo.length; i++) {
        if(employeeInfo[i].department == id) {
            outputArr.push(employeeInfo[i])
        }
    }
    return data.json(outputArr)
    
})
app.get("/all/employees", (req, res) => {
    const data = res.status(200)
    return data.json(employeeInfo)
})
app.get("/salaries/highest", (req, res) => {
    let salaryList = employeeInfo
    salaryList.sort((a, b) => {
        return b.salary - a.salary;
    });
    const data = res.status(200)
    return data.json(salaryList)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
