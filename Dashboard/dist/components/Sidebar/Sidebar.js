"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Sidebar;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require("react-router-dom");

var _styles = require("@material-ui/core/styles");

var _Drawer = require("@material-ui/core/Drawer");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Hidden = require("@material-ui/core/Hidden");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _List = require("@material-ui/core/List");

var _List2 = _interopRequireDefault(_List);

var _ListItem = require("@material-ui/core/ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _ListItemText = require("@material-ui/core/ListItemText");

var _ListItemText2 = _interopRequireDefault(_ListItemText);

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _AdminNavbarLinks = require("../Navbars/AdminNavbarLinks.js");

var _AdminNavbarLinks2 = _interopRequireDefault(_AdminNavbarLinks);

var _RTLNavbarLinks = require("../Navbars/RTLNavbarLinks.js");

var _RTLNavbarLinks2 = _interopRequireDefault(_RTLNavbarLinks);

var _sidebarStyle = require("../../assets/jss/material-dashboard-react/components/sidebarStyle.js");

var _sidebarStyle2 = _interopRequireDefault(_sidebarStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /*eslint-disable*/

// @material-ui/core components

// core components


var useStyles = (0, _styles.makeStyles)(_sidebarStyle2.default);

function Sidebar(props) {
  var classes = useStyles();
  // verifies if routeName is the one active (in browser input)
  function activeRoute(routeName) {
    return window.location.href.indexOf(routeName) > -1 ? true : false;
  }
  var color = props.color,
      logo = props.logo,
      image = props.image,
      logoText = props.logoText,
      routes = props.routes;

  var links = _react2.default.createElement(
    _List2.default,
    { className: classes.list },
    routes.map(function (prop, key) {
      var activePro = " ";
      var listItemClasses;
      if (prop.path === "/upgrade-to-pro") {
        activePro = classes.activePro + " ";
        listItemClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes[color], true));
      } else {
        listItemClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes[color], activeRoute(prop.layout + prop.path)));
      }
      var whiteFontClasses = (0, _classnames2.default)(_defineProperty({}, " " + classes.whiteFont, activeRoute(prop.layout + prop.path)));
      return _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
          to: prop.layout + prop.path,
          className: activePro + classes.item,
          activeClassName: "active",
          key: key
        },
        _react2.default.createElement(
          _ListItem2.default,
          { button: true, className: classes.itemLink + listItemClasses },
          typeof prop.icon === "string" ? _react2.default.createElement(
            _Icon2.default,
            {
              className: (0, _classnames2.default)(classes.itemIcon, whiteFontClasses, _defineProperty({}, classes.itemIconRTL, props.rtlActive))
            },
            prop.icon
          ) : _react2.default.createElement(prop.icon, {
            className: (0, _classnames2.default)(classes.itemIcon, whiteFontClasses, _defineProperty({}, classes.itemIconRTL, props.rtlActive))
          }),
          _react2.default.createElement(_ListItemText2.default, {
            primary: props.rtlActive ? prop.rtlName : prop.name,
            className: (0, _classnames2.default)(classes.itemText, whiteFontClasses, _defineProperty({}, classes.itemTextRTL, props.rtlActive)),
            disableTypography: true
          })
        )
      );
    })
  );
  var brand = _react2.default.createElement(
    "div",
    { className: classes.logo },
    _react2.default.createElement(
      "a",
      {
        href: "#",
        className: (0, _classnames2.default)(classes.logoLink, _defineProperty({}, classes.logoLinkRTL, props.rtlActive))
        // target="_blank"
      },
      _react2.default.createElement(
        "div",
        { className: classes.logoImage },
        _react2.default.createElement("img", { src: logo, alt: "logo", className: classes.img })
      ),
      logoText
    )
  );
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _Hidden2.default,
      { mdUp: true, implementation: "css" },
      _react2.default.createElement(
        _Drawer2.default,
        {
          variant: "temporary",
          anchor: props.rtlActive ? "left" : "right",
          open: props.open,
          classes: {
            paper: (0, _classnames2.default)(classes.drawerPaper, _defineProperty({}, classes.drawerPaperRTL, props.rtlActive))
          },
          onClose: props.handleDrawerToggle,
          ModalProps: {
            keepMounted: true // Better open performance on mobile.
          }
        },
        brand,
        _react2.default.createElement(
          "div",
          { className: classes.sidebarWrapper },
          props.rtlActive ? _react2.default.createElement(_RTLNavbarLinks2.default, null) : _react2.default.createElement(_AdminNavbarLinks2.default, null),
          links
        ),
        image !== undefined ? _react2.default.createElement("div", {
          className: classes.background,
          style: { backgroundImage: "url(" + image + ")" }
        }) : null
      )
    ),
    _react2.default.createElement(
      _Hidden2.default,
      { smDown: true, implementation: "css" },
      _react2.default.createElement(
        _Drawer2.default,
        {
          anchor: props.rtlActive ? "right" : "left",
          variant: "permanent",
          open: true,
          classes: {
            paper: (0, _classnames2.default)(classes.drawerPaper, _defineProperty({}, classes.drawerPaperRTL, props.rtlActive))
          }
        },
        brand,
        _react2.default.createElement(
          "div",
          { className: classes.sidebarWrapper },
          links
        ),
        image !== undefined ? _react2.default.createElement("div", {
          className: classes.background,
          style: { backgroundImage: "url(" + image + ")" }
        }) : null
      )
    )
  );
}

Sidebar.propTypes = {
  rtlActive: _propTypes2.default.bool,
  handleDrawerToggle: _propTypes2.default.func,
  bgColor: _propTypes2.default.oneOf(["purple", "blue", "green", "orange", "red"]),
  logo: _propTypes2.default.string,
  image: _propTypes2.default.string,
  logoText: _propTypes2.default.string,
  routes: _propTypes2.default.arrayOf(_propTypes2.default.object),
  open: _propTypes2.default.bool
};