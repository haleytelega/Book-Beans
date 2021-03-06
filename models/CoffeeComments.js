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
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
        len: [1]
        }
    },
    coffee_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'coffee',
            key: 'id'
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    }
},  

    {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'coffeecomment'
}
);

module.exports = CoffeeComment;
