const { sequelize } = require('../../models');
const models = require('../../models');

const deleteTransaksi = async (req, res) => {
    let transaction;
    try {
        transaction = await sequelize.transaction();

        const getTransaksiById = await models.Transaksi.findByPk(req.params.id, { transaction });
        const checkExistingSaldo = await models.Saldo.findByPk(getTransaksiById.saldo_id, { transaction });

        let oldSaldo;
        if (getTransaksiById.jenis == 'Kredit') {
            oldSaldo = checkExistingSaldo.saldo - getTransaksiById.nominal
        } else if (getTransaksiById.jenis == 'Debet') {
            oldSaldo = checkExistingSaldo.saldo + getTransaksiById.nominal
        }

        await models.Saldo.update({
            saldo: oldSaldo
        }, {
            where: {
                id: checkExistingSaldo.id
            }
        }, { transaction });

        await models.Transaksi.destroy({
            where: {
                id: req.params.id
            }
        }, { transaction });

        res.jsend.success({})
        await transaction.commit();
    } catch (error) {
        res.jsend.error(error);
        if (transaction) {
            await transaction.rollback()
        }
    }
}

module.exports = deleteTransaksi;