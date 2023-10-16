const express = require('express')
const app = express();
const mongoose = require('mongoose')
const nocache = require('nocache')
const http = require('http')
const server = http.createServer(app);
const cors = require('cors')
require('dotenv').config()

app.set('view engine','ejs');
app.set('views','./views')

app.get('/',(req,res)=>{
    res.render('login')
})
app.get('/register',(req,res)=>{
    res.render('registration')
})

const PORT = process.env.PORT || 8000;
server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});

mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error'))
db.once('open', () => {
    console.log("Database connected");
});