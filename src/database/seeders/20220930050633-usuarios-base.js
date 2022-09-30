'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([

      models.usuario.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          nombre: "Agustina",
          apellido: "Lanzini",
          email: "alanzini@gba.gob.ar"
        }
      }),

      models.usuario.findOrCreate({
        where: {
          id: "2"
        },
        defaults: {
          nombre: "Cosme",
          apellido: "Fulanito",
          email: "cosmefulanito@gmail.com"
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
