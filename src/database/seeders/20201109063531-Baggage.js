'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Baggage', [{
      userId: 1,
      type: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 1,
      type: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 2,
      type: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      type: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      type: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      userId: 3,
      type: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Baggage', null, {});
  }
};
