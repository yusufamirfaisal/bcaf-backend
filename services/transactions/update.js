const { sequelize } = require('../../models');
const models = require('../../models');

const update = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const type = req.body.type;
        const amount = req.body.amount;

        const getTransaction = await models.Transaction.findByPk(req.params.id, { transaction });

        if (!getTransaction)
            throw new Error(`Transaction not found!`)

        const getUser = await models.User.findByPk(getTransaction.user, { transaction });

        const firstTransaction = await models.Transaction.findOne({
            where: {
                user: getUser.id
            },
            order: [
                ['createdAt', 'ASC']
            ]
        }, { transaction });

        if (firstTransaction && firstTransaction.id == req.params.id && firstTransaction.type !== type)
            throw new Error(`First transaction must be Credit!`)

        let oldBalance;
        if (getTransaction.type == 'Credit') {
            oldBalance = getUser.balance - getTransaction.amount
        } else if (getTransaction.type == 'Debit') {
            oldBalance = getUser.balance + getTransaction.amount
        }

        let newBalance;
        if (type == 'Credit') {
            newBalance = oldBalance + amount;
        } else if (type == 'Debit') {
            newBalance = oldBalance - amount;
        }

        if (newBalance < 0)
            throw new Error(`Insufficient balance!`)

        await models.User.update({
            balance: newBalance
        }, {
            where: {
                id: getUser.id
            }
        }, { transaction });

        await models.Transaction.update({
            amount: amount,
            type: type,
            date: req.body.date
        }, {
            where: {
                id: req.params.id
            }
        }, { transaction });

        res.jsend.success({})
        await transaction.commit();
    } catch (error) {
        res.jsend.error(error);
        if (transaction) {
            await transaction.rollback();
        }
    }
}

module.exports = update;