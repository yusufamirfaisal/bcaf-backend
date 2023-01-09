'use strict';
const { Sequelize } = require('sequelize');
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Saldo extends Model {
        static associate(models) {
            this.hasMany(models.Transaksi, { foreignKey: 'saldo_id', sourceKey: 'id', onDelete: "cascade", hooks: true,  });

            this.addScope('defaultScope', {
                include: [{
                    required: false,
                    model: models.Transaksi
                }]
            })
        }

    }

    Saldo.init({
        id: {
            allowNull: false,
            primaryKey: true,
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4
        },
        nama: {
            allowNull: false,
            type: Sequelize.STRING
        },
        saldo: {
            allowNull: false,
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    }, {
        sequelize,
        tableName: 'm_saldo',
    });
    return Saldo;
};