const angular = require('angular');
const app = angular.module('CowsayApp', []);

require('./services')(app);
require('./cows')(app);
