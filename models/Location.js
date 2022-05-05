const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Location extends Model {}

Location.init({
    // add properites here, ex:
   id:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
   },
   location_name:{
       type:DataTypes.STRING,
       allowNull:false,
   }
},{
    sequelize,
    modelName:'locations'
});

module.exports=Location