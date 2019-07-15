'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 3000;

_app2.default.listen(PORT, function () {
  return console.log('Rontent news backend server listening on port ' + PORT);
});