'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PlanPoint = require('./PlanPoint');

var _PlanPoint2 = _interopRequireDefault(_PlanPoint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plan = function () {
    function Plan() {
        _classCallCheck(this, Plan);

        this.plan = {};
    }

    _createClass(Plan, [{
        key: 'addPoint',
        value: function addPoint(point) {
            //if plan does not contain point, add new PlanPoint
            if (!this.plan[point.name]) {
                this.plan[point.name] = new _PlanPoint2.default(point);
            }
        }
    }, {
        key: 'addCorner',
        value: function addCorner(start, end, dis) {
            //add distance between start and end points
            this.plan[start].near[end] = dis;
        }
    }, {
        key: 'removeCorner',
        value: function removeCorner(start, end) {
            delete this.plan[start].near[end];
        }
    }]);

    return Plan;
}();

exports.default = Plan;