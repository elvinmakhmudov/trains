"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlanRoute = function () {
    function PlanRoute() {
        _classCallCheck(this, PlanRoute);

        this.nodes = [];
        this.distance = 0;
    }

    _createClass(PlanRoute, [{
        key: "removeLast",
        value: function removeLast(distance) {
            if (this.nodes.length !== 0) {
                this.distance -= distance;
                this.nodes.splice(-1, 1);
                return true;
            } else {
                return false;
            }
        }
    }, {
        key: "add",
        value: function add(node, distance) {
            this.distance += distance;
            this.nodes.push(node);
        }
    }, {
        key: "stops",
        value: function stops() {
            return this.nodes.length - 1;
        }
    }, {
        key: "last",
        value: function last() {
            return this.nodes[this.nodes.length - 1];
        }
    }]);

    return PlanRoute;
}();

exports.default = PlanRoute;