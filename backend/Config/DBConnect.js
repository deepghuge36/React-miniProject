const mongoose = require('mongoose');
const username = require('./keys').username;
const password = require('./keys').password;
const dbname = require('./keys').DatabaseName;

const URI = `mongodb+srv://${username}:${password}@cluster0-pyixk.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// eslint-disable-next-line no-undef
module.exports = DBConnect = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`your Connected to ${dbname}`)
  console.log(`MongoDB connected ${URI}`);
};