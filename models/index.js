const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

// models being exported --> do it this way so we can include both models with a single include.
module.exports.Place = require('./places')
module.exports.Comment = require('./comment')