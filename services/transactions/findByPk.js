const models = require('../../models');

const findByPk = async (req, res) => {
    try {
        let data = await models.Transaction.findByPk(req.params.id)
        res.jsend.success(data);
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = findByPk;