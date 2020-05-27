"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sidebarStyle = function sidebarStyle(theme) {
  var _extends2, _drawerPaperRTL;

  return {
    drawerPaper: _extends({
      border: "none",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      zIndex: "1"
    }, _materialDashboardReact.boxShadow, (_extends2 = {
      width: _materialDashboardReact.drawerWidth
    }, _defineProperty(_extends2, theme.breakpoints.up("md"), {
      width: _materialDashboardReact.drawerWidth,
      position: "fixed",
      height: "100%"
    }), _defineProperty(_extends2, theme.breakpoints.down("sm"), _extends({
      width: _materialDashboardReact.drawerWidth
    }, _materialDashboardReact.boxShadow, {
      position: "fixed",
      display: "block",
      top: "0",
      height: "100vh",
      right: "0",
      left: "auto",
      zIndex: "1032",
      visibility: "visible",
      overflowY: "visible",
      borderTop: "none",
      textAlign: "left",
      paddingRight: "0px",
      paddingLeft: "0",
      transform: "translate3d(" + _materialDashboardReact.drawerWidth + "px, 0, 0)"
    }, _materialDashboardReact.transition)), _extends2)),
    drawerPaperRTL: (_drawerPaperRTL = {}, _defineProperty(_drawerPaperRTL, theme.breakpoints.up("md"), {
      left: "auto !important",
      right: "0 !important"
    }), _defineProperty(_drawerPaperRTL, theme.breakpoints.down("sm"), {
      left: "0  !important",
      right: "auto !important"
    }), _drawerPaperRTL),
    logo: {
      position: "relative",
      padding: "15px 15px",
      zIndex: "4",
      "&:after": {
        content: '""',
        position: "absolute",
        bottom: "0",

        height: "1px",
        right: "15px",
        width: "calc(100% - 30px)",
        backgroundColor: "rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.grayColor[6]) + ", 0.3)"
      }
    },
    logoLink: _extends({}, _materialDashboardReact.defaultFont, {
      textTransform: "uppercase",
      padding: "5px 0",
      display: "block",
      fontSize: "18px",
      textAlign: "left",
      fontWeight: "400",
      lineHeight: "30px",
      textDecoration: "none",
      backgroundColor: "transparent",
      "&,&:hover": {
        color: _materialDashboardReact.whiteColor
      }
    }),
    logoLinkRTL: {
      textAlign: "right"
    },
    logoImage: {
      width: "30px",
      display: "inline-block",
      maxHeight: "30px",
      marginLeft: "10px",
      marginRight: "15px"
    },
    img: {
      width: "35px",
      top: "22px",
      position: "absolute",
      verticalAlign: "middle",
      border: "0"
    },
    background: {
      position: "absolute",
      zIndex: "1",
      height: "100%",
      width: "100%",
      display: "block",
      top: "0",
      left: "0",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "3",
        width: "100%",
        height: "100%",
        content: '""',
        display: "block",
        background: _materialDashboardReact.blackColor,
        opacity: ".8"
      }
    },
    list: {
      marginTop: "20px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "unset"
    },
    item: {
      position: "relative",
      display: "block",
      textDecoration: "none",
      "&:hover,&:focus,&:visited,&": {
        color: _materialDashboardReact.whiteColor
      }
    },
    itemLink: _extends({
      width: "auto",
      transition: "all 300ms linear",
      margin: "10px 15px 0",
      borderRadius: "3px",
      position: "relative",
      display: "block",
      padding: "10px 15px",
      backgroundColor: "transparent"
    }, _materialDashboardReact.defaultFont),
    itemIcon: {
      width: "24px",
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      color: "rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.whiteColor) + ", 0.8)"
    },
    itemIconRTL: {
      marginRight: "3px",
      marginLeft: "15px",
      float: "right"
    },
    itemText: _extends({}, _materialDashboardReact.defaultFont, {
      margin: "0",
      lineHeight: "30px",
      fontSize: "14px",
      color: _materialDashboardReact.whiteColor
    }),
    itemTextRTL: {
      textAlign: "right"
    },
    whiteFont: {
      color: _materialDashboardReact.whiteColor
    },
    purple: _extends({
      backgroundColor: _materialDashboardReact.primaryColor[0]
    }, _materialDashboardReact.primaryBoxShadow, {
      "&:hover,&:focus": _extends({
        backgroundColor: _materialDashboardReact.primaryColor[0]
      }, _materialDashboardReact.primaryBoxShadow)
    }),
    blue: {
      backgroundColor: _materialDashboardReact.infoColor[0],
      boxShadow: "0 12px 20px -10px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.infoColor[0]) + ",.28), 0 4px 20px 0 rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ",.12), 0 7px 8px -5px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.infoColor[0]) + ",.2)",
      "&:hover,&:focus": {
        backgroundColor: _materialDashboardReact.infoColor[0],
        boxShadow: "0 12px 20px -10px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.infoColor[0]) + ",.28), 0 4px 20px 0 rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ",.12), 0 7px 8px -5px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.infoColor[0]) + ",.2)"
      }
    },
    green: {
      backgroundColor: _materialDashboardReact.successColor[0],
      boxShadow: "0 12px 20px -10px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.successColor[0]) + ",.28), 0 4px 20px 0 rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ",.12), 0 7px 8px -5px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.successColor[0]) + ",.2)",
      "&:hover,&:focus": {
        backgroundColor: _materialDashboardReact.successColor[0],
        boxShadow: "0 12px 20px -10px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.successColor[0]) + ",.28), 0 4px 20px 0 rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ",.12), 0 7px 8px -5px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.successColor[0]) + ",.2)"
      }
    },
    orange: {
      backgroundColor: _materialDashboardReact.warningColor[0],
      boxShadow: "0 12px 20px -10px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.warningColor[0]) + ",.28), 0 4px 20px 0 rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ",.12), 0 7px 8px -5px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.warningColor[0]) + ",.2)",
      "&:hover,&:focus": {
        backgroundColor: _materialDashboardReact.warningColor[0],
        boxShadow: "0 12px 20px -10px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.warningColor[0]) + ",.28), 0 4px 20px 0 rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ",.12), 0 7px 8px -5px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.warningColor[0]) + ",.2)"
      }
    },
    red: {
      backgroundColor: _materialDashboardReact.dangerColor[0],
      boxShadow: "0 12px 20px -10px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.dangerColor[0]) + ",.28), 0 4px 20px 0 rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ",.12), 0 7px 8px -5px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.dangerColor[0]) + ",.2)",
      "&:hover,&:focus": {
        backgroundColor: _materialDashboardReact.dangerColor[0],
        boxShadow: "0 12px 20px -10px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.dangerColor[0]) + ",.28), 0 4px 20px 0 rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ",.12), 0 7px 8px -5px rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.dangerColor[0]) + ",.2)"
      }
    },
    sidebarWrapper: {
      position: "relative",
      height: "calc(100vh - 75px)",
      overflow: "auto",
      width: "260px",
      zIndex: "4",
      overflowScrolling: "touch"
    },
    activePro: _defineProperty({}, theme.breakpoints.up("md"), {
      position: "absolute",
      width: "100%",
      bottom: "13px"
    })
  };
};

exports.default = sidebarStyle;