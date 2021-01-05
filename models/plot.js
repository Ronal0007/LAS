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
    plotSize: DataTypes.INTEGER,
    plotUse: DataTypes.STRING,
    regNumber: DataTypes.STRING,
    surveyNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plot',
  });
  return plot;
};