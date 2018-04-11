'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _messages = require('../../messages');

var _messages2 = _interopRequireDefault(_messages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DeepFirstSearch = function () {
    function DeepFirstSearch(plan) {
        _classCallCheck(this, DeepFirstSearch);

        this.plan = plan;
    }

    _createClass(DeepFirstSearch, [{
        key: 'search',
        value: function search(currentNode, filter, stopCallback, route) {
            var total = 0;

            if (filter(route)) {
                total++;
            }

            var obj = this.plan[currentNode].near;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    route.add(obj[key], obj[key].distance);
                    if (stopCallback(route)) {
                        route.removeLast(obj[key].distance);
                        continue;
                    } else {
                        total += this.search(key, filter, stopCallback, route);
                    }
                    route.removeLast(obj[key].distance);
                }
            }
            return total;
        }
    }]);

    return DeepFirstSearch;
}();

exports.default = DeepFirstSearch;