"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _PlanRoute = require("./PlanRoute");

var _PlanRoute2 = _interopRequireDefault(_PlanRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PlanNode = function PlanNode(node) {
    _classCallCheck(this, PlanNode);

    this.node = node;
    this.near = {};
};

exports.default = PlanNode;