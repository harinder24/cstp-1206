const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
app.use(express.json());
let employeeList = [
    {
    id: 1,
    name: "Mike",
    email: "mike@company.ca",
    employeeID: 100,
    department: "IT",
    salary: 100000
    },
    {
    id: 2,
    name: "Daniel",
    email: "daniel@company.ca",
    employeeID: 101,
    department: "HR",
    salary: 50000
    }
    ]

app.get("/employees", (req, res) => {
    const data = res.status(200)
    return data.json(employeeList)
})

// first way - in a single get req , not effecient as if deparment has identical id as employee id, its causes prob

// app.get("/employees/:id", (req, res) => {   
//     const id = req.params.id;
//     let outputArr = []
//     const data = res.status(200)
//     for (let i = 0 ; i < employeeList.length; i++) {
//         if (employeeList[i].employeeID === Number(id)) {  
//             return data.json(employeeList[i])   
//         }
//         else if(employeeList[i].department === id) {
//             outputArr.push(employeeList[i])
//         }
//     }
//     return data.json(outputArr)
// })

// second way its just safer

app.get("/employees/employeeID/:id", (req, res) => {

    const id = req.params.id;
    let outputArr = []
    const data = res.status(200)
    for (let i = 0 ; i < employeeList.length; i++) {
        if (employeeList[i].employeeID == Number(id)) {  
            outputArr.push(employeeList[i]) 
        
        }
        
    }
    return data.json(outputArr)
    
})
app.get("/employees/department/:id", (req, res) => { 
    const id = req.params.id;
    let outputArr = []
    const data = res.status(200)
    for (let i = 0 ; i < employeeList.length; i++) {
        if(employeeList[i].department == id) {
            outputArr.push(employeeList[i])
        }
    }
    return data.json(outputArr)
})

app.post("/employees", (req, res) => {
    const data = req.body;
    if (!data.id || !data.name || !data.email || !data.employeeID || !data.department || !data.salary) { // salary is in lowercase
        return res.status(500).json({
            message: "Missing some info and salary must be in lowercase"
        })
    }
    employeeList.push(data);
    return res.status(201).json({
        message: "Succesfully created the employee info",
        data: employeeList
    })
})

app.put("/employees/:employeeID", (req, res) => {
    const id = req.params.employeeID;
    const update = req.body;

    if (!update.id || !update.name || !update.email || !update.department || !update.employeeID || !update.salary) {
        return res.status(500).json({
            message: "One of the parameters is missing"
        })
    }
    employeeList = employeeList.map((post) => {
        if (post.employeeID == Number(id)) {
            post = update;
        }

        return post;
    })
    return res.status(200).json({
        message: "Succesfully updated the employee info",
        data: employeeList
    })
})
app.delete("/employees/:employeeID", (req,res) => {

    const id = req.params.employeeID;

    const index = employeeList.findIndex((employee) => {
        if (employee.employeeID == Number(id)) {
            return true;
        }
    })

    if (index !== -1) {
        employeeList.splice(index, 1);

        return res.status(200).json({
            message: "Succesfully deleted the empoyee info",
            data: employeeList
        })
    
    } else {
        return res.status(404).json({
            message: "Element you are trying to delete doesn't exist"
        })
    }

})
app.get("/employees/salaries/highest", (req, res) => {
    let salaryList = employeeList
    salaryList.sort((a, b) => {
        return b.salary - a.salary;
    });
    const data = res.status(200)
    return data.json(salaryList)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})
    