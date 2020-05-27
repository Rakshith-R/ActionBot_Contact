"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialDashboardReact = require("../../material-dashboard-react.js");

var rtlStyle = {
  successText: {
    color: _materialDashboardReact.successColor[0]
  },
  upArrowCardCategory: {
    width: "16px",
    height: "16px"
  },
  stats: {
    color: _materialDashboardReact.grayColor[0],
    display: "inline-flex",
    fontSize: "12px",
    lineHeight: "22px",
    "& svg": {
      top: "4px",
      width: "16px",
      height: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      top: "4px",
      fontSize: "16px",
      position: "relative",
      marginRight: "3px",
      marginLeft: "3px"
    }
  },
  cardCategory: {
    color: _materialDashboardReact.grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardCategoryWhite: {
    color: "rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.whiteColor) + ",.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
    "& a": {
      color: _materialDashboardReact.whiteColor
    }
  },
  cardTitle: {
    color: _materialDashboardReact.grayColor[2],
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

exports.default = rtlStyle;