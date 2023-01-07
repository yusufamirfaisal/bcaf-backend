'use strict';
const {
    Model, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Transaksi extends Model {
        static associate(models) {
            this.addScope('defaultScope',{
                order: [
                    ['tanggal', 'DESC']
                ]
            })
        }
    }
    Transaksi.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        saldo_id: {
            allowNull: false,
            type: Sequelize.UUID,
            references: {
                model: {
                    tableName: 'm_saldo',
                    key: 'id'
                }
            }
        },
        nominal: {
            allowNull: false,
            type: Sequelize.INTEGER
        },
        jenis: {
            allowNull: false,
            type: Sequelize.ENUM("Debet", "Kredit")
        },
        tanggal: {
            allowNull: false,
            type: Sequelize.DATE
        }

    }, {
        sequelize,
        tableName: 't_transaksi',
    });
    return Transaksi;
};