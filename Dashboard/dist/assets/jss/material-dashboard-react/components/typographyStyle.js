"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react.js");

var typographyStyle = {
  defaultFontStyle: _extends({}, _materialDashboardReact.defaultFont, {
    fontSize: "14px"
  }),
  defaultHeaderMargins: {
    marginTop: "20px",
    marginBottom: "10px"
  },
  quote: {
    padding: "10px 20px",
    margin: "0 0 20px",
    fontSize: "17.5px",
    borderLeft: "5px solid " + _materialDashboardReact.grayColor[10]
  },
  quoteText: {
    margin: "0 0 10px",
    fontStyle: "italic"
  },
  quoteAuthor: {
    display: "block",
    fontSize: "80%",
    lineHeight: "1.42857143",
    color: _materialDashboardReact.grayColor[1]
  },
  mutedText: {
    color: _materialDashboardReact.grayColor[1]
  },
  primaryText: {
    color: _materialDashboardReact.primaryColor[0]
  },
  infoText: {
    color: _materialDashboardReact.infoColor[0]
  },
  successText: {
    color: _materialDashboardReact.successColor[0]
  },
  warningText: {
    color: _materialDashboardReact.warningColor[0]
  },
  dangerText: {
    color: _materialDashboardReact.dangerColor[0]
  }
};

exports.default = typographyStyle;