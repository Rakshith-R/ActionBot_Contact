"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CardBody;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _cardBodyStyle = require("../../assets/jss/material-dashboard-react/components/cardBodyStyle.js");

var _cardBodyStyle2 = _interopRequireDefault(_cardBodyStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// nodejs library that concatenates classes

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


var useStyles = (0, _styles.makeStyles)(_cardBodyStyle2.default);

function CardBody(props) {
  var _classNames;

  var classes = useStyles();

  var className = props.className,
      children = props.children,
      plain = props.plain,
      profile = props.profile,
      rest = _objectWithoutProperties(props, ["className", "children", "plain", "profile"]);

  var cardBodyClasses = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.cardBody, true), _defineProperty(_classNames, classes.cardBodyPlain, plain), _defineProperty(_classNames, classes.cardBodyProfile, profile), _defineProperty(_classNames, className, className !== undefined), _classNames));
  return _react2.default.createElement(
    "div",
    _extends({ className: cardBodyClasses }, rest),
    children
  );
}

CardBody.propTypes = {
  className: _propTypes2.default.string,
  plain: _propTypes2.default.bool,
  profile: _propTypes2.default.bool,
  children: _propTypes2.default.node
};