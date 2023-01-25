const router = require('express').Router();

const transaksi = require('../../services/transaksi');

router.post('/', transaksi.createTransaksi);
router.delete('/:id', transaksi.deleteTransaksi);
router.get('/', transaksi.getAllTransaksi);
router.get('/:id', transaksi.getTransaksiById);
router.put('/:id', transaksi.updateTransaksi);

module.exports = router;