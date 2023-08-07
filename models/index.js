// import models
const Location = require("Location.js");
const Traveler = require("Traveler.js");
const Trips = require("Trips.js");

// Categories have many Products
Traveler.hasMany(Location, {
    foreignKey: "traveler_id",
    onDelete: "CASCADE",
});

// Products belongToMany Tags (through ProductTag)
Location.belongsToMany(Traveler, {
    foreignKey: "location_id",
    onDelete: "CASCADE",
});

Trips.belongsTo(Traveler, {
    foreignKey: "traveler_id",
    onDelete: "CASCADE",
    foreignKey: "location_id",
    onDelete: "CASCADE",
});

module.exports = { Location, Traveler, Trips};
