"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = RegularButton;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _Button = require("@material-ui/core/Button");

var _Button2 = _interopRequireDefault(_Button);

var _buttonStyle = require("../../assets/jss/material-dashboard-react/components/buttonStyle.js");

var _buttonStyle2 = _interopRequireDefault(_buttonStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components


// material-ui components


var useStyles = (0, _styles.makeStyles)(_buttonStyle2.default);

function RegularButton(props) {
  var _classNames;

  var classes = useStyles();

  var color = props.color,
      round = props.round,
      children = props.children,
      disabled = props.disabled,
      simple = props.simple,
      size = props.size,
      block = props.block,
      link = props.link,
      justIcon = props.justIcon,
      className = props.className,
      muiClasses = props.muiClasses,
      rest = _objectWithoutProperties(props, ["color", "round", "children", "disabled", "simple", "size", "block", "link", "justIcon", "className", "muiClasses"]);

  var btnClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.button, true), _defineProperty(_classNames, classes[size], size), _defineProperty(_classNames, classes[color], color), _defineProperty(_classNames, classes.round, round), _defineProperty(_classNames, classes.disabled, disabled), _defineProperty(_classNames, classes.simple, simple), _defineProperty(_classNames, classes.block, block), _defineProperty(_classNames, classes.link, link), _defineProperty(_classNames, classes.justIcon, justIcon), _defineProperty(_classNames, className, className), _classNames));
  return _react2.default.createElement(
    _Button2.default,
    _extends({}, rest, { classes: muiClasses, className: btnClasses }),
    children
  );
}

RegularButton.propTypes = {
  color: _propTypes2.default.oneOf(["primary", "info", "success", "warning", "danger", "rose", "white", "transparent"]),
  size: _propTypes2.default.oneOf(["sm", "lg"]),
  simple: _propTypes2.default.bool,
  round: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  link: _propTypes2.default.bool,
  justIcon: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  // use this to pass the classes props from Material-UI
  muiClasses: _propTypes2.default.object,
  children: _propTypes2.default.node
};