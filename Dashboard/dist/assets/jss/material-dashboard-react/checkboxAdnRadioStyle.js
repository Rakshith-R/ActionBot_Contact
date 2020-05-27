"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialDashboardReact = require("../material-dashboard-react.js");

var checkboxAdnRadioStyle = {
  root: {
    padding: "13px",
    "&:hover": {
      backgroundColor: "unset"
    }
  },
  labelRoot: {
    marginLeft: "-14px"
  },
  checked: {
    color: _materialDashboardReact.primaryColor[0] + "!important"
  },
  checkedIcon: {
    width: "20px",
    height: "20px",
    border: "1px solid rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ", .54)",
    borderRadius: "3px"
  },
  uncheckedIcon: {
    width: "0px",
    height: "0px",
    padding: "10px",
    border: "1px solid rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ", .54)",
    borderRadius: "3px"
  },
  radio: {
    color: _materialDashboardReact.primaryColor[0] + "!important"
  },
  radioChecked: {
    width: "20px",
    height: "20px",
    border: "1px solid " + _materialDashboardReact.primaryColor[0],
    borderRadius: "50%"
  },
  radioUnchecked: {
    width: "0px",
    height: "0px",
    padding: "10px",
    border: "1px solid rgba(" + (0, _materialDashboardReact.hexToRgb)(_materialDashboardReact.blackColor) + ", .54)",
    borderRadius: "50%"
  }
};

exports.default = checkboxAdnRadioStyle;