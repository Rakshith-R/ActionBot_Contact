"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SnackbarContent;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require("@material-ui/core/styles");

var _SnackbarContent = require("@material-ui/core/SnackbarContent");

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Close = require("@material-ui/icons/Close");

var _Close2 = _interopRequireDefault(_Close);

var _snackbarContentStyle = require("../../assets/jss/material-dashboard-react/components/snackbarContentStyle.js");

var _snackbarContentStyle2 = _interopRequireDefault(_snackbarContentStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// @material-ui/core components

// @material-ui/icons

// core components


var useStyles = (0, _styles.makeStyles)(_snackbarContentStyle2.default);

function SnackbarContent(props) {
  var classes = useStyles();
  var message = props.message,
      color = props.color,
      close = props.close,
      icon = props.icon,
      rtlActive = props.rtlActive;

  var action = [];
  var messageClasses = (0, _classnames2.default)(_defineProperty({}, classes.iconMessage, icon !== undefined));
  if (close !== undefined) {
    action = [_react2.default.createElement(
      _IconButton2.default,
      {
        className: classes.iconButton,
        key: "close",
        "aria-label": "Close",
        color: "inherit"
      },
      _react2.default.createElement(_Close2.default, { className: classes.close })
    )];
  }
  return _react2.default.createElement(_SnackbarContent2.default, {
    message: _react2.default.createElement(
      "div",
      null,
      icon !== undefined ? _react2.default.createElement(props.icon, { className: classes.icon }) : null,
      _react2.default.createElement(
        "span",
        { className: messageClasses },
        message
      )
    ),
    classes: {
      root: classes.root + " " + classes[color],
      message: classes.message,
      action: (0, _classnames2.default)(_defineProperty({}, classes.actionRTL, rtlActive))
    },
    action: action
  });
}

SnackbarContent.propTypes = {
  message: _propTypes2.default.node.isRequired,
  color: _propTypes2.default.oneOf(["info", "success", "warning", "danger", "primary"]),
  close: _propTypes2.default.bool,
  icon: _propTypes2.default.object,
  rtlActive: _propTypes2.default.bool
};