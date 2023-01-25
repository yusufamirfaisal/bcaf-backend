const models = require('../../models');

const destroy = async (req, res) => {
    try {
        let data = await models.User.destroy({
            where: {
                id: req.params.id
            }
        });
    } catch (error) {
        res.jsend.error(error)
    }
}

module.exports = destroy;