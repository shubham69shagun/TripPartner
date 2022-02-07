const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require("./db/conn");

const User = require("./models/user");
const path = require('path');


const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}));



app.use(express.static(path.join(__dirname,'../public')));


app.get('/register',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/login.html'));
})

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
})

app.post('/register',(req,res)=>{
    const user = new User(req.body)
    user.save().then(()=>{
        res.redirect('/');
    }).catch((e)=>{
        console.log(e)
    })
    
})

app.post('/login',async (req,res)=>{
    const email = req.body.email
    const pass = req.body.pswd
    const useremail =await User.findOne({email:email});
    if(pass === useremail.pswd){
        res.redirect('/');
    }
    else{
        res.redirect('/register')
    }
    
})


app.listen(port,()=>{
    console.log('server is up');
})

