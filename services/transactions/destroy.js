const { sequelize } = require('../../models');
const models = require('../../models');

const destroy = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const getTransaction = await models.Transaction.findByPk(req.params.id, { transaction });
        const getUser = await models.User.findByPk(getTransaction.user, { transaction });

        let oldBalance;
        if (getTransaction.type == 'Credit') {
            oldBalance = getUser.balance - getTransaction.amount
        } else if (getTransaction.type == 'Debit') {
            oldBalance = getUser.balance + getTransaction.amount
        }

        await models.User.update({
            balance: oldBalance
        }, {
            where: {
                id: getUser.id
            }
        }, { transaction });

        await models.Transaction.destroy({
            where: {
                id: req.params.id
            }
        }, { transaction });

        res.jsend.success({})
        await transaction.commit();
    } catch (error) {
        res.jsend.error(error);
        if (transaction) {
            await transaction.rollback()
        }
    }
}

module.exports = destroy;