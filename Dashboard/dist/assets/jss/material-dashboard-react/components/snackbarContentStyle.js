"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react.js");

var snackbarContentStyle = {
  root: _extends({}, _materialDashboardReact.defaultFont, {
    flexWrap: "unset",
    position: "relative",
    padding: "20px 15px",
    lineHeight: "20px",
    marginBottom: "20px",
    fontSize: "14px",
    backgroundColor: _materialDashboardReact.whiteColor,
    color: _materialDashboardReact.grayColor[7],
    borderRadius: "3px",
    minWidth: "unset",
    maxWidth: "unset",
    boxShadow: "0 12px 20px -10px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.whiteColor) + ", 0.28), 0 4px 20px 0px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ", 0.12), 0 7px 8px -5px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.whiteColor) + ", 0.2)"
  }),
  top20: {
    top: "20px"
  },
  top40: {
    top: "40px"
  },
  info: _extends({
    backgroundColor: _materialDashboardReact.infoColor[3],
    color: _materialDashboardReact.whiteColor
  }, _materialDashboardReact.infoBoxShadow),
  success: _extends({
    backgroundColor: _materialDashboardReact.successColor[3],
    color: _materialDashboardReact.whiteColor
  }, _materialDashboardReact.successBoxShadow),
  warning: _extends({
    backgroundColor: _materialDashboardReact.warningColor[3],
    color: _materialDashboardReact.whiteColor
  }, _materialDashboardReact.warningBoxShadow),
  danger: _extends({
    backgroundColor: _materialDashboardReact.dangerColor[3],
    color: _materialDashboardReact.whiteColor
  }, _materialDashboardReact.dangerBoxShadow),
  primary: _extends({
    backgroundColor: _materialDashboardReact.primaryColor[3],
    color: _materialDashboardReact.whiteColor
  }, _materialDashboardReact.primaryBoxShadow),
  rose: _extends({
    backgroundColor: _materialDashboardReact.roseColor[3],
    color: _materialDashboardReact.whiteColor
  }, _materialDashboardReact.roseBoxShadow),
  message: {
    padding: "0",
    display: "block",
    maxWidth: "89%"
  },
  close: {
    width: "11px",
    height: "11px"
  },
  iconButton: {
    width: "24px",
    height: "24px",
    padding: "0px"
  },
  icon: {
    display: "block",
    left: "15px",
    position: "absolute",
    top: "50%",
    marginTop: "-15px",
    width: "30px",
    height: "30px"
  },
  infoIcon: {
    color: _materialDashboardReact.infoColor[3]
  },
  successIcon: {
    color: _materialDashboardReact.successColor[3]
  },
  warningIcon: {
    color: _materialDashboardReact.warningColor[3]
  },
  dangerIcon: {
    color: _materialDashboardReact.dangerColor[3]
  },
  primaryIcon: {
    color: _materialDashboardReact.primaryColor[3]
  },
  roseIcon: {
    color: _materialDashboardReact.roseColor[3]
  },
  iconMessage: {
    paddingLeft: "50px",
    display: "block"
  },
  actionRTL: {
    marginLeft: "-8px",
    marginRight: "auto"
  }
};

exports.default = snackbarContentStyle;