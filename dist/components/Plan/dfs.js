"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var depthFirstSearch = function () {
    function depthFirstSearch() {
        _classCallCheck(this, depthFirstSearch);

        this.stack = [];
    }

    _createClass(depthFirstSearch, [{
        key: "search",
        value: function search(rootNode) {
            this.stack.push(rootNode);
            rootNode.visited = true;

            while (this.stack.length !== 0) {
                var currentNode = this.stack.pop();
                console.log(currentNode);

                for (var i = 0; i < currentNode.near; i++) {}
            }
        }
    }]);

    return depthFirstSearch;
}();

exports.default = depthFirstSearch;