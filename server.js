
const express=require("express")
const app = express();
const path = require('path')
const bodyparser=require('body-parser')
const empRoute=require('./api/emproutes.js')
const emp=require('./api/emp')

app.use(bodyparser.json())
app.use('/employee',empRoute)

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/data',(req,res)=>{
    res.json(emp)
})

//get static file
app.get('/static',(req,res)=>[
    res.sendFile(path.join(__dirname,'view.html'))
])


//create port
app.listen(3001,()=>{
    console.log("listening port 3001 . ");
})