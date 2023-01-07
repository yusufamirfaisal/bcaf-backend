const { sequelize } = require('../../models');
const models = require('../../models');

const updateTransaksi = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const getTransaksiById = await models.Transaksi.findByPk(req.params.id, { transaction });
        if (!getTransaksiById)
            throw new Error(`Data transaksi tidak ditemukan!`)

        if (getTransaksiById.saldo_id !== req.body.saldo_id)
            throw new Error(`Tidak dapat mengganti saldo_id!`)

        const checkExistingSaldo = await models.Saldo.findByPk(req.body.saldo_id, { transaction });

        let oldSaldo;
        if (getTransaksiById.jenis == 'Kredit') {
            oldSaldo = checkExistingSaldo.saldo - getTransaksiById.nominal
        } else if (getTransaksiById.jenis == 'Debet') {
            oldSaldo = checkExistingSaldo.saldo + getTransaksiById.nominal
        }

        const jenisTransaksi = req.body.jenis;
        const nominal = req.body.nominal;

        let newSaldo;
        if (jenisTransaksi == 'Kredit') {
            newSaldo = oldSaldo + nominal;
        } else if (jenisTransaksi == 'Debet') {
            newSaldo = oldSaldo - nominal;
        }

        if (newSaldo < 0)
            throw new Error(`Saldo tidak cukup!`)

        await models.Saldo.update({
            saldo: newSaldo
        }, {
            where: {
                id: req.body.saldo_id
            }
        }, { transaction });

        let data = await models.Transaksi.update({
            saldo_id: req.body.saldo_id,
            nominal: nominal,
            jenis: jenisTransaksi,
            tanggal: req.body.tanggal
        }, {
            where: {
                id: req.params.id
            }
        }, { transaction });

        res.jsend.success({})
        await transaction.commit();
    } catch (error) {
        res.jsend.error(error);
        if (transaction) {
            await transaction.rollback();
        }
    }
}

module.exports = updateTransaksi;