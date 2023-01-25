const router = require('express').Router();

const transaction = require('../../services/transactions');

router.post('/', transaction.create);
router.delete('/:id', transaction.destroy);
router.get('/', transaction.findAll);
router.get('/:id', transaction.findByPk);
router.put('/:id', transaction.update);

module.exports = router;