const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(helmet());
app.use(cors());

// set app routes
const appRoutes = [
  require('./routes/user')
];
app.use('/api/v1', appRoutes);

// error handling
app.use(onError = (err, req, res, next) => {
  res.status(500).send({
    error: 'Server error',
    metadata: err
  });
});


module.exports = app;
