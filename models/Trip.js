const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init({
    // add properites here, ex:
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
   },
   trip_budget:{
       type:DataTypes.DECIMAL,
       allowNull:false,
       validate:{
        isFloat: true,
       }
   },
   traveler_amount:{
       type:DataTypes.INTEGER,
       allowNull:false,
       defaultValue:1
   },
   traveler_id:{
       type:DataTypes.INTEGER,
       references:{
           model:'traveler',
           key:'id',
           unique:false
       }
   },
   location_id:{
    type:DataTypes.INTEGER,
    references:{
        model:'locations',
        key:'id',
        unique:false
    }
   }
},{
    sequelize,
    modelName:'trip'
});

module.exports=Trip