const Joi = require('@hapi/joi');
const db = require('./../database/models');

const getUsers = async (req, res) => {
  const users = await db.User.findAll({
    where: {
      status: 1
    },
    order: [
      ['id', 'DESC']
    ],
    attributes: ['id', 'name', 'flight'],
    include: [{
      model: db.Baggage,
      as: 'baggages',
      attributes: ['id', 'type']
    }]
  });
  res.send({
    data: users
  });
};

const addUser = async (req, res) => {
  const schema = Joi.object().keys({
    name: Joi.string(),
    flight: Joi.string().max(5).required(),
    baggages: Joi
        .array()
        .min(1)
        .max(3)
        .items(Joi.object().keys({type: Joi.number().required()}))
        .required()
  });

  try {
    await schema.validateAsync(req.body);
  } catch (err) {
    return res.status(400).send({
      error: 'invalid_params',
      metadata: err.details
    });
  }

  const {name, flight, baggages} = req.body;

  // create user
  const payload = {name, flight};
  const {id: userId} = await db.User.create(payload);

  // create baggages
  await Promise.all(baggages.map(async (baggage) => {
    await db.Baggage.create({...baggage, userId});
  }));

  const user = await db.User.findOne({
    where: {
      id: userId
    },
    attributes: ['id', 'name', 'flight'],
    include: [{
      model: db.Baggage,
      as: 'baggages',
      attributes: ['id', 'type']
    }]
  });
  res.send({
    data: user
  });
};

const removeUser = async (req, res) => {
  const {id} = req.params;
  const payload = {status: 0};
  await db.User.update(payload, {where: {id}});
  await db.Baggage.update(payload, {where: {userId: id}});
  res.send();
};

module.exports = {
  getUsers,
  addUser,
  removeUser
};
