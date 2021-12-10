const models = require('../models')
const orderController = {}

orderController.createOrder = async (req, res) => {
    try {
        const newOrder = await models.create({
          

        })
        res.json({newOrder})
    } catch (err) {
        res.status(400).json({ error: error.message })
    }

}
orderController.function = async (req, res) => {
    try {

    } catch (err) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = orderController