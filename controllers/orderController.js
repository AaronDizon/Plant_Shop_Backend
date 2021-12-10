const models = require('../models')
const orderController = {}

orderController.createOrder = async (req, res) => {
    try {
        const newOrder = await models.create({
            shipping_address: req.body.name,
            credit_card_number: req.body.email,
            total_price: req.body.password
        })
        res.json({newOrder})
    } catch (err) {
        res.status(400).json({ error: error.message })
    }

}
orderController.function = async (req, res) => {
    try {
        const order = await models.findOne({
            where: {id: req.params.orderId}
        })
        ewa.json({order})
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