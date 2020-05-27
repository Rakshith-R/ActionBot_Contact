"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _ListItem = require("@material-ui/core/ListItem");

var _ListItem2 = _interopRequireDefault(_ListItem);

var _List = require("@material-ui/core/List");

var _List2 = _interopRequireDefault(_List);

var _footerStyle = require("../../assets/jss/material-dashboard-react/components/footerStyle.js");

var _footerStyle2 = _interopRequireDefault(_footerStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
/*eslint-disable*/
var useStyles = (0, _styles.makeStyles)(_footerStyle2.default);
// core components
function Footer(props) {
  var classes = useStyles();
  return _react2.default.createElement(
    "footer",
    { className: classes.footer },
    _react2.default.createElement(
      "div",
      { className: classes.container },
      _react2.default.createElement(
        "div",
        { className: classes.left },
        _react2.default.createElement(
          _List2.default,
          { className: classes.list },
          _react2.default.createElement(
            _ListItem2.default,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              { href: "#", className: classes.block },
              "Home"
            )
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              { href: "#", className: classes.block },
              "Company"
            )
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              { href: "#", className: classes.block },
              "Support"
            )
          ),
          _react2.default.createElement(
            _ListItem2.default,
            { className: classes.inlineBlock },
            _react2.default.createElement(
              "a",
              { href: "#", className: classes.block },
              "About"
            )
          )
        )
      ),
      _react2.default.createElement(
        "p",
        { className: classes.right },
        _react2.default.createElement(
          "span",
          null,
          "\xA9 ",
          1900 + new Date().getYear(),
          " ",
          _react2.default.createElement(
            "a",
            {
              href: "#",
              className: classes.a
            },
            "Unisys ActionBot"
          )
        )
      )
    )
  );
}