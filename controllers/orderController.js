const models = require('../models')
const orderController = {}

orderController.createOrder = async (req, res) => {
    try {
      
        const user= await models.user.findOne({
            where:{
                id:req.params.id
            }
        })

        const userOrder = await user.createOrder({
            shipping_address: req.body.shipping_address,
            credit_card_number: req.body.credit_card_number,
            total_price: req.body.total
        })
        
        await userOrder.addPlants(req.body.plantOrder)
       
        res.json({userOrder})
    } catch (err) {
        console.log(err)
    }

}

orderController.getOrders = async (req, res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.params.userId
            }
        })
        const orders = await user.getOrders()

        res.json({orders})
    } catch (err) {
        res.status(400).json({ error: error.message })
    }

}

module.exports = orderController