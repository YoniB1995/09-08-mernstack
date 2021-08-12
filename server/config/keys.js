const dotenv = require('dotenv').config();

module.exports = {
    mongoURI: process.env.CONNECTION_URL ,
    secretOrKey: process.env.KEY
  };