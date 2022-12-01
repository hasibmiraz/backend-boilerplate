const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { connectToServer } = require('./db/subadminDB/subadminDB');

const app = express();
const port = process.env.PORT || process.env.PRODUCTION_PORT;

app.use(express.json());
app.use(cors());
app.use(helmet());

// Connect to mongodb
connectToServer((err) => {
  if (!err) {
    app.listen(port, () => console.log(`App listening to port ${port}`));
  } else {
    console.log(err);
  }
});
