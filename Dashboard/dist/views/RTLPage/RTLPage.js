"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RTLPage;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactChartist = require("react-chartist");

var _reactChartist2 = _interopRequireDefault(_reactChartist);

var _styles = require("@material-ui/core/styles");

var _Icon = require("@material-ui/core/Icon");

var _Icon2 = _interopRequireDefault(_Icon);

var _Store = require("@material-ui/icons/Store");

var _Store2 = _interopRequireDefault(_Store);

var _Warning = require("@material-ui/icons/Warning");

var _Warning2 = _interopRequireDefault(_Warning);

var _DateRange = require("@material-ui/icons/DateRange");

var _DateRange2 = _interopRequireDefault(_DateRange);

var _LocalOffer = require("@material-ui/icons/LocalOffer");

var _LocalOffer2 = _interopRequireDefault(_LocalOffer);

var _Update = require("@material-ui/icons/Update");

var _Update2 = _interopRequireDefault(_Update);

var _ArrowUpward = require("@material-ui/icons/ArrowUpward");

var _ArrowUpward2 = _interopRequireDefault(_ArrowUpward);

var _AccessTime = require("@material-ui/icons/AccessTime");

var _AccessTime2 = _interopRequireDefault(_AccessTime);

var _Accessibility = require("@material-ui/icons/Accessibility");

var _Accessibility2 = _interopRequireDefault(_Accessibility);

var _BugReport = require("@material-ui/icons/BugReport");

var _BugReport2 = _interopRequireDefault(_BugReport);

var _Code = require("@material-ui/icons/Code");

var _Code2 = _interopRequireDefault(_Code);

var _Cloud = require("@material-ui/icons/Cloud");

var _Cloud2 = _interopRequireDefault(_Cloud);

var _Button = require("../../components/CustomButtons/Button.js");

var _Button2 = _interopRequireDefault(_Button);

var _GridItem = require("../../components/Grid/GridItem.js");

var _GridItem2 = _interopRequireDefault(_GridItem);

var _GridContainer = require("../../components/Grid/GridContainer.js");

var _GridContainer2 = _interopRequireDefault(_GridContainer);

var _Table = require("../../components/Table/Table.js");

var _Table2 = _interopRequireDefault(_Table);

var _Tasks = require("../../components/Tasks/Tasks.js");

var _Tasks2 = _interopRequireDefault(_Tasks);

var _CustomTabs = require("../../components/CustomTabs/CustomTabs.js");

var _CustomTabs2 = _interopRequireDefault(_CustomTabs);

var _Danger = require("../../components/Typography/Danger.js");

var _Danger2 = _interopRequireDefault(_Danger);

var _Card = require("../../components/Card/Card.js");

var _Card2 = _interopRequireDefault(_Card);

var _CardHeader = require("../../components/Card/CardHeader.js");

var _CardHeader2 = _interopRequireDefault(_CardHeader);

var _CardAvatar = require("../../components/Card/CardAvatar.js");

var _CardAvatar2 = _interopRequireDefault(_CardAvatar);

var _CardIcon = require("../../components/Card/CardIcon.js");

var _CardIcon2 = _interopRequireDefault(_CardIcon);

var _CardBody = require("../../components/Card/CardBody.js");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require("../../components/Card/CardFooter.js");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _SnackbarContent = require("../../components/Snackbar/SnackbarContent.js");

var _SnackbarContent2 = _interopRequireDefault(_SnackbarContent);

var _charts = require("../../variables/charts.js");

var _rtlStyle = require("../../assets/jss/material-dashboard-react/views/rtlStyle.js");

var _rtlStyle2 = _interopRequireDefault(_rtlStyle);

var _marc = require("../../assets/img/faces/marc.jpg");

