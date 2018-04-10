"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RoutesWithMaximumDistanceCommand = function () {
    function RoutesWithMaximumDistanceCommand(services) {
        _classCallCheck(this, RoutesWithMaximumDistanceCommand);

        this.services = services;
    }

    _createClass(RoutesWithMaximumDistanceCommand, [{
        key: "run",
        value: function run() {
            return this.services.routesWithMaximumDistance(this.start, this.end, this.distance);
        }
    }, {
        key: "setPoints",
        value: function setPoints(points) {
            this.start = points[1];
            this.end = points[2];
        }
    }, {
        key: "setDistance",
        value: function setDistance(distance) {
            this.distance = distance;
        }
    }]);

    return RoutesWithMaximumDistanceCommand;
}();

exports.default = RoutesWithMaximumDistanceCommand;