'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _PlanNode = require('./PlanNode');

var _PlanNode2 = _interopRequireDefault(_PlanNode);

var _messages = require('./../../messages');

var _messages2 = _interopRequireDefault(_messages);

var _dfs = require('./dfs');

var _dfs2 = _interopRequireDefault(_dfs);

var _Node = require('./../Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Plan = function () {
    function Plan() {
        _classCallCheck(this, Plan);

        this.plan = {};
    }

    _createClass(Plan, [{
        key: 'addNode',
        value: function addNode(node) {
            //if plan does not contain point, add new PlanNode
            if (!this.plan[node.name]) {
                this.plan[node.name] = new _PlanNode2.default(node);
            }
        }
    }, {
        key: 'addCorner',
        value: function addCorner(start, end, dis) {
            //add distance between start and end points
            var node = new _Node2.default(end);
            node.distance = dis;
            this.plan[start].near[end] = node;
        }
    }, {
        key: 'removeCorner',
        value: function removeCorner(start, end) {
            delete this.plan[start].near[end];
        }
    }, {
        key: 'distanceBetweenCorners',
        value: function distanceBetweenCorners(start, end) {
            console.log("getting distance between items: ", start, end);
            if (this.plan[start].near.hasOwnProperty(end.trim())) {
                // console.log(this.plan[start].near);
                console.log('end', end);
                console.log('near is ', this.plan[start].near);
                console.log('near ob is ', this.plan[start].near[end]);
                return parseInt(this.plan[start].near[end].distance);
            }
            throw new Error(_messages2.default.noSuchCorner);
        }
    }, {
        key: 'distance',
        value: function distance(points) {
            var distance = 0;

            for (var i = 1; i < points.length; i++) {
                var start = points[i - 1];
                var end = points[i];
                distance += this.distanceBetweenCorners(start, end);
            }
            console.log(distance);
            return distance;
        }
    }, {
        key: 'routesWithMaximumDistance',
        value: function routesWithMaximumDistance(start, end, maxStop) {
            var dfs = new _dfs2.default();
            console.log('result', result);
        }
    }]);

    return Plan;
}();

exports.default = Plan;