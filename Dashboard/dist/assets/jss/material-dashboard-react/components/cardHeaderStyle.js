"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _materialDashboardReact = require("../../material-dashboard-react.js");

var cardHeaderStyle = {
  cardHeader: {
    padding: "0.75rem 1.25rem",
    marginBottom: "0",
    borderBottom: "none",
    background: "transparent",
    zIndex: "3 !important",
    "&$cardHeaderPlain,&$cardHeaderIcon,&$cardHeaderStats,&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      margin: "0 15px",
      padding: "0",
      position: "relative",
      color: _materialDashboardReact.whiteColor
    },
    "&:first-child": {
      borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
    },
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      "&:not($cardHeaderIcon)": {
        borderRadius: "3px",
        marginTop: "-20px",
        padding: "15px"
      }
    },
    "&$cardHeaderStats svg": {
      fontSize: "36px",
      lineHeight: "56px",
      textAlign: "center",
      width: "36px",
      height: "36px",
      margin: "10px 10px 4px"
    },
    "&$cardHeaderStats i,&$cardHeaderStats .material-icons": {
      fontSize: "36px",
      lineHeight: "56px",
      width: "56px",
      height: "56px",
      textAlign: "center",
      overflow: "unset",
      marginBottom: "1px"
    },
    "&$cardHeaderStats$cardHeaderIcon": {
      textAlign: "right"
    }
  },
  cardHeaderPlain: {
    marginLeft: "0px !important",
    marginRight: "0px !important"
  },
  cardHeaderStats: {
    "& $cardHeaderIcon": {
      textAlign: "right"
    },
    "& h1,& h2,& h3,& h4,& h5,& h6": {
      margin: "0 !important"
    }
  },
  cardHeaderIcon: {
    "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader": {
      background: "transparent",
      boxShadow: "none"
    },
    "& i,& .material-icons": {
      width: "33px",
      height: "33px",
      textAlign: "center",
      lineHeight: "33px"
    },
    "& svg": {
      width: "24px",
      height: "24px",
      textAlign: "center",
      lineHeight: "33px",
      margin: "5px 4px 0px"
    }
  },
  warningCardHeader: {
    color: _materialDashboardReact.whiteColor,
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.warningCardHeader)
  },
  successCardHeader: {
    color: _materialDashboardReact.whiteColor,
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.successCardHeader)
  },
  dangerCardHeader: {
    color: _materialDashboardReact.whiteColor,
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.dangerCardHeader)
  },
  infoCardHeader: {
    color: _materialDashboardReact.whiteColor,
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.infoCardHeader)
  },
  primaryCardHeader: {
    color: _materialDashboardReact.whiteColor,
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.primaryCardHeader)
  },
  roseCardHeader: {
    color: _materialDashboardReact.whiteColor,
    "&:not($cardHeaderIcon)": _extends({}, _materialDashboardReact.roseCardHeader)
  }
};

exports.default = cardHeaderStyle;