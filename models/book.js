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
         }
        //   user_id: {
        //       type: DataTypes.INTEGER,
        //       references: {
        //           model: 'user',
        //           key: 'id'
        //       }
        //   }
        
        },
        {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'book'
        }
);

module.exports = Book;