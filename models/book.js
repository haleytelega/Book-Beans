const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        bookClub_name:{
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
        },
         meeting_weekday: {
             type: DataTypes.STRING,
             allowNull:false,
             validate: {
                 len: [1]
             }
         },
         meeting_time: {
             type: DataTypes.INTEGER,
             allowNull: false,
         },
         // not sure how to do user_id
          user_id
        
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'book'
        }
);

module.exports = Book;