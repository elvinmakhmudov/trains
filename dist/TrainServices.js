"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TrainServices = function () {
    function TrainServices(map) {
        _classCallCheck(this, TrainServices);

        this.map = map;
    }

    _createClass(TrainServices, [{
        key: "shortestRouteLength",
        value: function shortestRouteLength(start, end) {
            return this.map.shortestRouteLength(start, end);
        }
    }, {
        key: "distance",
        value: function distance(points) {
            return this.map.distance(points);
        }
    }, {
        key: "routesWithMaximumDistance",
        value: function routesWithMaximumDistance(start, end, maxStop) {
            return this.map.routesWithMaximumDistance(start, end, maxStop);
        }
    }, {
        key: "tripsBetweenItemsWithMaximumStops",
        value: function tripsBetweenItemsWithMaximumStops(start, end, maxStop) {
            return this.map.tripsBetweenItemsWithMaximumStops(start, end, maxStop);
        }
    }, {
        key: "tripsBetweenItemsWithExactStops",
        value: function tripsBetweenItemsWithExactStops(start, end, exactStops) {
            return this.map.tripsBetweenItemsWithExactStops(start, end, exactStops);
        }
    }]);

    return TrainServices;
}();

exports.default = TrainServices;