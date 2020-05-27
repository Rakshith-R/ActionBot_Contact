"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react.js");

var iconsStyle = {
  iframe: _extends({
    width: "100%",
    height: "500px",
    border: "0"
  }, _materialDashboardReact.boxShadow),
  iframeContainer: {
    margin: "0 -20px 0"
  },
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.whiteColor) + ",.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: _materialDashboardReact.whiteColor
    }
  },
  cardTitleWhite: {
    color: _materialDashboardReact.whiteColor,
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: _materialDashboardReact.grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

exports.default = iconsStyle;