const Location = require("./Location")
const Traveler = require("./Travel")
const Trip = require("./Trip")

Location.hasMany(Trip,{
    foreignKey:'location_id',
    unique:false
});

Traveler.hasMany(Trip,{
    foreignKey:'traveler_id',
    unique:false
})



module.exports = {
    Traveler,
    Location,
    Trip
}