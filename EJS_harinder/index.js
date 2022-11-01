const express = require('express');
const app = express();
const path = require('path');
const PORT = 5000;
let customerInfo;
let output = [
{link: "<a href='https://www.facebook.com/'><img src='https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZWJvb2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' width= '40px'"},
{link: "<a href='https://www.instagram.com/'><img src='https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5zdGFncmFtfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' width= '40px'"},
{link: "<a href='https://www.snapchat.com/'><img src='https://images.unsplash.com/photo-1611162617263-4ec3060a058e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' width= '40px'"}]

app.use(express.json());
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({ extended: true }))
app.set("view engine", "ejs");


app.post("/request", (req, res) => {
    customerInfo = req.body;
    console.log(customerInfo);
})

app.get('/result', (req,res)=>{

    res.render('home.ejs',{link: output, user: customerInfo, gmail:'<a href="https://mail.google.com/mail/">Confirm your email</a>', img1:'<img src="https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="" width="80px">',img2: '<img src="https://media.istockphoto.com/photos/paper-cut-human-head-shape-and-puzzle-brain-picture-id1294191109?b=1&k=20&m=1294191109&s=170667a&w=0&h=bCDip_-1PQ68Ovu0rItExjWX5TWcfO73GBiLLNBks9w=" alt="" width="200px">'});
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
