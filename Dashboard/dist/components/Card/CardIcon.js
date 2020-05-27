"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CardIcon;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _cardIconStyle = require("../../assets/jss/material-dashboard-react/components/cardIconStyle.js");

var _cardIconStyle2 = _interopRequireDefault(_cardIconStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


var useStyles = (0, _styles.makeStyles)(_cardIconStyle2.default);

function CardIcon(props) {
  var _classNames;

  var classes = useStyles();

  var className = props.className,
      children = props.children,
      color = props.color,
      rest = _objectWithoutProperties(props, ["className", "children", "color"]);

  var cardIconClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardIcon, true), _defineProperty(_classNames, classes[color + "CardHeader"], color), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardIconClasses }, rest),
    children
  );
}

CardIcon.propTypes = {
  className: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  children: _propTypes2.default.node
};