'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _messages = require('./../messages');

var _messages2 = _interopRequireDefault(_messages);

var _DistanceCommand = require('./DistanceCommand');

var _DistanceCommand2 = _interopRequireDefault(_DistanceCommand);

var _ShortestRouteLengthCommand = require('./ShortestRouteLengthCommand');

var _ShortestRouteLengthCommand2 = _interopRequireDefault(_ShortestRouteLengthCommand);

var _TripsBetweenItemsWithMaximumStopsCommand = require('./TripsBetweenItemsWithMaximumStopsCommand');

var _TripsBetweenItemsWithMaximumStopsCommand2 = _interopRequireDefault(_TripsBetweenItemsWithMaximumStopsCommand);

var _RoutesWithMaximumDistanceCommand = require('./RoutesWithMaximumDistanceCommand');

var _RoutesWithMaximumDistanceCommand2 = _interopRequireDefault(_RoutesWithMaximumDistanceCommand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//switch cases
var DISTANCE_OF_ROUTE = 'Distance_of_the_route_between';
var SHORTEST_ROUTE_LENGTH = 'Shortest_route_between_items';
var ROUTES_WITH_MAXIMUM_DISTANCE = 'The_number_of_routes_with_maximum_distance_of';
var TRIPS_BETWEEN_ITEMS_WITH_MAXIMUM_STOPS = 'Trips_with_maximum_stops_of';
var TRIPS_BETWEEN_ITEMS_WITH_EXACT_STOPS = 'Trips_with_exact_stops_of';

var CommandContainer = function () {
    function CommandContainer(services) {
        _classCallCheck(this, CommandContainer);

        this.services = services;
    }

    _createClass(CommandContainer, [{
        key: 'add',
        value: function add(commandLine) {
            //divide the line into items
            var items = commandLine.split(" ");

            var methodName = items[0];
            switch (methodName) {
                case DISTANCE_OF_ROUTE:
                    return this.distanceOfRoute(items);
                case SHORTEST_ROUTE_LENGTH:
                    return this.shortestRouteLength(items);
                case TRIPS_BETWEEN_ITEMS_WITH_MAXIMUM_STOPS:
                    return this.tripsBetweenItemsWithMaximumStops(items);
                case TRIPS_BETWEEN_ITEMS_WITH_EXACT_STOPS:
                    return this.tripsBetweenItemsWithExactStops(items);
                case ROUTES_WITH_MAXIMUM_DISTANCE:
                    return this.routesWithMaximumDistance(items);
                default:
                    throw new Error(_messages2.default.wrongFormat);
            }

            console.log(this.method);
        }
    }, {
        key: 'distanceOfRoute',
        value: function distanceOfRoute(items) {
            if (items.length < 2) {
                throw new Error(_messages2.default.wrongFormat);
            }
            var command = new _DistanceCommand2.default(this.services);
            command.setPoints(items.slice(1));
            return command;
        }
    }, {
        key: 'shortestRouteLength',
        value: function shortestRouteLength(items) {
            if (items.length !== 3) {
                throw new Error(_messages2.default.wrongFormat);
            }
            var command = new _ShortestRouteLengthCommand2.default(this.services);
            command.setPoints(items);

            return command;
        }
    }, {
        key: 'tripsBetweenItemsWithMaximumStops',
        value: function tripsBetweenItemsWithMaximumStops(items) {
            if (items.length !== 4) {
                throw new Error(_messages2.default.wrongFormat);
            }
            var command = new _TripsBetweenItemsWithMaximumStopsCommand2.default(this.services);
            command.setPoints(items);
            command.setStopCount(items[3]);
            return command;
        }
    }, {
        key: 'tripsBetweenItemsWithExactStops',
        value: function tripsBetweenItemsWithExactStops(items) {
            if (items.length !== 4) {
                throw new Error(_messages2.default.wrongFormat);
            }
            var command = new TripsBetweenItemsWithExactStopsCommand(this.services);
            command.setPoints(items);
            command.setStopCount(items[3]);
            return command;
        }
    }, {
        key: 'routesWithMaximumDistance',
        value: function routesWithMaximumDistance(items) {
            if (items.length !== 4) {
                throw new Error(_messages2.default.wrongFormat);
            }
            var command = new _RoutesWithMaximumDistanceCommand2.default(this.services);
            command.setPoints(items);
            command.setDistance(items[3]);
            return command;
        }
    }]);

    return CommandContainer;
}();

exports.default = CommandContainer;