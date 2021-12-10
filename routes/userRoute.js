const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');

userRoutes.post('/', userController.createUser)

userRoutes.post('/login', userController.login)

userRoutes.get('/verify', userController.verifyUser)

userRoutes.get('/order/allOrders/:userId', userController.getUserOrders)

userRoutes.get('/order/:orderId/allItems', userController.getOrderItems)




module.exports = userRoutes