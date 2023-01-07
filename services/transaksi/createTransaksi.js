const { sequelize } = require('../../models');
const models = require('../../models');

const createTransaksi = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const checkExistingSaldo = await models.Saldo.findByPk(req.body.saldo_id, { transaction });

        if (!checkExistingSaldo)
            throw new Error(`Data saldo tidak ditemukan!`)

        const jenisTransaksi = req.body.jenis;
        const nominal = req.body.nominal;

        let saldo;
        if (jenisTransaksi == "Kredit") {
            saldo = checkExistingSaldo.saldo + nominal;
        } else if (jenisTransaksi == "Debet") {
            saldo = checkExistingSaldo.saldo - nominal;
        }

        if (saldo < 0)
            throw new Error("Saldo tidak cukup!");

        await models.Saldo.update({
            saldo: saldo
        }, {
            where: {
                id: checkExistingSaldo.id
            }
        }, { transaction });

        await models.Transaksi.create({
            saldo_id: req.body.saldo_id,
            nominal: nominal,
            jenis: jenisTransaksi,
            tanggal: req.body.tanggal
        }, { transaction });

        res.jsend.success({});
        await transaction.commit();
    } catch (error) {
        res.jsend.error(error)
        if (transaction) {
            await transaction.rollback()
        }
    }
}

module.exports = createTransaksi;