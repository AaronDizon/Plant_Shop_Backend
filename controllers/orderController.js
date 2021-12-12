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

        await userOrder.addPlants(
          [
                id=req.body.plantOrder 
          
        ]
        )
       
        res.json({userOrder})
    } catch (err) {
        console.log(err)
    }

}
orderController.orderPlant = async (req, res) => {
    try {
        const order = await models.findOne({
            where: {id: req.params.orderId}
        })

        const plant = await models.findOne({
            where:{
                id:req.body.id
            }
        })
        const association = order.addPlants(plant)
        res.json({association})
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