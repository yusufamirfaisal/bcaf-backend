'use strict';
const { Sequelize } = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
            this.hasMany(models.Transaction, { foreignKey: 'user', sourceKey: 'id' })
        }
    }

    User.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        name: {
            allowNull: false,
            type: Sequelize.STRING
        },
        balance: {
            allowNull: false,
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: 'm_users',
    });
    return User;
};