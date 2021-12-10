const models = require('../models')
const orderController = {}

orderController.function = async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = orderController