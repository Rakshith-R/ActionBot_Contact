"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _history = require("history");

var _reactRouterDom = require("react-router-dom");

var _index = require("./index1.js");

var _index2 = _interopRequireDefault(_index);

var _Admin = require("./layouts/Admin.js");

var _Admin2 = _interopRequireDefault(_Admin);

var _RTL = require("./layouts/RTL.js");

var _RTL2 = _interopRequireDefault(_RTL);

require("./assets/css/material-dashboard-react.css?v=1.8.0");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
var Dashboard = function Dashboard() {
  var hist = (0, _history.createBrowserHistory)();
  return _react2.default.createElement(
    _reactRouterDom.Router,
    { history: hist },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { path: "/admin", component: _Admin2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: "/home", component: _index2.default }),
      _react2.default.createElement(_reactRouterDom.Route, { path: "/rtl", component: _RTL2.default }),
      _react2.default.createElement(_reactRouterDom.Redirect, { from: "/", to: "/admin" })
    )
  );
};
// core components
exports.default = Dashboard;
