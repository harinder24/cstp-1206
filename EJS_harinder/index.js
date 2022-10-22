const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
let customerInfo;

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");


app.post("/request", (req, res) => {
    customerInfo = req.body;
    console.log(customerInfo);
})

app.get('/result', (req,res)=>{

    res.render('home.ejs',customerInfo);
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
