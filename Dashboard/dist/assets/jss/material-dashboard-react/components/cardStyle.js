"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialDashboardReact = require("../../material-dashboard-react.js");

var cardStyle = {
  card: {
    border: "0",
    marginBottom: "30px",
    marginTop: "30px",
    borderRadius: "6px",
    color: "rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ", 0.87)",
    background: _materialDashboardReact.whiteColor,
    width: "100%",
    boxShadow: "0 1px 4px 0 rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ", 0.14)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    minWidth: "0",
    wordWrap: "break-word",
    fontSize: ".875rem"
  },
  cardPlain: {
    background: "transparent",
    boxShadow: "none"
  },
  cardProfile: {
    marginTop: "30px",
    textAlign: "center"
  },
  cardChart: {
    "& p": {
      marginTop: "0px",
      paddingTop: "0px"
    }
  }
};

exports.default = cardStyle;