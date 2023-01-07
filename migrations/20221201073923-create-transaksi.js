'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('t_transaksi', {
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
                },
                onDelete: "CASCADE"
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
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('t_transaksi');
    }
};