'use strict'
const { Books } = require('../models')
require('dotenv').config()

module.exports = class BooksController {
    static async showAll(req, res) {
        try {
            const books = await Books.findAll()
            res.status(200).json({ 
                data: books 
            })
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    }

    static async show(req, res) {
        try {
            const books = await Book.findByPk(req.params.id)
            res.status(200).send(books)
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    }

    static async create(req, res) {
        try {
            const books = await Books.create({
                title: req.body.title,
                genre: req.body.genre,
                authorId: req.body.authorId
            })
            res.status(201).send("Livro Criado com Sucesso !!")
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    }

    static async update(req, res) {
        try {
            const books = await Books.findByPk(req.params.id)
            const result = await Books.create({
                title: req.body.title,
                genre: req.body.genre,
                authorId: req.body.authorId
            })
            res.status(200).send("Livro Atualizado com Sucesso !!");
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    }

    static async delete(req, res) {
        try {
            const books = await Books.findByPk(req.params.id)
            await Books.destroy();
            res.status(200).send("Excluido com Sucesso.")
        } catch (e) {
            res.status(500).json({ 
                error: e.message 
            })
        }
    }
}