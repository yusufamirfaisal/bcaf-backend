const models = require('../../models');

const updateSaldo = async (req, res) => {
    try {
        await models.Saldo.update({
            nama: req.body.nama
        }, {
            where: {
                id: req.params.id
            }
        })
        res.jsend.success({})
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = updateSaldo;