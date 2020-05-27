"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = RTL;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require("react-router-dom");

var _perfectScrollbar = require("perfect-scrollbar");

var _perfectScrollbar2 = _interopRequireDefault(_perfectScrollbar);

require("perfect-scrollbar/css/perfect-scrollbar.css");

var _styles = require("@material-ui/core/styles");

var _Navbar = require("../components/Navbars/Navbar.js");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Footer = require("../components/Footer/Footer.js");

var _Footer2 = _interopRequireDefault(_Footer);

var _Sidebar = require("../components/Sidebar/Sidebar.js");

var _Sidebar2 = _interopRequireDefault(_Sidebar);

var _FixedPlugin = require("../components/FixedPlugin/FixedPlugin.js");

var _FixedPlugin2 = _interopRequireDefault(_FixedPlugin);

var _routes = require("../routes.js");

var _routes2 = _interopRequireDefault(_routes);

var _rtlStyle = require("../assets/jss/material-dashboard-react/layouts/rtlStyle.js");

var _rtlStyle2 = _interopRequireDefault(_rtlStyle);

var _sidebar = require("../assets/img/sidebar-2.jpg");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _reactlogo = require("../assets/img/reactlogo.png");

var _reactlogo2 = _interopRequireDefault(_reactlogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
// creates a beautiful scrollbar

// @material-ui/core components

// core components


var ps = void 0;

var switchRoutes = _react2.default.createElement(
  _reactRouterDom.Switch,
  null,
  _routes2.default.map(function (prop, key) {
    if (prop.layout === "/rtl") {
      return _react2.default.createElement(_reactRouterDom.Route, {
        path: prop.layout + prop.path,
        component: prop.component,
        key: key
      });
    }
    return null;
  }),
  _react2.default.createElement(_reactRouterDom.Redirect, { from: "/rtl", to: "/rtl/rtl-page" })
);

var useStyles = (0, _styles.makeStyles)(_rtlStyle2.default);

function RTL(_ref) {
  var rest = _objectWithoutProperties(_ref, []);

  // styles
  var classes = useStyles();
  // ref to help us initialize PerfectScrollbar on windows devices
  var mainPanel = _react2.default.createRef();
  // states and functions

  var _React$useState = _react2.default.useState(_sidebar2.default),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      image = _React$useState2[0],
      setImage = _React$useState2[1];

  var _React$useState3 = _react2.default.useState("blue"),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      color = _React$useState4[0],
      setColor = _React$useState4[1];

  var _React$useState5 = _react2.default.useState("dropdown show"),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      fixedClasses = _React$useState6[0],
      setFixedClasses = _React$useState6[1];

  var _React$useState7 = _react2.default.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      mobileOpen = _React$useState8[0],
      setMobileOpen = _React$useState8[1];

  var handleImageClick = function handleImageClick(image) {
    setImage(image);
  };
  var handleColorClick = function handleColorClick(color) {
    setColor(color);
  };
  var handleFixedClick = function handleFixedClick() {
    if (fixedClasses === "dropdown") {
      setFixedClasses("dropdown show");
    } else {
      setFixedClasses("dropdown");
    }
  };
  var handleDrawerToggle = function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  };
  var getRoute = function getRoute() {
    return window.location.pathname !== "/admin/maps";
  };
  var resizeFunction = function resizeFunction() {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };
  // initialize and destroy the PerfectScrollbar plugin
  _react2.default.useEffect(function () {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new _perfectScrollbar2.default(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return _react2.default.createElement(
    "div",
    { className: classes.wrapper },
    _react2.default.createElement(_Sidebar2.default, _extends({
      routes: _routes2.default,
      logoText: "الإبداعية تيم",
      logo: _reactlogo2.default,
      image: image,
      handleDrawerToggle: handleDrawerToggle,
      open: mobileOpen,
      color: color,
      rtlActive: true
    }, rest)),
    _react2.default.createElement(
      "div",
      { className: classes.mainPanel, ref: mainPanel },
      _react2.default.createElement(_Navbar2.default, _extends({
        routes: _routes2.default,
        handleDrawerToggle: handleDrawerToggle,
        rtlActive: true
      }, rest)),
      getRoute() ? _react2.default.createElement(
        "div",
        { className: classes.content },
        _react2.default.createElement(
          "div",
          { className: classes.container },
          switchRoutes
        )
      ) : _react2.default.createElement(
        "div",
        { className: classes.map },
        switchRoutes
      ),
      getRoute() ? _react2.default.createElement(_Footer2.default, null) : null,
      _react2.default.createElement(_FixedPlugin2.default, {
        handleImageClick: handleImageClick,
        handleColorClick: handleColorClick,
        bgColor: color,
        bgImage: image,
        handleFixedClick: handleFixedClick,
        fixedClasses: fixedClasses,
        rtlActive: true
      })
    )
  );
}