var _marc2 = _interopRequireDefault(_marc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @material-ui/icons

// @material-ui/core
/*eslint-disable*/
var bugs = ["طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن؟", "	نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟", "همان حال کار آنها به نوعی وابسته به متن می‌باشد", "	آنها با استفاده از محتویات ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند"];
// core components

// react plugin for creating charts

var website = ["بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته", "اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید؟"];
var server = ["گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی؟", "از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی ؟", "از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا صرفا به مشتری یا صاحب کار خود نشان دهند؟"];

var useStyles = (0, _styles.makeStyles)(_rtlStyle2.default);

function RTLPage() {
  var classes = useStyles();
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      _GridContainer2.default,
      null,
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 6, md: 3 },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "warning", stats: true, icon: true },
            _react2.default.createElement(
              _CardIcon2.default,
              { color: "warning" },
              _react2.default.createElement(
                _Icon2.default,
                null,
                "content_copy"
              )
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              "\u0641\u0636\u0627 \u0645\u0635\u0631\u0641 \u0634\u062F\u0647"
            ),
            _react2.default.createElement(
              "h3",
              { className: classes.cardTitle },
              "49/50 ",
              _react2.default.createElement(
                "small",
                null,
                "GB"
              )
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { stats: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(
                _Danger2.default,
                null,
                _react2.default.createElement(_Warning2.default, null)
              ),
              _react2.default.createElement(
                "a",
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "\u0641\u0636\u0627\u06CC \u0628\u06CC\u0634\u062A\u0631\u06CC \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u06CC\u062F..."
              )
            )
          )
        )
      ),
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 6, md: 3 },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "success", stats: true, icon: true },
            _react2.default.createElement(
              _CardIcon2.default,
              { color: "success" },
              _react2.default.createElement(_Store2.default, null)
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              "\u0633\u0648\u062F"
            ),
            _react2.default.createElement(
              "h3",
              { className: classes.cardTitle },
              "$34,245"
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { stats: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_DateRange2.default, null),
              "\u06F2\u06F4 \u0633\u0627\u0639\u062A \u0627\u062E\u06CC\u0631"
            )
          )
        )
      ),
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 6, md: 3 },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "danger", stats: true, icon: true },
            _react2.default.createElement(
              _CardIcon2.default,
              { color: "danger" },
              _react2.default.createElement(
                _Icon2.default,
                null,
                "info_outline"
              )
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              "\u0645\u0634\u06A9\u0644\u0627\u062A \u062D\u0644 \u0634\u062F\u0647"
            ),
            _react2.default.createElement(
              "h3",
              { className: classes.cardTitle },
              "75"
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { stats: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_LocalOffer2.default, null),
              "\u062A\u0648\u0633\u0637 \u06AF\u06CC\u062A\u200C\u0647\u0627\u0628"
            )
          )
        )
      ),
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 6, md: 3 },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "info", stats: true, icon: true },
            _react2.default.createElement(
              _CardIcon2.default,
              { color: "info" },
              _react2.default.createElement(_Accessibility2.default, null)
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              "\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0646\u0646\u062F\u0647"
            ),
            _react2.default.createElement(
              "h3",
              { className: classes.cardTitle },
              "+245"
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { stats: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_Update2.default, null),
              "\u0647\u0645\u200C\u0627\u06A9\u0646\u0648\u0646"
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _GridContainer2.default,
      null,
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 4 },
        _react2.default.createElement(
          _Card2.default,
          { chart: true },
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "success" },
            _react2.default.createElement(_reactChartist2.default, {
              className: "ct-chart",
              data: _charts.dailySalesChart.data,
              type: "Line",
              options: _charts.dailySalesChart.options,
              listener: _charts.dailySalesChart.animation
            })
          ),
          _react2.default.createElement(
            _CardBody2.default,
            null,
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitle },
              "\u0641\u0631\u0648\u0634 \u0631\u0648\u0632\u0627\u0646\u0647"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              _react2.default.createElement(
                "span",
                { className: classes.successText },
                _react2.default.createElement(_ArrowUpward2.default, { className: classes.upArrowCardCategory }),
                " 55%"
              ),
              " ",
              "\u0631\u0634\u062F \u062F\u0631 \u0641\u0631\u0648\u0634 \u0627\u0645\u0631\u0648\u0632."
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { chart: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_AccessTime2.default, null),
              " \u06F4 \u062F\u0642\u06CC\u0642\u0647 \u067E\u06CC\u0634"
            )
          )
        )
      ),
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 4 },
        _react2.default.createElement(
          _Card2.default,
          { chart: true },
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "warning" },
            _react2.default.createElement(_reactChartist2.default, {
              className: "ct-chart",
              data: _charts.emailsSubscriptionChart.data,
              type: "Bar",
              options: _charts.emailsSubscriptionChart.options,
              responsiveOptions: _charts.emailsSubscriptionChart.responsiveOptions,
              listener: _charts.emailsSubscriptionChart.animation
            })
          ),
          _react2.default.createElement(
            _CardBody2.default,
            null,
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitle },
              "\u062F\u0646\u0628\u0627\u0644 \u06A9\u0646\u0646\u062F\u0647\u200C\u0647\u0627\u06CC \u0627\u06CC\u0645\u06CC\u0644\u06CC"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              "\u06A9\u0627\u0631\u0627\u06CC\u06CC \u0622\u062E\u0631\u06CC\u0646 \u06A9\u0645\u067E\u06CC\u0646"
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { chart: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_AccessTime2.default, null),
              " \u06A9\u0645\u067E\u06CC\u0646 \u062F\u0648 \u0631\u0648\u0632 \u067E\u06CC\u0634 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F"
            )
          )
        )
      ),
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 4 },
        _react2.default.createElement(
          _Card2.default,
          { chart: true },
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "danger" },
            _react2.default.createElement(_reactChartist2.default, {
              className: "ct-chart",
              data: _charts.completedTasksChart.data,
              type: "Line",
              options: _charts.completedTasksChart.options,
              listener: _charts.completedTasksChart.animation
            })
          ),
          _react2.default.createElement(
            _CardBody2.default,
            null,
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitle },
              "\u0648\u0638\u0627\u06CC\u0641 \u0627\u0646\u062C\u0627\u0645 \u0634\u062F\u0647"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              "\u06A9\u0627\u0631\u0627\u06CC\u06CC \u0622\u062E\u0631\u06CC\u0646 \u06A9\u0645\u067E\u06CC\u0646"
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { chart: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_AccessTime2.default, null),
              " \u06A9\u0645\u067E\u06CC\u0646 \u062F\u0648 \u0631\u0648\u0632 \u067E\u06CC\u0634 \u0627\u0631\u0633\u0627\u0644 \u0634\u062F"
            )
          )
        )
      )
    ),
    _react2.default.createElement(
      _GridContainer2.default,
      null,
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 6 },
        _react2.default.createElement(_CustomTabs2.default, {
          title: "\u0648\u0638\u0627\u06CC\u0641:",
          headerColor: "primary",
          rtlActive: true,
          tabs: [{
            tabName: "باگ‌ها",
            tabIcon: _BugReport2.default,
            tabContent: _react2.default.createElement(_Tasks2.default, {
              checkedIndexes: [0, 3],
              tasksIndexes: [0, 1, 2, 3],
              tasks: bugs,
              rtlActive: true
            })
          }, {
            tabName: "وبسایت",
            tabIcon: _Code2.default,
            tabContent: _react2.default.createElement(_Tasks2.default, {
              checkedIndexes: [0],
              tasksIndexes: [0, 1],
              tasks: website,
              rtlActive: true
            })
          }, {
            tabName: "سرور",
            tabIcon: _Cloud2.default,
            tabContent: _react2.default.createElement(_Tasks2.default, {
              checkedIndexes: [1],
              tasksIndexes: [0, 1, 2],
              tasks: server,
              rtlActive: true
            })
          }]
        })
      ),
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 6 },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "warning" },
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitleWhite },
              "\u0622\u0645\u0627\u0631 \u06A9\u0627\u0631\u06A9\u0646\u0627\u0646"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategoryWhite },
              "\u06A9\u0627\u0631\u06A9\u0646\u0627\u0646 \u062C\u062F\u06CC\u062F \u0627\u0632 \u06F1\u06F5 \u0622\u0628\u0627\u0646 \u06F1\u06F3\u06F9\u06F6"
            )
          ),
          _react2.default.createElement(
            _CardBody2.default,
            null,
            _react2.default.createElement(_Table2.default, {
              tableHeaderColor: "warning",
              tableHead: ["کد", "نام", "حقوق", "استان"],
              tableData: [["1", "احمد حسینی	", "$36,738", "مازندران"], ["2", "مینا رضایی	", "$23,789", "گلستان"], ["3", "مبینا احمدپور	", "$56,142", "تهران"], ["4", "جلال آقایی	", "$38,735", "شهرکرد"]]
            })
          )
        )
      )
    ),
    _react2.default.createElement(
      _GridContainer2.default,
      null,
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 6 },
        _react2.default.createElement(
          _Card2.default,
          null,
          _react2.default.createElement(
            _CardHeader2.default,
            { color: "primary" },
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitleWhite },
              "\u0627\u0639\u0644\u0627\u0646 \u0647\u0627"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategoryWhite },
              "\u064A\u062F\u0648\u064A\u0627 \u0645\u0646 \u0642\u0628\u0644 \u0623\u0635\u062F\u0642\u0627\u0626\u0646\u0627 \u0645\u0646",
              " ",
              _react2.default.createElement(
                "a",
                {
                  target: "_blank",
                  href: "https://material-ui-next.com/?ref=creativetime"
                },
                "\u0648\u0627\u062C\u0647\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0627\u0644\u0645\u0627\u062F\u064A\u0629"
              ),
              " ",
              "\u0648\u0646\u0635\u0628 \u0645\u0646 \u0642\u0628\u0644",
              " ",
              _react2.default.createElement(
                "a",
                {
                  target: "_blank",
                  href: "https://www.creative-tim.com/?ref=mdr-rtl-page"
                },
                "\u0627\u0644\u0625\u0628\u062F\u0627\u0639\u064A\u0629 \u062A\u064A\u0645"
              ),
              ". \u064A\u0631\u062C\u0649 \u0627\u0644\u062A\u062D\u0642\u0642 \u0645\u0646",
              " ",
              _react2.default.createElement(
                "a",
                { href: "#pablo", target: "_blank" },
                "\u0648\u062B\u0627\u0626\u0642 \u0643\u0627\u0645\u0644\u0629"
              ),
              "."
            )
          ),
          _react2.default.createElement(
            _CardBody2.default,
            null,
            _react2.default.createElement(_SnackbarContent2.default, {
              message: 'این یک اعلان است که با کلاس color="warning" ایجاد شده است.',
              close: true,
              rtlActive: true,
              color: "warning"
            }),
            _react2.default.createElement(_SnackbarContent2.default, {
              message: 'این یک اعلان است که با کلاس color="primary" ایجاد شده است.',
              close: true,
              rtlActive: true,
              color: "primary"
            }),
            _react2.default.createElement(_SnackbarContent2.default, {
              message: "این یک اعلان با دکمه بستن و آیکن است",
              close: true,
              rtlActive: true,
              color: "info"
            })
          )
        )
      ),
      _react2.default.createElement(
        _GridItem2.default,
        { xs: 12, sm: 12, md: 6 },
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
              "\u0645\u062F\u06CC\u0631\u0639\u0627\u0645\u0644 / \u0645\u062F\u06CC\u0631\u0641\u0646\u06CC"
            ),
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitle },
              "\u062E\u062F\u0627\u062F\u0627\u062F \u0639\u0632\u06CC\u0632\u06CC"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.description },
              "\u0637\u0631\u0627\u062D \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0627\u0632 \u0627\u06CC\u0646 \u0645\u062A\u0646 \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u0639\u0646\u0635\u0631\u06CC \u0627\u0632 \u062A\u0631\u06A9\u06CC\u0628 \u0628\u0646\u062F\u06CC \u0628\u0631\u0627\u06CC \u067E\u0631 \u06A9\u0631\u062F\u0646 \u0635\u0641\u062D\u0647 \u0648 \u0627\u0631\u0627\u06CC\u0647 \u0627\u0648\u0644\u06CC\u0647 \u0634\u06A9\u0644 \u0638\u0627\u0647\u0631\u06CC \u0648 \u06A9\u0644\u06CC \u0637\u0631\u062D \u0633\u0641\u0627\u0631\u0634 \u06AF\u0631\u0641\u062A\u0647 \u0634\u062F\u0647 \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC \u0646\u0645\u0627\u06CC\u062F\u060C \u062A\u0627 \u0627\u0632 \u0646\u0638\u0631 \u06AF\u0631\u0627\u0641\u06CC\u06A9\u06CC \u0646\u0634\u0627\u0646\u06AF\u0631 \u0686\u06AF\u0648\u0646\u06AF\u06CC \u0646\u0648\u0639 \u0648 \u0627\u0646\u062F\u0627\u0632\u0647 \u0641\u0648\u0646\u062A \u0648 \u0638\u0627\u0647\u0631 \u0645\u062A\u0646 \u0628\u0627\u0634\u062F. \u0645\u0639\u0645\u0648\u0644\u0627 \u0637\u0631\u0627\u062D\u0627\u0646 \u06AF\u0631\u0627\u0641\u06CC\u06A9 \u0628\u0631\u0627\u06CC \u0635\u0641\u062D\u0647\u200C\u0622\u0631\u0627\u06CC\u06CC\u060C \u0646\u062E\u0633\u062A \u0627\u0632 \u0645\u062A\u0646\u200C\u0647\u0627\u06CC \u0622\u0632\u0645\u0627\u06CC\u0634\u06CC \u0648 \u0628\u06CC\u200C\u0645\u0639\u0646\u06CC \u0627\u0633\u062A\u0641\u0627\u062F\u0647 \u0645\u06CC\u200C\u06A9\u0646\u0646\u062F ..."
            ),
            _react2.default.createElement(
              _Button2.default,
              { color: "primary", round: true },
              "\u062F\u0646\u0628\u0627\u0644\u200C\u06A9\u0631\u062F\u0646"
            )
          )
        )
      )
    )
  );
}