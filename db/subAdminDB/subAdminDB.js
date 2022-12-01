const { MongoClient } = require('mongodb');
require('dotenv').config();

const connectionString = `${process.env.MONGO_URI_PROD}:${process.env.MONGO_URI_PORT_PROD}`;
const client = new MongoClient(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let dbConnection;
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      dbConnection = db.db(process.env.DB_NAME);
      console.log('Successfully connected to MongoDB.');

      return callback();
    });
  },

  getDb: function () {
    return dbConnection;
  },
};
