const mongoose = require('mongoose');
//const trigger = require('mongoose-trigger');

const buildSchema = mongoose.Schema({
    buildName: String,
    buildStatus: String,
    logFile: String,
    status: String
});
/*
const Events = trigger(buildSchema, {
  events: {
    create: {
      select: 'logFile'
    },
    update: {
      select: 'logFile'
    }
  },
  debug: true
});
*/
module.exports = {
  Build: mongoose.model('build', buildSchema)
  //Events: Events
};
