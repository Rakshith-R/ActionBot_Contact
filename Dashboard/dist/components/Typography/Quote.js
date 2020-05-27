"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Quote;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = require("@material-ui/core/styles");

var _typographyStyle = require("../../assets/jss/material-dashboard-react/components/typographyStyle.js");

var _typographyStyle2 = _interopRequireDefault(_typographyStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/core components
var useStyles = (0, _styles.makeStyles)(_typographyStyle2.default);
// core components
function Quote(props) {
  var classes = useStyles();
  var text = props.text,
      author = props.author;

  return _react2.default.createElement(
    "blockquote",
    { className: classes.defaultFontStyle + " " + classes.quote },
    _react2.default.createElement(
      "p",
      { className: classes.quoteText },
      text
    ),
    _react2.default.createElement(
      "small",
      { className: classes.quoteAuthor },
      author
    )
  );
}

Quote.propTypes = {
  text: _propTypes2.default.node,
  author: _propTypes2.default.node
};