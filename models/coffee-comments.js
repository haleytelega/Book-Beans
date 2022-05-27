const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class coffeeComment extends Model {}

coffeeComment.init(
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
    },
    coffee_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'coffee',
            key: 'id'
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

module.exports = coffeeComment;
