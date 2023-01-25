const models = require('../../models');

const create = async (req, res) => {
    try {
        await models.User.create({
            nama: req.body.name
        });
        res.jsend.success({})
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = create;