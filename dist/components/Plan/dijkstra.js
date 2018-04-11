'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _FibonacciHeap = require('./FibonacciHeap');

var _FibonacciHeap2 = _interopRequireDefault(_FibonacciHeap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var dijkstra = function () {
    function dijkstra(plan) {
        _classCallCheck(this, dijkstra);

        this.plan = plan;
    }

    _createClass(dijkstra, [{
        key: 'search',
        value: function search(start, end) {
            var verticesToCheck = new _FibonacciHeap2.default();
            var hasBeenQueued = {};
            var processVertex = function processVertex(vertex, distance) {
                var edges = vertex.near;
                for (var key in edges) {
                    if (edges.hasOwnProperty(key)) {
                        var newVert = edges[key].name;
                        var newDist = distance + edges[key].distance;
                        if (hasBeenQueued[newVert]) {
                            try {
                                // try block needed in case newVert was removed
                                verticesToCheck.decreaseKey(newVert, newDist);
                            } catch (e) {}
                        } else {
                            verticesToCheck.add(newDist, newVert);
                            hasBeenQueued[newVert] = true;
                        }
                    }
                }
            };

            processVertex(start, 0);

            var queueElem;
            while ((queueElem = verticesToCheck.extractMin()) != null) {
                var distance = queueElem.key;
                var vertex = queueElem.value;
                if (vertex == end.node.name) {
                    return distance;
                } else {
                    processVertex(this.plan[vertex], distance);
                }
            }
            return null;
        }
    }]);

    return dijkstra;
}();

exports.default = dijkstra;