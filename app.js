const express = require('express')
const app = express()
const port = 8000

app.set('view engine','ejs');
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('login')
})
app.get('/register',(req,res)=>{
    res.render('registration')
})
app.listen(port, ()=>{
    console.log("server is running @ http://localhost:8000")
})