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

var _PlanRoute = require('./PlanRoute');

var _PlanRoute2 = _interopRequireDefault(_PlanRoute);

var _dijkstra = require('./dijkstra');

var _dijkstra2 = _interopRequireDefault(_dijkstra);

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
            var node = new _Node2.default(end.name);
            node.distance = dis;
            this.plan[start].near[end.name] = node;
        }
    }, {
        key: 'removeCorner',
        value: function removeCorner(start, end) {
            delete this.plan[start].near[end];
        }
    }, {
        key: 'distanceBetweenCorners',
        value: function distanceBetweenCorners(start, end) {
            end = end.trim();
            if (this.plan[start].near.hasOwnProperty(end)) {
                return parseInt(this.plan[start].near[end].distance);
            }
            throw new Error(_messages2.default.noSuchCorner);
        }
    }, {
        key: 'distance',
        value: function distance(points) {
            var distance = 0;

            try {
                for (var i = 1; i < points.length; i++) {
                    var start = points[i - 1];
                    var end = points[i];
                    distance += this.distanceBetweenCorners(start, end);
                }
                console.log('DISTANCE IS', distance);
            } catch (e) {
                console.log(e.message);
            }
            return distance;
        }
    }, {
        key: 'tripsBetweenItemsWithMaximumStops',
        value: function tripsBetweenItemsWithMaximumStops(start, end, maxStops) {
            var routeCount = 0;
            var dfs = new _dfs2.default(this.plan);
            var obj = this.plan[start].near;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var route = new _PlanRoute2.default();
                    route.add(this.plan[start].node, 0);
                    route.add(obj[key], obj[key].distance);
                    routeCount += dfs.search(key, function (route) {
                        return end == route.last();
                    }, function (route) {
                        return route.stops() > maxStops;
                    }, route);
                }
            }
            console.log('TOTAL ROUTES ARE', routeCount);
            return routeCount;
        }
    }, {
        key: 'tripsBetweenItemsWithExactStops',
        value: function tripsBetweenItemsWithExactStops(start, end, exactStops) {
            var routeCount = 0;
            var dfs = new _dfs2.default(this.plan);
            var obj = this.plan[start].near;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var route = new _PlanRoute2.default();
                    route.add(this.plan[start].node, 0);
                    route.add(obj[key], obj[key].distance);
                    routeCount += dfs.search(key, function (route) {
                        return end == route.last() && route.stops() == exactStops;
                    }, function (route) {
                        return route.stops() > exactStops;
                    }, route);
                }
            }
            console.log('TOTAL ROUTES ARE', routeCount);
            return routeCount;
        }
    }, {
        key: 'shortestRouteLength',
        value: function shortestRouteLength(start, end) {
            var dij = new _dijkstra2.default(this.plan);
            var startN = this.plan[start];
            var endN = this.plan[end];
            var result = dij.search(startN, endN);
            console.log('SHORTEST ROUTE LENGTH IS', result);
            var endNode = this.plan[end];
        }
    }, {
        key: 'routesWithMaximumDistance',
        value: function routesWithMaximumDistance(start, end, maxDistance) {
            var routeCount = 0;
            var dfs = new _dfs2.default(this.plan);
            var obj = this.plan[start].near;
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    var route = new _PlanRoute2.default();
                    route.add(this.plan[start].node, 0);
                    route.add(obj[key], obj[key].distance);
                    routeCount += dfs.search(key, function (route) {
                        return end == route.last() && route.distance < maxDistance;
                    }, function (route) {
                        return route.distance > maxDistance;
                    }, route);
                }
            }
            console.log('TOTAL ROUTES ARE', routeCount);
            return routeCount;
        }
    }]);

    return Plan;
}();

exports.default = Plan;