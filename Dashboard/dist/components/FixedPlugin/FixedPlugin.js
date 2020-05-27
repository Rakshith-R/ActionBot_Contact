"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /*eslint-disable*/

// nodejs library to set properties for components

// nodejs library that concatenates classes


exports.default = FixedPlugin;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _sidebar = require("../../assets/img/sidebar-1.jpg");

var _sidebar2 = _interopRequireDefault(_sidebar);

var _sidebar3 = require("../../assets/img/sidebar-2.jpg");

var _sidebar4 = _interopRequireDefault(_sidebar3);

var _sidebar5 = require("../../assets/img/sidebar-3.jpg");

var _sidebar6 = _interopRequireDefault(_sidebar5);

var _sidebar7 = require("../../assets/img/sidebar-4.jpg");

var _sidebar8 = _interopRequireDefault(_sidebar7);

var _Button = require("../CustomButtons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FixedPlugin(props) {
  var _React$useState = _react2.default.useState("dropdown show"),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      classes = _React$useState2[0],
      setClasses = _React$useState2[1];

  var _React$useState3 = _react2.default.useState(true),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      bg_checked = _React$useState4[0],
      setBg_checked = _React$useState4[1];

  var _React$useState5 = _react2.default.useState(props.bgImage),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      bgImage = _React$useState6[0],
      setBgImage = _React$useState6[1];

  var handleClick = function handleClick() {
    props.handleFixedClick();
  };
  return _react2.default.createElement("p", null);
  return _react2.default.createElement(
    "div",
    {
      className: (0, _classnames2.default)("fixed-plugin", {
        "rtl-fixed-plugin": props.rtlActive
      })
    },
    _react2.default.createElement(
      "div",
      { id: "fixedPluginClasses", className: props.fixedClasses },
      _react2.default.createElement(
        "div",
        { onClick: handleClick },
        _react2.default.createElement("i", { className: "fa fa-cog fa-2x" })
      ),
      _react2.default.createElement(
        "ul",
        { className: "dropdown-menu" },
        _react2.default.createElement(
          "li",
          { className: "header-title" },
          "SIDEBAR FILTERS"
        ),
        _react2.default.createElement(
          "li",
          { className: "adjustments-line" },
          _react2.default.createElement(
            "a",
            { className: "switch-trigger" },
            _react2.default.createElement(
              "div",
              null,
              _react2.default.createElement("span", {
                className: props.bgColor === "purple" ? "badge filter badge-purple active" : "badge filter badge-purple",
                "data-color": "purple",
                onClick: function onClick() {
                  props.handleColorClick("purple");
                }
              }),
              _react2.default.createElement("span", {
                className: props.bgColor === "blue" ? "badge filter badge-blue active" : "badge filter badge-blue",
                "data-color": "blue",
                onClick: function onClick() {
                  props.handleColorClick("blue");
                }
              }),
              _react2.default.createElement("span", {
                className: props.bgColor === "green" ? "badge filter badge-green active" : "badge filter badge-green",
                "data-color": "green",
                onClick: function onClick() {
                  props.handleColorClick("green");
                }
              }),
              _react2.default.createElement("span", {
                className: props.bgColor === "red" ? "badge filter badge-red active" : "badge filter badge-red",
                "data-color": "red",
                onClick: function onClick() {
                  props.handleColorClick("red");
                }
              }),
              _react2.default.createElement("span", {
                className: props.bgColor === "orange" ? "badge filter badge-orange active" : "badge filter badge-orange",
                "data-color": "orange",
                onClick: function onClick() {
                  props.handleColorClick("orange");
                }
              })
            )
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "header-title" },
          "Images"
        ),
        _react2.default.createElement(
          "li",
          { className: bgImage === _sidebar2.default ? "active" : "" },
          _react2.default.createElement(
            "a",
            {
              className: "img-holder switch-trigger",
              onClick: function onClick() {
                setBgImage(_sidebar2.default);
                props.handleImageClick(_sidebar2.default);
              }
            },
            _react2.default.createElement("img", { src: _sidebar2.default, alt: "..." })
          )
        ),
        _react2.default.createElement(
          "li",
          { className: bgImage === _sidebar4.default ? "active" : "" },
          _react2.default.createElement(
            "a",
            {
              className: "img-holder switch-trigger",
              onClick: function onClick() {
                setBgImage(_sidebar4.default);
                props.handleImageClick(_sidebar4.default);
              }
            },
            _react2.default.createElement("img", { src: _sidebar4.default, alt: "..." })
          )
        ),
        _react2.default.createElement(
          "li",
          { className: bgImage === _sidebar6.default ? "active" : "" },
          _react2.default.createElement(
            "a",
            {
              className: "img-holder switch-trigger",
              onClick: function onClick() {
                setBgImage(_sidebar6.default);
                props.handleImageClick(_sidebar6.default);
              }
            },
            _react2.default.createElement("img", { src: _sidebar6.default, alt: "..." })
          )
        ),
        _react2.default.createElement(
          "li",
          { className: bgImage === _sidebar8.default ? "active" : "" },
          _react2.default.createElement(
            "a",
            {
              className: "img-holder switch-trigger",
              onClick: function onClick() {
                setBgImage(_sidebar8.default);
                props.handleImageClick(_sidebar8.default);
              }
            },
            _react2.default.createElement("img", { src: _sidebar8.default, alt: "..." })
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "button-container" },
          _react2.default.createElement(
            "div",
            { className: "button-container" },
            _react2.default.createElement(
              _Button2.default,
              {
                color: "success",
                href: "https://www.creative-tim.com/product/material-dashboard-react?ref=mdr-fixed-plugin",
                target: "_blank",
                fullWidth: true
              },
              "Download free!"
            )
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "button-container" },
          _react2.default.createElement(
            "div",
            { className: "button-container" },
            _react2.default.createElement(
              _Button2.default,
              {
                color: "warning",
                href: "https://www.creative-tim.com/product/material-dashboard-pro-react?ref=mdr-fixed-plugin",
                target: "_blank",
                fullWidth: true
              },
              "Get PRO version"
            )
          )
        ),
        _react2.default.createElement(
          "li",
          { className: "button-container" },
          _react2.default.createElement(
            _Button2.default,
            {
              color: "info",
              fullWidth: true,
              href: "https://demos.creative-tim.com/material-dashboard-react/#/documentation/tutorial?ref=mdr-fixed-plugin",
              target: "_blank"
            },
            "Documentation"
          )
        ),
        _react2.default.createElement("li", { className: "adjustments-line" })
      )
    )
  );
}

FixedPlugin.propTypes = {
  bgImage: _propTypes2.default.string,
  handleFixedClick: _propTypes2.default.func,
  rtlActive: _propTypes2.default.bool,
  fixedClasses: _propTypes2.default.string,
  bgColor: _propTypes2.default.oneOf(["purple", "blue", "green", "orange", "red"]),
  handleColorClick: _propTypes2.default.func,
  handleImageClick: _propTypes2.default.func
};