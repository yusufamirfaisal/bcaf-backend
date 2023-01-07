const models = require('../../models');

const createSaldo = async (req, res) => {
    try {
        await models.Saldo.create({
            nama: req.body.nama
        });
        res.jsend.success({})
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = createSaldo;