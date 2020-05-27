"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// @material-ui/core components

// @material-ui/icons

// core components


exports.default = AdminNavbarLinks;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require("@material-ui/core/styles");

var _MenuItem = require("@material-ui/core/MenuItem");

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _MenuList = require("@material-ui/core/MenuList");

var _MenuList2 = _interopRequireDefault(_MenuList);

var _Grow = require("@material-ui/core/Grow");

var _Grow2 = _interopRequireDefault(_Grow);

var _Paper = require("@material-ui/core/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

var _ClickAwayListener = require("@material-ui/core/ClickAwayListener");

var _ClickAwayListener2 = _interopRequireDefault(_ClickAwayListener);

var _Hidden = require("@material-ui/core/Hidden");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _Popper = require("@material-ui/core/Popper");

var _Popper2 = _interopRequireDefault(_Popper);

var _Divider = require("@material-ui/core/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _Person = require("@material-ui/icons/Person");

var _Person2 = _interopRequireDefault(_Person);

var _Notifications = require("@material-ui/icons/Notifications");

var _Notifications2 = _interopRequireDefault(_Notifications);

var _Dashboard = require("@material-ui/icons/Dashboard");

var _Dashboard2 = _interopRequireDefault(_Dashboard);

var _Search = require("@material-ui/icons/Search");

var _Search2 = _interopRequireDefault(_Search);

var _CustomInput = require("../CustomInput/CustomInput.js");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _Button = require("../CustomButtons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _headerLinksStyle = require("../../assets/jss/material-dashboard-react/components/headerLinksStyle.js");

var _headerLinksStyle2 = _interopRequireDefault(_headerLinksStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(_headerLinksStyle2.default);

function AdminNavbarLinks() {
  var classes = useStyles();

  var _React$useState = _react2.default.useState(null),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      openNotification = _React$useState2[0],
      setOpenNotification = _React$useState2[1];

  var _React$useState3 = _react2.default.useState(null),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      openProfile = _React$useState4[0],
      setOpenProfile = _React$useState4[1];

  var handleClickNotification = function handleClickNotification(event) {
    if (openNotification && openNotification.contains(event.target)) {
      setOpenNotification(null);
    } else {
      setOpenNotification(event.currentTarget);
    }
  };
  var handleCloseNotification = function handleCloseNotification() {
    setOpenNotification(null);
  };
  var handleClickProfile = function handleClickProfile(event) {
    if (openProfile && openProfile.contains(event.target)) {
      setOpenProfile(null);
    } else {
      setOpenProfile(event.currentTarget);
    }
  };
  var handleCloseProfile = function handleCloseProfile() {
    setOpenProfile(null);
  };
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: classes.searchWrapper },
      _react2.default.createElement(_CustomInput2.default, {
        formControlProps: {
          className: classes.margin + " " + classes.search
        },
        inputProps: {
          placeholder: "Search",
          inputProps: {
            "aria-label": "Search"
          }
        }
      }),
      _react2.default.createElement(
        _Button2.default,
        { color: "white", "aria-label": "edit", justIcon: true, round: true },
        _react2.default.createElement(_Search2.default, null)
      )
    ),
    _react2.default.createElement(
      _Button2.default,
      {
        color: window.innerWidth > 959 ? "transparent" : "white",
        justIcon: window.innerWidth > 959,
        simple: !(window.innerWidth > 959),
        "aria-label": "Dashboard",
        className: classes.buttonLink
      },
      _react2.default.createElement(_Dashboard2.default, { className: classes.icons }),
      _react2.default.createElement(
        _Hidden2.default,
        { mdUp: true, implementation: "css" },
        _react2.default.createElement(
          "p",
          { className: classes.linkText },
          "Dashboard"
        )
      )
    ),
    _react2.default.createElement(
      "div",
      { className: classes.manager },
      _react2.default.createElement(
        _Button2.default,
        {
          color: window.innerWidth > 959 ? "transparent" : "white",
          justIcon: window.innerWidth > 959,
          simple: !(window.innerWidth > 959),
          "aria-owns": openNotification ? "notification-menu-list-grow" : null,
          "aria-haspopup": "true",
          onClick: handleClickNotification,
          className: classes.buttonLink
        },
        _react2.default.createElement(_Notifications2.default, { className: classes.icons }),
        _react2.default.createElement(
          "span",
          { className: classes.notifications },
          "2"
        ),
        _react2.default.createElement(
          _Hidden2.default,
          { mdUp: true, implementation: "css" },
          _react2.default.createElement(
            "p",
            { onClick: handleCloseNotification, className: classes.linkText },
            "Notification"
          )
        )
      ),
      _react2.default.createElement(
        _Popper2.default,
        {
          open: Boolean(openNotification),
          anchorEl: openNotification,
          transition: true,
          disablePortal: true,
          className: (0, _classnames2.default)(_defineProperty({}, classes.popperClose, !openNotification)) + " " + classes.popperNav
        },
        function (_ref) {
          var TransitionProps = _ref.TransitionProps,
              placement = _ref.placement;
          return _react2.default.createElement(
            _Grow2.default,
            _extends({}, TransitionProps, {
              id: "notification-menu-list-grow",
              style: {
                transformOrigin: placement === "bottom" ? "center top" : "center bottom"
              }
            }),
            _react2.default.createElement(
              _Paper2.default,
              null,
              _react2.default.createElement(
                _ClickAwayListener2.default,
                { onClickAway: handleCloseNotification },
                _react2.default.createElement(
                  _MenuList2.default,
                  { role: "menu" },
                  _react2.default.createElement(
                    _MenuItem2.default,
                    {
                      onClick: handleCloseNotification,
                      className: classes.dropdownItem
                    },
                    "5 new Incidents to Report"
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    {
                      onClick: handleCloseNotification,
                      className: classes.dropdownItem
                    },
                    "Usage increased by 30%."
                  )
                )
              )
            )
          );
        }
      )
    ),
    _react2.default.createElement(
      "div",
      { className: classes.manager },
      _react2.default.createElement(
        _Button2.default,
        {
          color: window.innerWidth > 959 ? "transparent" : "white",
          justIcon: window.innerWidth > 959,
          simple: !(window.innerWidth > 959),
          "aria-owns": openProfile ? "profile-menu-list-grow" : null,
          "aria-haspopup": "true",
          onClick: handleClickProfile,
          className: classes.buttonLink
        },
        _react2.default.createElement(_Person2.default, { className: classes.icons }),
        _react2.default.createElement(
          _Hidden2.default,
          { mdUp: true, implementation: "css" },
          _react2.default.createElement(
            "p",
            { className: classes.linkText },
            "Profile"
          )
        )
      ),
      _react2.default.createElement(
        _Popper2.default,
        {
          open: Boolean(openProfile),
          anchorEl: openProfile,
          transition: true,
          disablePortal: true,
          className: (0, _classnames2.default)(_defineProperty({}, classes.popperClose, !openProfile)) + " " + classes.popperNav
        },
        function (_ref2) {
          var TransitionProps = _ref2.TransitionProps,
              placement = _ref2.placement;
          return _react2.default.createElement(
            _Grow2.default,
            _extends({}, TransitionProps, {
              id: "profile-menu-list-grow",
              style: {
                transformOrigin: placement === "bottom" ? "center top" : "center bottom"
              }
            }),
            _react2.default.createElement(
              _Paper2.default,
              null,
              _react2.default.createElement(
                _ClickAwayListener2.default,
                { onClickAway: handleCloseProfile },
                _react2.default.createElement(
                  _MenuList2.default,
                  { role: "menu" },
                  _react2.default.createElement(
                    _MenuItem2.default,
                    {
                      onClick: handleCloseProfile,
                      className: classes.dropdownItem
                    },
                    "Profile"
                  ),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    {
                      onClick: handleCloseProfile,
                      className: classes.dropdownItem
                    },
                    "Settings"
                  ),
                  _react2.default.createElement(_Divider2.default, { light: true }),
                  _react2.default.createElement(
                    _MenuItem2.default,
                    {
                      onClick: handleCloseProfile,
                      className: classes.dropdownItem
                    },
                    "Logout"
                  )
                )
              )
            )
          );
        }
      )
    )
  );
}