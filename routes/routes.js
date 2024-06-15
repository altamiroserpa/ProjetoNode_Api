const express = require('express')
const router = express.Router()
const path = require('path')


const BooksController = require('../controllers/BooksController')
router.get('/books', BooksController.showAll)
router.get('/books/:id', BooksController.show)
router.post('/books', BooksController.create)
router.put('/books/:id', BooksController.update)
router.delete('/books/:id', BooksController.delete)


const AuthorsController = require('../controllers/AuthorsController')
router.get('/authors', AuthorsController.showAll)
router.get('/authors/:id', AuthorsController.show)
router.post('/authors', AuthorsController.create)
router.put('/authors/:id', AuthorsController.update)
router.delete('/authors/:id', AuthorsController.delete)


router.get ('/',(req, res)=> {
    res.send ("ola bom dia ")
})
router.get ('/pagina',(req, res)=> {
    res.sendFile(path.resolve('./public/pagina.html'))
})
router.use (function (req, res, next){    // tem que ser a ultima rota !!!!!
    //res.status(404).send ("Erro 404")
    res.status(404).sendFile(path.resolve('./public/404.html'))
})

module.exports = router