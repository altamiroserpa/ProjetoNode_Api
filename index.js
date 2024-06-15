require('dotenv').config()
const express = require ('express')
const path = require ('path')
const app = express ()

app.use(express.urlencoded({extended: true})) // aceitar requisições com formularios e de corpo
app.use(express.json()) // aceitar requisiçõe com json

//const port = 3000
const routes = require('./routes/routes.js')

app.use (express.static('public'))
app.use ('/', routes)

//app.listen (port, ()=> {
app.listen (process.env.PORT, ()=> {     
      console.log (`App prodando na porta ${process.env.PORT}`)
})

// http://localhost:3000/ 