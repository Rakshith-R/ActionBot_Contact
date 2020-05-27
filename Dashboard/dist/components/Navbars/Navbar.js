"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _AppBar = require("@material-ui/core/AppBar");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require("@material-ui/core/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _IconButton = require("@material-ui/core/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Hidden = require("@material-ui/core/Hidden");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Menu = require("@material-ui/icons/Menu");

var _Menu2 = _interopRequireDefault(_Menu);

var _AdminNavbarLinks = require("./AdminNavbarLinks.js");

var _AdminNavbarLinks2 = _interopRequireDefault(_AdminNavbarLinks);

var _RTLNavbarLinks = require("./RTLNavbarLinks.js");

var _RTLNavbarLinks2 = _interopRequireDefault(_RTLNavbarLinks);

var _Button = require("../CustomButtons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _headerStyle = require("../../assets/jss/material-dashboard-react/components/headerStyle.js");

var _headerStyle2 = _interopRequireDefault(_headerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// @material-ui/core components

// @material-ui/icons

// core components


var useStyles = (0, _styles.makeStyles)(_headerStyle2.default);

function Header(props) {
  var classes = useStyles();
  function makeBrand() {
    var name;
    props.routes.map(function (prop) {
      if (window.location.href.indexOf(prop.layout + prop.path) !== -1) {
        name = props.rtlActive ? prop.rtlName : prop.name;
      }
      return null;
    });
    return name;
  }
  var color = props.color;

  var appBarClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes[color], color));
  return _react2.default.createElement(
    _AppBar2.default,
    { className: classes.appBar + appBarClasses },
    _react2.default.createElement(
      _Toolbar2.default,
      { className: classes.container },
      _react2.default.createElement(
        "div",
        { className: classes.flex },
        _react2.default.createElement(
          _Button2.default,
          { color: "transparent", href: "#", className: classes.title },
          makeBrand()
        )
      ),
      _react2.default.createElement(
        _Hidden2.default,
        { smDown: true, implementation: "css" },
        props.rtlActive ? _react2.default.createElement(_RTLNavbarLinks2.default, null) : _react2.default.createElement(_AdminNavbarLinks2.default, null)
      ),
      _react2.default.createElement(
        _Hidden2.default,
        { mdUp: true, implementation: "css" },
        _react2.default.createElement(
          _IconButton2.default,
          {
            color: "inherit",
            "aria-label": "open drawer",
            onClick: props.handleDrawerToggle
          },
          _react2.default.createElement(_Menu2.default, null)
        )
      )
    )
  );
}

Header.propTypes = {
  color: _propTypes2.default.oneOf(["primary", "info", "success", "warning", "danger"]),
  rtlActive: _propTypes2.default.bool,
  handleDrawerToggle: _propTypes2.default.func,
  routes: _propTypes2.default.arrayOf(_propTypes2.default.object)
};