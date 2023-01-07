const models = require('../../models');

const getSaldo = async (req, res) => {
    try {
        let data = await models.Saldo.findAll();
        res.jsend.success(data);
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = getSaldo;