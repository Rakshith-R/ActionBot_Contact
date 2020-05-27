"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react.js");

var _tooltipStyle = require("../tooltipStyle.js");

var _tooltipStyle2 = _interopRequireDefault(_tooltipStyle);

var _checkboxAdnRadioStyle = require("../checkboxAdnRadioStyle.js");

var _checkboxAdnRadioStyle2 = _interopRequireDefault(_checkboxAdnRadioStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var tasksStyle = _extends({}, _tooltipStyle2.default, _checkboxAdnRadioStyle2.default, {
  table: {
    marginBottom: "0",
    overflow: "visible"
  },
  tableRow: {
    position: "relative",
    borderBottom: "1px solid " + _materialDashboardReact.grayColor[5]
  },
  tableActions: {
    display: "flex",
    border: "none",
    padding: "12px 8px !important",
    verticalAlign: "middle"
  },
  tableCell: _extends({}, _materialDashboardReact.defaultFont, {
    padding: "8px",
    verticalAlign: "middle",
    border: "none",
    lineHeight: "1.42857143",
    fontSize: "14px"
  }),
  tableCellRTL: {
    textAlign: "right"
  },
  tableActionButton: {
    width: "27px",
    height: "27px",
    padding: "0"
  },
  tableActionButtonIcon: {
    width: "17px",
    height: "17px"
  },
  edit: {
    backgroundColor: "transparent",
    color: _materialDashboardReact.primaryColor[0],
    boxShadow: "none"
  },
  close: {
    backgroundColor: "transparent",
    color: _materialDashboardReact.dangerColor[0],
    boxShadow: "none"
  }
});
exports.default = tasksStyle;