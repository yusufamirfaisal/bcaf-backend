'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('t_transactions', {
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
        await queryInterface.dropTable('t_transactions');
    }
};