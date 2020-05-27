"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*eslint-disable*/

// nodejs library to set properties for components

// @material-ui/core components

// @material-ui/icons

// core components


exports.default = Notifications;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _AddAlert = require("@material-ui/icons/AddAlert");

var _AddAlert2 = _interopRequireDefault(_AddAlert);

var _GridItem = require("../../components/Grid/GridItem.js");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer.js");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Button = require("../../components/CustomButtons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _SnackbarContent = require("../../components/Snackbar/SnackbarContent.js");

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _Snackbar = require("../../components/Snackbar/Snackbar.js");

var _Snackbar2 = _interopRequireDefault(_Snackbar);

var _Card = require("../../components/Card/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../components/Card/CardBody.js");

var _CardBody2 = _interopRequireDefault(_CardBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

var useStyles = (0, _styles.makeStyles)(styles);

function Notifications() {
  var classes = useStyles();

  var _React$useState = _react2.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      tl = _React$useState2[0],
      setTL = _React$useState2[1];

  var _React$useState3 = _react2.default.useState(false),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      tc = _React$useState4[0],
      setTC = _React$useState4[1];

  var _React$useState5 = _react2.default.useState(false),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      tr = _React$useState6[0],
      setTR = _React$useState6[1];

  var _React$useState7 = _react2.default.useState(false),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      bl = _React$useState8[0],
      setBL = _React$useState8[1];

  var _React$useState9 = _react2.default.useState(false),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      bc = _React$useState10[0],
      setBC = _React$useState10[1];

  var _React$useState11 = _react2.default.useState(false),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      br = _React$useState12[0],
      setBR = _React$useState12[1];

  _react2.default.useEffect(function () {
    // Specify how to clean up after this effect:
    return function cleanup() {
      // to stop the warning of calling setState of unmounted component
      var id = window.setTimeout(null, 0);
      while (id--) {
        window.clearTimeout(id);
      }
    };
  });
  var showNotification = function showNotification(place) {
    switch (place) {
      case "tl":
        if (!tl) {
          setTL(true);
          setTimeout(function () {
            setTL(false);
          }, 6000);
        }
        break;
      case "tc":
        if (!tc) {
          setTC(true);
          setTimeout(function () {
            setTC(false);
          }, 6000);
        }
        break;
      case "tr":
        if (!tr) {
          setTR(true);
          setTimeout(function () {
            setTR(false);
          }, 6000);
        }
        break;
      case "bl":
        if (!bl) {
          setBL(true);
          setTimeout(function () {
            setBL(false);
          }, 6000);
        }
        break;
      case "bc":
        if (!bc) {
          setBC(true);
          setTimeout(function () {
            setBC(false);
          }, 6000);
        }
        break;
      case "br":
        if (!br) {
          setBR(true);
          setTimeout(function () {
            setBR(false);
          }, 6000);
        }
        break;
      default:
        break;
    }
  };
  return _react2.default.createElement(
    _Card2.default,
    null,
    _react2.default.createElement(
      _CardHeader2.default,
      { color: "primary" },
      _react2.default.createElement(
        "h4",
        { className: classes.cardTitleWhite },
        "Notifications"
      ),
      _react2.default.createElement(
        "p",
        { className: classes.cardCategoryWhite },
        "Handcrafted by our friends from",
        " ",
        _react2.default.createElement(
          "a",
          {
            target: "_blank",
            href: "https://material-ui-next.com/?ref=creativetime"
          },
          "Material UI"
        ),
        " ",
        "and styled by",
        " ",
        _react2.default.createElement(
          "a",
          {
            target: "_blank",
            href: "https://www.creative-tim.com/?ref=mdr-notifications-page"
          },
          "Creative Tim"
        ),
        ". Please checkout the",
        " ",
        _react2.default.createElement(
          "a",
          { href: "#pablo", target: "_blank" },
          "full documentation"
        ),
        "."
      )
    ),
    _react2.default.createElement(
      _CardBody2.default,
      null,
      _react2.default.createElement(
        _GridContainer2.default,
        null,
        _react2.default.createElement(
          _GridItem2.default,
          { xs: 12, sm: 12, md: 6 },
          _react2.default.createElement(
            "h5",
            null,
            "Notifications Style"
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(_SnackbarContent2.default, { message: "This is a plain notification" }),
          _react2.default.createElement(_SnackbarContent2.default, {
            message: "This is a notification with close button.",
            close: true
          }),
          _react2.default.createElement(_SnackbarContent2.default, {
            message: "This is a notification with close button and icon.",
            close: true,
            icon: _AddAlert2.default
          }),
          _react2.default.createElement(_SnackbarContent2.default, {
            message: "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style.",
            close: true,
            icon: _AddAlert2.default
          })
        ),
        _react2.default.createElement(
          _GridItem2.default,
          { xs: 12, sm: 12, md: 6 },
          _react2.default.createElement(
            "h5",
            null,
            "Notifications States"
          ),
          _react2.default.createElement("br", null),
          _react2.default.createElement(_SnackbarContent2.default, {
            message: 'INFO - This is a regular notification made with color="info"',
            close: true,
            color: "info"
          }),
          _react2.default.createElement(_SnackbarContent2.default, {
            message: 'SUCCESS - This is a regular notification made with color="success"',
            close: true,
            color: "success"
          }),
          _react2.default.createElement(_SnackbarContent2.default, {
            message: 'WARNING - This is a regular notification made with color="warning"',
            close: true,
            color: "warning"
          }),
          _react2.default.createElement(_SnackbarContent2.default, {
            message: 'DANGER - This is a regular notification made with color="danger"',
            close: true,
            color: "danger"
          }),
          _react2.default.createElement(_SnackbarContent2.default, {
            message: 'PRIMARY - This is a regular notification made with color="primary"',
            close: true,
            color: "primary"
          })
        )
      ),
      _react2.default.createElement("br", null),
      _react2.default.createElement("br", null),
      _react2.default.createElement(
        _GridContainer2.default,
        { justify: "center" },
        _react2.default.createElement(
          _GridItem2.default,
          { xs: 12, sm: 12, md: 6, style: { textAlign: "center" } },
          _react2.default.createElement(
            "h5",
            null,
            "Notifications Places",
            _react2.default.createElement("br", null),
            _react2.default.createElement(
              "small",
              null,
              "Click to view notifications"
            )
          )
        )
      ),
      _react2.default.createElement(
        _GridContainer2.default,
        { justify: "center" },
        _react2.default.createElement(
          _GridItem2.default,
          { xs: 12, sm: 12, md: 10, lg: 8 },
          _react2.default.createElement(
            _GridContainer2.default,
            null,
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Button2.default,
                {
                  fullWidth: true,
                  color: "primary",
                  onClick: function onClick() {
                    return showNotification("tl");
                  }
                },
                "Top Left"
              ),
              _react2.default.createElement(_Snackbar2.default, {
                place: "tl",
                color: "info",
                icon: _AddAlert2.default,
                message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                open: tl,
                closeNotification: function closeNotification() {
                  return setTL(false);
                },
                close: true
              })
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Button2.default,
                {
                  fullWidth: true,
                  color: "primary",
                  onClick: function onClick() {
                    return showNotification("tc");
                  }
                },
                "Top Center"
              ),
              _react2.default.createElement(_Snackbar2.default, {
                place: "tc",
                color: "info",
                icon: _AddAlert2.default,
                message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                open: tc,
                closeNotification: function closeNotification() {
                  return setTC(false);
                },
                close: true
              })
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Button2.default,
                {
                  fullWidth: true,
                  color: "primary",
                  onClick: function onClick() {
                    return showNotification("tr");
                  }
                },
                "Top Right"
              ),
              _react2.default.createElement(_Snackbar2.default, {
                place: "tr",
                color: "info",
                icon: _AddAlert2.default,
                message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                open: tr,
                closeNotification: function closeNotification() {
                  return setTR(false);
                },
                close: true
              })
            )
          )
        )
      ),
      _react2.default.createElement(
        _GridContainer2.default,
        { justify: "center" },
        _react2.default.createElement(
          _GridItem2.default,
          { xs: 12, sm: 12, md: 10, lg: 8 },
          _react2.default.createElement(
            _GridContainer2.default,
            null,
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Button2.default,
                {
                  fullWidth: true,
                  color: "primary",
                  onClick: function onClick() {
                    return showNotification("bl");
                  }
                },
                "Bottom Left"
              ),
              _react2.default.createElement(_Snackbar2.default, {
                place: "bl",
                color: "info",
                icon: _AddAlert2.default,
                message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                open: bl,
                closeNotification: function closeNotification() {
                  return setBL(false);
                },
                close: true
              })
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Button2.default,
                {
                  fullWidth: true,
                  color: "primary",
                  onClick: function onClick() {
                    return showNotification("bc");
                  }
                },
                "Bottom Center"
              ),
              _react2.default.createElement(_Snackbar2.default, {
                place: "bc",
                color: "info",
                icon: _AddAlert2.default,
                message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                open: bc,
                closeNotification: function closeNotification() {
                  return setBC(false);
                },
                close: true
              })
            ),
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 4 },
              _react2.default.createElement(
                _Button2.default,
                {
                  fullWidth: true,
                  color: "primary",
                  onClick: function onClick() {
                    return showNotification("br");
                  }
                },
                "Bottom Right"
              ),
              _react2.default.createElement(_Snackbar2.default, {
                place: "br",
                color: "info",
                icon: _AddAlert2.default,
                message: "Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer.",
                open: br,
                closeNotification: function closeNotification() {
                  return setBR(false);
                },
                close: true
              })
            )
          )
        )
      )
    )
  );
}