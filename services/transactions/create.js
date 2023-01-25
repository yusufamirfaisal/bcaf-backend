const { sequelize } = require('../../models');
const models = require('../../models');

const create = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const getUser = await models.User.findByPk(req.body.user, { transaction });

        const type = req.body.type;
        const amount = req.body.amount;

        let balance;
        if (type == "Credit") {
            balance = getUser.balance + amount;
        } else if (type == "Debit") {
            balance = getUser.balance - amount;
        }

        if (balance < 0)
            throw new Error("Insufficient balance!");

        await models.User.update({
            balance: balance
        }, {
            where: {
                id: getUser.id
            }
        }, { transaction });

        await models.Transaction.create({
            user: getUser.id,
            type: type,
            amount: amount,
            date: req.body.date
        }, { transaction });

        res.jsend.success({});
        await transaction.commit();
    } catch (error) {
        res.jsend.error(error)
        if (transaction) {
            await transaction.rollback()
        }
    }
}

module.exports = create;