const express = require('express');
const orderRoutes = express.Router();
const orderController = require('../controllers/orderController');

orderRoutes.post('/', orderController.makeOrder)


module.exports = orderRoutes