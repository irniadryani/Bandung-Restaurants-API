"use strict";

const { DataTypes, Model } = require("sequelize");
const sequelize = require("../config/database.js");

class Restaurant extends Model {
  static associate(models) {
    // define association here
  }
}

Restaurant.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price_range: {
      type: DataTypes.STRING,
    },
    open_time: {
      type: DataTypes.TIME,
    },
    close_time: {
      type: DataTypes.TIME,
    },
    is_smoking_allowed: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    is_halal: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    deletedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    modelName: "Restaurant",
    tableName: "restaurants",
    timestamps: true,
    paranoid: true, 
  }
);

module.exports = Restaurant;