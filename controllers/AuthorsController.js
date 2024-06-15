'use strict'
const Authors = require('../models').Authors; 
require('dotenv').config();

module.exports = class AuthorsController {
    static async showAll(req, res) {
        try {
            const authors = await Authors.findAll(); 
            res.status(200).json({ 
                data: authors 
            });
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async show(req, res) {
        try {
            const author = await Authors.findByPk(req.params.id);
            if (!author) {
                res.status(404).json({
                    error: 'Autor não encontrado'
                });
                return;
            }
            res.status(200).json(author);
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async create(req, res) {
        try {
            const { firstName, lastName } = req.body;
            const newAuthor = await Authors.create({
                firstName,
                lastName
            });
            res.status(201).send("Autor Criado com Sucesso !!");
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async update(req, res) {
        try {
            const { firstName, lastName } = req.body;
            const author = await Authors.findByPk(req.params.id);
            if (!author) {
                res.status(404).json({
                    error: 'Autor não encontrado'
                });
                return;
            }
            await author.update({
                firstName,
                lastName
            });
            res.status(200).send("Autor atualizado com sucesso !");
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }

    static async delete(req, res) {
        try {
            const author = await Authors.findByPk(req.params.id);
            if (!author) {
                res.status(404).json({
                    error: 'Autor não encontrado'
                });
                return;
            }
            await author.destroy();
            res.status(200).send("Autor excluído com sucesso !");
        } catch (e) {
            res.status(500).json({
                error: e.message
            });
        }
    }
};

