const models = require('../../models');

const update = async (req, res) => {
    try {
        await models.User.update({
            name: req.body.name
        }, {
            where: {
                id: req.params.id
            }
        })
        res.jsend.success({})
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = update;