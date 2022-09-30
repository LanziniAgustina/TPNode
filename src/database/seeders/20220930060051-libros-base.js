'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([

      models.libro.findOrCreate({
        where: {
          cod: "1"
        },
        defaults:{
          titulo: "Tokio blues",
          editorial: "tusquets",
          ISBN: "978-987-1210-19-0",
          coleccion: "andanzas"
        }
      }),

      models.libro.findOrCreate({
        where: {
          cod: "2"
        },
        defaults:{
          titulo: "Ubik",
          editorial: "minotauro",
          ISBN: "978-84-450-0027-4",
          coleccion: "Biblioteca Philip K. Dick"
        }

      })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
