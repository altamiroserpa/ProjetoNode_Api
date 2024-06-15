'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [
      {
        title: 'Dom Casmurro',
        genre: 'Romance',
        authorId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Books', { title: 'Dom Casmurro' })

  }
};
