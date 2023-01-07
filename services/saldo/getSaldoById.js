const models = require('../../models');

const getSaldoById = async (req, res) => {
    try {
        let data = await models.Saldo.scope('withDetails').findByPk(req.params.id);
        res.jsend.success(data);
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = getSaldoById;