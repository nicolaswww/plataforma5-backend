const express = require('express');
const api = new express.Router();
const UserController = require('./../controllers/user');

api.route('/user')
    .get(UserController.getUsers)
    .post(UserController.addUser);

api.route('/user/id/:id')
    .delete(UserController.removeUser);

module.exports = api;
