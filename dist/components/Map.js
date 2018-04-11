'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Plan = require('./Plan/Plan');

var _Plan2 = _interopRequireDefault(_Plan);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _messages = require('../messages');

var _messages2 = _interopRequireDefault(_messages);

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = function () {
    function Map() {
        _classCallCheck(this, Map);

        this.plan = new _Plan2.default();
        this.map = {};
    }

    _createClass(Map, [{
        key: 'initialize',
        value: function initialize(planPath) {
            var _this = this;

            //read the plan and validate each line
            _fs2.default.readFileSync(planPath, 'utf-8').split('\n').filter(function (line) {
                return _this.validateAndParse(line);
            });
        }
    }, {
        key: 'validateAndParse',
        value: function validateAndParse(line) {
            var items = line.split(" ").map(Function.prototype.call, String.prototype.trim).filter(function (x) {
                return !!x ? x : null;
            });
            //if there are 1 point throw an error
            if (line.length < 2) {
                throw new Error(_messages2.default.notEnoughPoints);
            } else {
                //initialize start and end points
                var startP = new _Node2.default(items[0]);
                var endP = new _Node2.default(items[1]);
                //get the distance between points
                var distance = Number(items[2]);
                //add start and end points
                this.plan.addNode(startP);
                this.plan.addNode(endP);

                //add corner
                this.plan.addCorner(startP, endP, distance);
            }
        }
    }, {
        key: 'distance',
        value: function distance(points) {
            return this.plan.distance(points);
        }
    }, {
        key: 'routesWithMaximumDistance',
        value: function routesWithMaximumDistance(start, end, maxStop) {
            return this.plan.routesWithMaximumDistance(start, end, maxStop);
        }
    }, {
        key: 'tripsBetweenItemsWithMaximumStops',
        value: function tripsBetweenItemsWithMaximumStops(start, end, maxStop) {
            return this.plan.tripsBetweenItemsWithMaximumStops(start, end, maxStop);
        }
    }, {
        key: 'tripsBetweenItemsWithExactStops',
        value: function tripsBetweenItemsWithExactStops(start, end, exactStop) {
            return this.plan.tripsBetweenItemsWithExactStops(start, end, exactStop);
        }
    }, {
        key: 'shortestRouteLength',
        value: function shortestRouteLength(start, end) {
            return this.plan.shortestRouteLength(start, end);
        }
    }]);

    return Map;
}();

exports.default = Map;