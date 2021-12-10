const express = require('express');
const orderRoutes = express.Router();
const orderController = require('../controllers/orderController');

orderRoutes.post('/', orderController.createOrder)


module.exports = orderRoutes