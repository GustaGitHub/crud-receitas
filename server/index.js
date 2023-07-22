//Dependecies
var port = 8080;
var express = require('express');
var app = express()
var cors = require('cors')
var mongoose = require('mongoose')
  
//Models
var Revenue = require('./models/revenue')
 
//Configuration 
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .catch(err => console.error("Falha ao Realizar conexão com Banco de Dados \n " + err));

app.post("/revenue", async (req, res) => {
    console.log(req.body)
    var {description, title} = req.body;

    if(description.length <= 0 || title.length <= 0 )
        res.sendStatus(400);
 
    Revenue.create({
        id:  new mongoose.Types.ObjectId,
        title: title,
        description: description,
        date: new Date() 
    })
    .then(() => res.sendStatus(200))
    .catch((err => {
        console.log(new Date().toLocaleString() + "=>" + err)
        res.sendStatus(500)
    }))
})

app.get("/revenues", async (req, res) => {
    await Revenue.find()
    .then((response) => res.send(response))
    .catch((err) => {
        console.log(err)
        res.sendStatus(500);
    });
})

app.get("/revenue/:id", async (req, res) => {
    if(req.params.id.length <= 0 || req.params.id === null)
        res.sendStatus(400);

    await Revenue.findOne({id: req.params.id.toString()})
    .then((response) => res.send(response))
    .catch((err) => {
        res.sendStatus(500)
        console.log(err)
    }) 
})

/*
    app.put()
    app.delete()
*/ 

console.clear();
app.listen(port, () => console.log(`Servidor Rodando em localhost:${port}`))
