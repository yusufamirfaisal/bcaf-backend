const models = require('../../models');

const update = async (req, res) => {
    try {
        let data = await models.User.update({
            nama: req.body.nama
        }, {
            where: {
                id: req.params.id
            }
        })

        data[0] === 0 ?
            res.jsend.error(`Data saldo tidak ditemukan!`) :
            res.jsend.success({})
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = update;