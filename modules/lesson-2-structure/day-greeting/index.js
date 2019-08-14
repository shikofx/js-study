const eveningGreeting = require('./evening');
const morningGreeting = require('./morning');

module.exports = {
    getEveningGreeting: function(){ console.log(eveningGreeting) },
    getMorningGreeting: function(){ console.log(morningGreeting) }
};
