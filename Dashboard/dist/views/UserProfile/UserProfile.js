"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = UserProfile;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _styles = require("@material-ui/core/styles");

var _InputLabel = require("@material-ui/core/InputLabel");

var _InputLabel2 = _interopRequireDefault(_InputLabel);

var _GridItem = require("../../components/Grid/GridItem.js");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer.js");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _CustomInput = require("../../components/CustomInput/CustomInput.js");

var _CustomInput2 = _interopRequireDefault(_CustomInput);

var _Button = require("../../components/CustomButtons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _Card = require("../../components/Card/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardAvatar = require("../../components/Card/CardAvatar.js");

var _CardAvatar2 = _interopRequireDefault(_CardAvatar);

var _CardBody = require("../../components/Card/CardBody.js");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require("../../components/Card/CardFooter.js");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _marc = require("../../assets/img/faces/marc.jpg");

var _marc2 = _interopRequireDefault(_marc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// core components

// @material-ui/core components
var styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

var useStyles = (0, _styles.makeStyles)(styles);

function UserProfile() {
  var classes = useStyles();
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _GridContainer2.default,
      null,
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 8 },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "primary" },
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitleWhite },
              "Edit Profile"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategoryWhite },
              "Complete your profile"
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
                { xs: 12, sm: 12, md: 5 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Company (disabled)",
                  id: "company-disabled",
                  formControlProps: {
                    fullWidth: true
                  },
                  inputProps: {
                    disabled: true
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 3 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Username",
                  id: "username",
                  formControlProps: {
                    fullWidth: true
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 4 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Email address",
                  id: "email-address",
                  formControlProps: {
                    fullWidth: true
                  }
                })
              )
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 6 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "First Name",
                  id: "first-name",
                  formControlProps: {
                    fullWidth: true
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 6 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Last Name",
                  id: "last-name",
                  formControlProps: {
                    fullWidth: true
                  }
                })
              )
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 4 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "City",
                  id: "city",
                  formControlProps: {
                    fullWidth: true
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 4 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Country",
                  id: "country",
                  formControlProps: {
                    fullWidth: true
                  }
                })
              ),
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 4 },
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Postal Code",
                  id: "postal-code",
                  formControlProps: {
                    fullWidth: true
                  }
                })
              )
            ),
            _react2.default.createElement(
              _GridContainer2.default,
              null,
              _react2.default.createElement(
                _GridItem2.default,
                { xs: 12, sm: 12, md: 12 },
                _react2.default.createElement(
                  _InputLabel2.default,
                  { style: { color: "#AAAAAA" } },
                  "About me"
                ),
                _react2.default.createElement(_CustomInput2.default, {
                  labelText: "Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo.",
                  id: "about-me",
                  formControlProps: {
                    fullWidth: true
                  },
                  inputProps: {
                    multiline: true,
                    rows: 5
                  }
                })
              )
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            null,
            _react2.default.createElement(
              _Button2.default,
              { color: "primary" },
              "Update Profile"
            )
          )
        )
      ),
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 4 },
        _react2.default.createElement(
          _Card2.default,
          { profile: true },
          _react2.default.createElement(
            _CardAvatar2.default,
            { profile: true },
            _react2.default.createElement(
              "a",
              { href: "#pablo", onClick: function onClick(e) {
                  return e.preventDefault();
                } },
              _react2.default.createElement("img", { src: _marc2.default, alt: "..." })
            )
          ),
          _react2.default.createElement(
            _CardBody2.default,
            { profile: true },
            _react2.default.createElement(
              "h6",
              { className: classes.cardCategory },
              "CEO / CO-FOUNDER"
            ),
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitle },
              "Alec Thompson"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.description },
              "Don",
              "'",
              "t be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens\u2019 bed design but the back is..."
            ),
            _react2.default.createElement(
              _Button2.default,
              { color: "primary", round: true },
              "Follow"
            )
          )
        )
      )
    )
  );
}