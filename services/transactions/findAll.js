const models = require('../../models');

const findAll = async (req, res) => {
    try {
        let data = await models.Transaction.findAll({
            order: [
                ['createdAt', 'DESC']
            ]
        });
        res.jsend.success(data);
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = findAll;