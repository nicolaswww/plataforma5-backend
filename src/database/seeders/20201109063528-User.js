'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      name: 'John Doe',
      flight: 'AR662',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Carlos Rafael',
      flight: 'PT223',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jhon Doe',
      flight: 'AA093',
      status: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
