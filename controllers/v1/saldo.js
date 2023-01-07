const router = require('express').Router();

const saldo = require('../../services/saldo');

router.post('/', saldo.createSaldo);
router.delete('/:id', saldo.deleteSaldo);
router.get('/', saldo.getAllSaldo);
router.get('/:id', saldo.getSaldoById);
router.put('/:id', saldo.updateSaldo);

module.exports = router;