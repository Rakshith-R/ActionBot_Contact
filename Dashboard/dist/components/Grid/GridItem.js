"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = GridItem;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _Grid = require("@material-ui/core/Grid");

var _Grid2 = _interopRequireDefault(_Grid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library to set properties for components

// @material-ui/core components


var styles = {
  grid: {
    padding: "0 15px !important"
  }
};

var useStyles = (0, _styles.makeStyles)(styles);

function GridItem(props) {
  var classes = useStyles();

  var children = props.children,
      rest = _objectWithoutProperties(props, ["children"]);

  return _react2.default.createElement(
    _Grid2.default,
    _extends({ item: true }, rest, { className: classes.grid }),
    children
  );
}

GridItem.propTypes = {
  children: _propTypes2.default.node
};