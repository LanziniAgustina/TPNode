'use strict';

const models = require('../models/index')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.addColumn('libro', 'autor', {
        type: Sequelize.STRING,
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
