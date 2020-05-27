"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*!

 =========================================================
 * Material Dashboard React - v1.8.0 based on Material Dashboard - v1.2.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2019 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */

// ##############################
// // // Function that converts from hex color to rgb color
// // // Example: input = #9c27b0 => output = 156, 39, 176
// // // Example: input = 9c27b0 => output = 156, 39, 176
// // // Example: input = #999 => output = 153, 153, 153
// // // Example: input = 999 => output = 153, 153, 153
// #############################
var hexToRgb = function hexToRgb(input) {
  input = input + "";
  input = input.replace("#", "");
  var hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || input.length !== 3 && input.length !== 6) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    var _first = input[0];
    var _second = input[1];
    var _last = input[2];
    input = _first + _first + _second + _second + _last + _last;
  }
  input = input.toUpperCase(input);
  var first = input[0] + input[1];
  var second = input[2] + input[3];
  var last = input[4] + input[5];
  return parseInt(first, 16) + ", " + parseInt(second, 16) + ", " + parseInt(last, 16);
};

// ##############################
// // // Variables - Styles that are used on more than one component
// #############################

var drawerWidth = 260;

var transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

var container = {
  paddingRight: "15px",
  paddingLeft: "15px",
  marginRight: "auto",
  marginLeft: "auto"
};

var defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

var primaryColor = ["#9c27b0", "#ab47bc", "#8e24aa", "#af2cc5"];
var warningColor = ["#ff9800", "#ffa726", "#fb8c00", "#ffa21a"];
var dangerColor = ["#f44336", "#ef5350", "#e53935", "#f55a4e"];
var successColor = ["#4caf50", "#66bb6a", "#43a047", "#5cb860"];
var infoColor = ["#00acc1", "#26c6da", "#00acc1", "#00d3ee"];
var roseColor = ["#e91e63", "#ec407a", "#d81b60", "#eb3573"];
var grayColor = ["#999", "#777", "#3C4858", "#AAAAAA", "#D2D2D2", "#DDD", "#b4b4b4", "#555555", "#333", "#a9afbb", "#eee", "#e7e7e7"];
var blackColor = "#000";
var whiteColor = "#FFF";

var boxShadow = {
  boxShadow: "0 10px 30px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 4px 25px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)"
};

var primaryBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(primaryColor[0]) + ",.4)"
};
var infoBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(infoColor[0]) + ",.4)"
};
var successBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(successColor[0]) + ",.4)"
};
var warningBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(warningColor[0]) + ",.4)"
};
var dangerBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(dangerColor[0]) + ",.4)"
};
var roseBoxShadow = {
  boxShadow: "0 4px 20px 0 rgba(" + hexToRgb(blackColor) + ",.14), 0 7px 10px -5px rgba(" + hexToRgb(roseColor[0]) + ",.4)"
};

var warningCardHeader = _extends({
  background: "linear-gradient(60deg, " + warningColor[1] + ", " + warningColor[2] + ")"
}, warningBoxShadow);
var successCardHeader = _extends({
  background: "linear-gradient(60deg, " + successColor[1] + ", " + successColor[2] + ")"
}, successBoxShadow);
var dangerCardHeader = _extends({
  background: "linear-gradient(60deg, " + dangerColor[1] + ", " + dangerColor[2] + ")"
}, dangerBoxShadow);
var infoCardHeader = _extends({
  background: "linear-gradient(60deg, " + infoColor[1] + ", " + infoColor[2] + ")"
}, infoBoxShadow);
var primaryCardHeader = _extends({
  background: "linear-gradient(60deg, " + primaryColor[1] + ", " + primaryColor[2] + ")"
}, primaryBoxShadow);
var roseCardHeader = _extends({
  background: "linear-gradient(60deg, " + roseColor[1] + ", " + roseColor[2] + ")"
}, roseBoxShadow);

var cardActions = _extends({
  margin: "0 20px 10px",
  paddingTop: "10px",
  borderTop: "1px solid " + grayColor[10],
  height: "auto"
}, defaultFont);

var cardHeader = {
  margin: "-20px 15px 0",
  borderRadius: "3px",
  padding: "15px"
};

var card = {
  display: "inline-block",
  position: "relative",
  width: "100%",
  margin: "25px 0",
  boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
  borderRadius: "3px",
  color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
  background: whiteColor
};

var defaultBoxShadow = {
  border: "0",
  borderRadius: "3px",
  boxShadow: "0 10px 20px -12px rgba(" + hexToRgb(blackColor) + ", 0.42), 0 3px 20px 0px rgba(" + hexToRgb(blackColor) + ", 0.12), 0 8px 10px -5px rgba(" + hexToRgb(blackColor) + ", 0.2)",
  padding: "10px 0",
  transition: "all 150ms ease 0s"
};

var title = {
  color: grayColor[2],
  textDecoration: "none",
  fontWeight: "300",
  marginTop: "30px",
  marginBottom: "25px",
  minHeight: "32px",
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  "& small": {
    color: grayColor[1],
    fontWeight: "400",
    lineHeight: "1"
  }
};

var cardTitle = _extends({}, title, {
  marginTop: "0",
  marginBottom: "3px",
  minHeight: "auto",
  "& a": _extends({}, title, {
    marginTop: ".625rem",
    marginBottom: "0.75rem",
    minHeight: "auto"
  })
});

var cardSubtitle = {
  marginTop: "-.375rem"
};

var cardLink = {
  "& + $cardLink": {
    marginLeft: "1.25rem"
  }
};

exports.hexToRgb = hexToRgb;
exports.drawerWidth = drawerWidth;
exports.transition = transition;
exports.container = container;
exports.boxShadow = boxShadow;
exports.card = card;
exports.defaultFont = defaultFont;
exports.primaryColor = primaryColor;
exports.warningColor = warningColor;
exports.dangerColor = dangerColor;
exports.successColor = successColor;
exports.infoColor = infoColor;
exports.roseColor = roseColor;
exports.grayColor = grayColor;
exports.blackColor = blackColor;
exports.whiteColor = whiteColor;
exports.primaryBoxShadow = primaryBoxShadow;
exports.infoBoxShadow = infoBoxShadow;
exports.successBoxShadow = successBoxShadow;
exports.warningBoxShadow = warningBoxShadow;
exports.dangerBoxShadow = dangerBoxShadow;
exports.roseBoxShadow = roseBoxShadow;
exports.warningCardHeader = warningCardHeader;
exports.successCardHeader = successCardHeader;
exports.dangerCardHeader = dangerCardHeader;
exports.infoCardHeader = infoCardHeader;
exports.primaryCardHeader = primaryCardHeader;
exports.roseCardHeader = roseCardHeader;
exports.cardActions = cardActions;
exports.cardHeader = cardHeader;
exports.defaultBoxShadow = defaultBoxShadow;
exports.title = title;
exports.cardTitle = cardTitle;
exports.cardSubtitle = cardSubtitle;
exports.cardLink = cardLink;