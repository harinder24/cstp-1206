const express = require('express');
const app = express();
const path = require('path')
const PORT = 4000;
const employee = [];

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({ extended: true }))



        
app.post("/request", (req, res) => {
    const employeeInfo = req.body
    employee.push(employeeInfo) 
})

app.get('/result', (req, res) => {
    const data = res.status(200);
    return data.json(employee);   
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})