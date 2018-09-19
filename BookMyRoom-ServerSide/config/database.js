const mongoose = require('mongoose');
const mongoDB = 'mongodb://mongoUser2:User2pwd@orchardmongo.eastus.cloudapp.azure.com:27017/Orchard2';
mongoose.connect(mongoDB, { useNewUrlParser: true });
module.exports = mongoose;