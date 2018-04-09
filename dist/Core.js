'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Core = function () {
    function Core(container) {
        _classCallCheck(this, Core);

        this.container = container;
    }

    _createClass(Core, [{
        key: 'run',
        value: function run(path) {
            var _this = this;

            var commandArr = [];
            _fs2.default.readFileSync(path, 'utf-8').split('\n').filter(function (command) {
                return commandArr.push(_this.container.add(command));
            });
            for (var i = 0; i < commandArr.length; i++) {
                commandArr[i].run();
            }
        }
    }]);

    return Core;
}();

exports.default = Core;