"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react.js");

var tableStyle = function tableStyle(theme) {
  return {
    warningTableHeader: {
      color: _materialDashboardReact.warningColor[0]
    },
    primaryTableHeader: {
      color: _materialDashboardReact.primaryColor[0]
    },
    dangerTableHeader: {
      color: _materialDashboardReact.dangerColor[0]
    },
    successTableHeader: {
      color: _materialDashboardReact.successColor[0]
    },
    infoTableHeader: {
      color: _materialDashboardReact.infoColor[0]
    },
    roseTableHeader: {
      color: _materialDashboardReact.roseColor[0]
    },
    grayTableHeader: {
      color: _materialDashboardReact.grayColor[0]
    },
    table: {
      marginBottom: "0",
      width: "100%",
      maxWidth: "100%",
      backgroundColor: "transparent",
      borderSpacing: "0",
      borderCollapse: "collapse"
    },
    tableHeadCell: _extends({
      color: "inherit"
    }, _materialDashboardReact.defaultFont, {
      "&, &$tableCell": {
        fontSize: "1em"
      }
    }),
    tableCell: _extends({}, _materialDashboardReact.defaultFont, {
      lineHeight: "1.42857143",
      padding: "12px 8px",
      verticalAlign: "middle",
      fontSize: "0.8125rem"
    }),
    tableResponsive: {
      width: "100%",
      marginTop: theme.spacing(3),
      overflowX: "auto"
    },
    tableHeadRow: {
      height: "56px",
      color: "inherit",
      display: "table-row",
      outline: "none",
      verticalAlign: "middle"
    },
    tableBodyRow: {
      height: "48px",
      color: "inherit",
      display: "table-row",
      outline: "none",
      verticalAlign: "middle"
    }
  };
};

exports.default = tableStyle;