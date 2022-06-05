const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {

    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        city_name:{
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
        },
        {
            hooks: {
                // set up beforeCreate lifecycle "hook" functionality
                async beforeCreate(newUserData) {
                  newUserData.password = await bcrypt.hash(newUserData.password, 10);
                  return newUserData;
                },
          
                async beforeUpdate(updatedUserData) {
                  updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                  return updatedUserData;
                }
              },
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'user'
        }
);

module.exports = User;