const express = require("express")
const app = express()



app.get('/',function (req,res){
    res.send('api')

})

app.get('/ptbr',function (req,res){
    res.send('olá mundo')

})

app.get('/es',function (req,res){
    res.send('hola')

})

app.get('/eg',function (req,res){
    res.send('Hello World')

})

// app.get('/oi',function (req,res){
//    res.send('hello world')    
// })

app.listen(3000)