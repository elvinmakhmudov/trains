'use strict';

var _Map = require('./components/Map');

var _Map2 = _interopRequireDefault(_Map);

var _messages = require('./messages.json');

var _messages2 = _interopRequireDefault(_messages);

var _TrainServices = require('./TrainServices');

var _TrainServices2 = _interopRequireDefault(_TrainServices);

var _CommandContainer = require('./commands/CommandContainer');

var _CommandContainer2 = _interopRequireDefault(_CommandContainer);

var _Core = require('./Core');

var _Core2 = _interopRequireDefault(_Core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var args = process.argv;
if (args.length < 3) {
    console.log(_messages2.default.usage);
} else {
    try {
        //get the arguments
        var command = args[2];
        var plan = args[3] || "map.txt";
        //initialize map
        var map = new _Map2.default();
        map.initialize(plan);
        //initialize new train services
        var services = new _TrainServices2.default(map);
        var commandContainer = new _CommandContainer2.default(services);
        var core = new _Core2.default(commandContainer);
        core.run(command);
    } catch (e) {
        console.log(e);
    }
}