const models = require('../../models');

const findByPk = async (req, res) => {
    try {
        let data = await models.User.findByPk(req.params.id, {
            include: [{
                required: false,
                model: models.Transaction
            }],
            order: [
                ['Transactions', 'createdAt', 'DESC']
            ]
        });
        res.jsend.success(data);
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = findByPk;