const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
      id: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true,
      autoIncrement: true
    },

    // set relationship with Products
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product', // Can be both a string representing the table name, or a reference to the model
        key:   'id'
      },
    },


    // set relationship with Products
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Tag', // Can be both a string representing the table name, or a reference to the model
        key:   'id'
      },
    },


  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
