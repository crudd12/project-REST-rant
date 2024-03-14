const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

module.exports.Place = require('./places')