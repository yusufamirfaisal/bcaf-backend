const models = require('../../models');

const deleteSaldo = async (req, res) => {
    try {
        await models.Saldo.destroy({
            where: {
                id: req.params.id
            }
        })
        res.jsend.success({})
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = deleteSaldo;