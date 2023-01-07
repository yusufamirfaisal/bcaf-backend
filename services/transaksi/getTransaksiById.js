const models = require('../../models');

const getTransaksiById = async (req, res) => {
    try {
        let data = await models.Transaksi.findByPk(req.params.id)
        res.jsend.success(data);
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = getTransaksiById;