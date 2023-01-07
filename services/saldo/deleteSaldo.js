const models = require('../../models');

const deleteSaldo = async (req, res) => {
    try {
        let data = await models.Saldo.destroy({
            where: {
                id: req.params.id
            }
        });

        data === 0 ?
            res.jsend.error(`Saldo data tidak ditemukan!`) :
            res.jsend.success({})
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = deleteSaldo;