'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Baggage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Baggage.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  };
  Baggage.init({
    userId: DataTypes.INTEGER,
    type: DataTypes.INTEGER,
    status: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Baggage',
  });
  return Baggage;
};
