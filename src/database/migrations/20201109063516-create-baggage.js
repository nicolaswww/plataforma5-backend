'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.createTable('Baggage', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        userId: {
          type: Sequelize.INTEGER
        },
        type: {
          type: Sequelize.INTEGER
        },
        status: {
          type: Sequelize.INTEGER,
          defaultValue: 1
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),
      await queryInterface.addConstraint('Baggage', {
        fields: ['userId'],
        type: 'FOREIGN KEY',
        name: 'FK_Baggage_User_1',
        references: {
          table: 'Users',
          field: 'id'
        },
        onDelete: 'no action',
        onUpdate: 'no action'
      })
    ];
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Baggage');
  }
};
