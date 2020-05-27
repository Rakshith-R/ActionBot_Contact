"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Icons;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/core/styles");

var _Hidden = require("@material-ui/core/Hidden");

var _Hidden2 = _interopRequireDefault(_Hidden);

var _GridItem = require("../../components/Grid/GridItem.js");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer.js");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Card = require("../../components/Card/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardBody = require("../../components/Card/CardBody.js");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _iconsStyle = require("../../assets/jss/material-dashboard-react/views/iconsStyle.js");

var _iconsStyle2 = _interopRequireDefault(_iconsStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components

// @material-ui/core components
var useStyles = (0, _styles.makeStyles)(_iconsStyle2.default); /*eslint-disable*/
function Icons() {
  var classes = useStyles();
  return _react2.default.createElement(
    _GridContainer2.default,
    null,
    _react2.default.createElement(
      _GridItem2.default,
      { xs: 12, sm: 12, md: 12 },
      _react2.default.createElement(
        _Card2.default,
        { plain: true },
        _react2.default.createElement(
          _CardHeader2.default,
          { plain: true, color: "primary" },
          _react2.default.createElement(
            "h4",
            { className: classes.cardTitleWhite },
            "Material Design Icons"
          ),
          _react2.default.createElement(
            "p",
            { className: classes.cardCategoryWhite },
            "Handcrafted by our friends from",
            " ",
            _react2.default.createElement(
              "a",
              {
                href: "https://design.google.com/icons/?ref=creativetime",
                target: "_blank"
              },
              "Google"
            )
          )
        ),
        _react2.default.createElement(
          _CardBody2.default,
          null,
          _react2.default.createElement(
            _Hidden2.default,
            { only: ["sm", "xs"] },
            _react2.default.createElement(
              "iframe",
              {
                className: classes.iframe,
                src: "https://material.io/icons/",
                title: "Icons iframe"
              },
              _react2.default.createElement(
                "p",
                null,
                "Your browser does not support iframes."
              )
            )
          ),
          _react2.default.createElement(
            _Hidden2.default,
            { only: ["lg", "md"] },
            _react2.default.createElement(
              _GridItem2.default,
              { xs: 12, sm: 12, md: 6 },
              _react2.default.createElement(
                "h5",
                null,
                "The icons are visible on Desktop mode inside an iframe. Since the iframe is not working on Mobile and Tablets please visit the icons on their original page on Google. Check the",
                _react2.default.createElement(
                  "a",
                  {
                    href: "https://design.google.com/icons/?ref=creativetime",
                    target: "_blank"
                  },
                  "Material Icons"
                )
              )
            )
          )
        )
      )
    )
  );
}