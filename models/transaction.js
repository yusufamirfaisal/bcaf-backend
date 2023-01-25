'use strict';
const {
    Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transaction extends Model {
        static associate(models) {
    
        }
    }
    Transaction.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        user: {
            allowNull: false,
            type: Sequelize.UUID,
            references: {
                model: {
                    tableName: 'm_users',
                    key: 'id'
                }
            },
            onDelete: "CASCADE"
        },
        amount: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        type: {
            allowNull: false,
            type: Sequelize.ENUM("Debit", "Credit")
        },
        date: {
            allowNull: false,
            type: Sequelize.DATE
        }
    }, {
        sequelize,
        tableName: 't_transactions',
    });
    return Transaction;
};