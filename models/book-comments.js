const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class bookComment extends Model {}

bookComment.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    book_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    //not sure what to do for linking id
    book_id: {

    },
    //help here too
    user_id: {

    }
    },
    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
}
);

module.exports = bookComment;
