'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  plot.init({
    plotNumber: DataTypes.INTEGER,
    plotSize: DataTypes.STRING,
    plotUseId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER,
    locationId: DataTypes.INTEGER,
    blockId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'plot',
  });
  return plot;
};