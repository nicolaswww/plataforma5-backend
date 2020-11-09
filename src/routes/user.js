const express = require('express');
const api = new express.Router();
const UserController = require('./../controllers/user');

api.route('/user')
    .get(UserController.addUser)
    .delete(UserController.removeUser);

module.exports = api;
