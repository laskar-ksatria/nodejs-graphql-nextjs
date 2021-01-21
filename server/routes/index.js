import express from 'express'
import UserController from '../controllers/userController'

const Router = express();

Router.get('/users', UserController.readAll)
Router.post('/users', UserController.create)

module.exports = Router;