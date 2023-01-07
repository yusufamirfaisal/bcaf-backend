const models = require('../../models');

const getAllTransaksi = async (req, res) => {
    try {
        let data = await models.Transaksi.findAll();
        res.jsend.success(data);
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = getAllTransaksi;