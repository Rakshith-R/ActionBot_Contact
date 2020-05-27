"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CardHeader;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _cardHeaderStyle = require("../../assets/jss/material-dashboard-react/components/cardHeaderStyle.js");

var _cardHeaderStyle2 = _interopRequireDefault(_cardHeaderStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


var useStyles = (0, _styles.makeStyles)(_cardHeaderStyle2.default);

function CardHeader(props) {
  var _classNames;

  var classes = useStyles();

  var className = props.className,
      children = props.children,
      color = props.color,
      plain = props.plain,
      stats = props.stats,
      icon = props.icon,
      rest = _objectWithoutProperties(props, ["className", "children", "color", "plain", "stats", "icon"]);

  var cardHeaderClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardHeader, true), _defineProperty(_classNames, classes[color + "CardHeader"], color), _defineProperty(_classNames, classes.cardHeaderPlain, plain), _defineProperty(_classNames, classes.cardHeaderStats, stats), _defineProperty(_classNames, classes.cardHeaderIcon, icon), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardHeaderClasses }, rest),
    children
  );
}

CardHeader.propTypes = {
  className: _propTypes2.default.string,
  color: _propTypes2.default.oneOf(["warning", "success", "danger", "info", "primary", "rose"]),
  plain: _propTypes2.default.bool,
  stats: _propTypes2.default.bool,
  icon: _propTypes2.default.bool,
  children: _propTypes2.default.node
};