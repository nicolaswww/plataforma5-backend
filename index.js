require('dotenv-safe').config();

const app = require('./src/app.js');
const {PORT} = process.env;

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
