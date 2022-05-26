const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CoffeeComment extends Model {}

CoffeeComment.init(
{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
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
    modelName: 'comment'
}
);

module.exports = CoffeeComment;
