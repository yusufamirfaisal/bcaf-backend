const router = require('express').Router();

const user = require('../../services/users');

router.post('/', user.create);
router.delete('/:id', user.destroy);
router.get('/', user.findAll);
router.get('/:id', user.findByPk);
router.put('/:id', user.update);

module.exports = router;