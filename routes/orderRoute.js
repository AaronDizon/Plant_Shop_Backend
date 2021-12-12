const express = require('express');
const orderRoutes = express.Router();
const orderController = require('../controllers/orderController');

orderRoutes.post('/:id', orderController.createOrder)
// orderRoutes.post('/:id', orderController.createOrder)

//gets an indivudal order by its id
//orderRoutes.get('/:orderId', orderController.selectOrder)




module.exports = orderRoutes