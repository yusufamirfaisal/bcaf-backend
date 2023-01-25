const router = require('express').Router();

router.use('/saldo', require('./saldo'));
router.use('/transaksi', require('./transaksi'))

module.exports = router;