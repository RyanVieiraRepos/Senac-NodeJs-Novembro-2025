const express = require("express")
const app = express()
app.use(express.json())

const marvel = ["Homem Aranha", "Capitã Marvel", "Homem de ferro"]




app.post('/herois', function(req,res){
    let novoHeroi = req.body.nome
    marvel.push(novoHeroi)
    res.send('ok')
})


app.get('/herois', function (req, res) {
    res.send(marvel)

})



app.get('/marvel/:id', function (req, res) { // pegando o do objeto req, o 
    const id = req.params.id
    res.send(marvel[id - 1])

})





// app.get('/oi',function (req,res){
//    res.send('hello world')    
// })

app.listen(3000)