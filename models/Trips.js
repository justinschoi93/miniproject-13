const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    traveler_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "traveler",
        key: "id",
        unique: false,
      },
    },
    location_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "location",
        key: "id",
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "trips",
  }
);

module.exports = Trips;
