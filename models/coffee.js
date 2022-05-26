const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Coffee extends Model {}

Coffee.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        cafe_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        city_name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        }
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'coffee'
        }
);

module.exports = Coffee;