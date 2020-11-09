const db = require('./../database/models');

const getUsers = async (req, res) => {
  const users = await db.User.findAll({
    where: {
      status: 1
    },
    order: [
      ['id', 'DESC']
    ]
  });
  res.send({
    data: users
  });
};

const addUser = async (req, res) => {
  const payload = {...req.body};
  const user = await db.User.create(payload);
  res.send({
    data: user
  });
};

const removeUser = async (req, res) => {
  const {id} = req.params;
  const payload = {status: 0};
  const user = await db.User.update(payload, {where: {id}});
  res.send({
    data: user
  });
};

module.exports = {
  getUsers,
  addUser,
  removeUser
};
