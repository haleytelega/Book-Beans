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

    book_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'book',
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
    modelName: 'comment'
}
);

module.exports = bookComment;
