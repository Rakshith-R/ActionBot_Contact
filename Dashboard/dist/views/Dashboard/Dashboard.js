"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
// react plugin for creating charts

// @material-ui/core

// @material-ui/icons

// core components


exports.default = Dashboard;

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

var _ArrowDownward = require("@material-ui/icons/ArrowDownward");

var _ArrowDownward2 = _interopRequireDefault(_ArrowDownward);

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

var _CardIcon = require("../../components/Card/CardIcon.js");

var _CardIcon2 = _interopRequireDefault(_CardIcon);

var _CardBody = require("../../components/Card/CardBody.js");

var _CardBody2 = _interopRequireDefault(_CardBody);

var _CardFooter = require("../../components/Card/CardFooter.js");

var _CardFooter2 = _interopRequireDefault(_CardFooter);

var _general = require("../../variables/general.js");

var _charts = require("../../variables/charts.js");

var _dashboardStyle = require("../../assets/jss/material-dashboard-react/views/dashboardStyle.js");

var _dashboardStyle2 = _interopRequireDefault(_dashboardStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(_dashboardStyle2.default);

function Dashboard() {
  var _React$useState = _react2.default.useState({ Incidents: [], Actions: [] }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      data = _React$useState2[0],
      setData = _React$useState2[1];

  var cb = _react2.default.useCallback(function () {
    fetch("http://localhost:5000/api").then(function (res) {
      console.log(res);
      // setData(res)
      return res.json();
    }).then(function (res) {
      // const i = res.Incidents.map(i => { return { ...i, timestamp: Date(i.timestamp).getLocaleDateTimeString } })
      console.log(res);
      res['Incidents'] = res['Incidents'].map(function (i) {
        i[2] = new Date(i[2] * 1000).toLocaleString('en-IN');
        return i;
      });
      res['Actions'] = res['Actions'].map(function (i) {
        i[2] = new Date(i[2] * 1000).toLocaleString('en-IN');
        return i;
      });
      console.log(res);
      setData(res);console.log(res);
    });
  }, [data, setData]);
  _react2.default.useEffect(function () {
    cb();
  }, []);
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
                "storage"
              )
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              "Server Capacity"
            ),
            _react2.default.createElement(
              "h3",
              { className: classes.cardTitle },
              "75",
              _react2.default.createElement(
                "small",
                null,
                "%"
              )
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { stats: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_Update2.default, null),
              _react2.default.createElement(
                "a",
                { href: "#pablo", onClick: function onClick(e) {
                    return e.preventDefault();
                  } },
                "Just Updated"
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
              _react2.default.createElement(
                _Icon2.default,
                null,
                "check_circle"
              )
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              "Total Sessions Today"
            ),
            _react2.default.createElement(
              "h3",
              { className: classes.cardTitle },
              "4,245"
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { stats: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_Update2.default, null),
              "Just Updated"
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
              "Incidents"
            ),
            _react2.default.createElement(
              "h3",
              { className: classes.cardTitle },
              "175"
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { stats: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_Update2.default, null),
              "Live"
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
              "Active Users"
            ),
            _react2.default.createElement(
              "h3",
              { className: classes.cardTitle },
              "1245"
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { stats: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_Update2.default, null),
              "Just Updated"
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
              "Daily Usage"
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
              "increase in usage today."
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { chart: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_AccessTime2.default, null),
              " updated 1 minute ago"
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
              "Usage by medium."
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              'Telegram, Google Assitant, Website'
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { chart: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_AccessTime2.default, null),
              " updated 2 days ago"
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
            { color: "info" },
            _react2.default.createElement(_reactChartist2.default, {
              className: "ct-chart",
              data: _charts.completedTasksChart.data,
              type: "Pie",
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
              "Share of Each medium"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              'Telegram, Google Assitant, Website'
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { chart: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_AccessTime2.default, null),
              " updated 3 days ago"
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
              data: _charts.dailyUsageServiceChart.data,
              type: "Line",
              options: _charts.dailyUsageServiceChart.options,
              listener: _charts.dailyUsageServiceChart.animation
            })
          ),
          _react2.default.createElement(
            _CardBody2.default,
            null,
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitle },
              "Services Usage"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              _react2.default.createElement(
                "span",
                { className: classes.successText },
                _react2.default.createElement(_ArrowUpward2.default, { className: classes.upArrowCardCategory }),
                " 10%"
              ),
              " ",
              "increase in usage today."
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { chart: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_AccessTime2.default, null),
              " updated 1 minute ago"
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
            { color: "info" },
            _react2.default.createElement(_reactChartist2.default, {
              className: "ct-chart",
              data: _charts.serviceUsage.data,
              type: "Pie",
              options: _charts.serviceUsage.options,
              listener: _charts.serviceUsage.animation
            })
          ),
          _react2.default.createElement(
            _CardBody2.default,
            null,
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitle },
              "Percentage use of Each Service"
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              'Flight Details is the most used service'
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { chart: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_AccessTime2.default, null),
              " updated 5 days ago"
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
              data: _charts.dailySalesChart1.data,
              type: "Line",
              options: _charts.dailySalesChart1.options,
              responsiveOptions: _charts.dailySalesChart1.responsiveOptions,
              listener: _charts.dailySalesChart1.animation
            })
          ),
          _react2.default.createElement(
            _CardBody2.default,
            null,
            _react2.default.createElement(
              "h4",
              { className: classes.cardTitle },
              "Incidents."
            ),
            _react2.default.createElement(
              "p",
              { className: classes.cardCategory },
              _react2.default.createElement(
                "span",
                { className: classes.successText },
                _react2.default.createElement(_ArrowDownward2.default, { className: classes.upArrowCardCategory }),
                " 5%"
              ),
              " ",
              "decrease in Incidents"
            )
          ),
          _react2.default.createElement(
            _CardFooter2.default,
            { chart: true },
            _react2.default.createElement(
              "div",
              { className: classes.stats },
              _react2.default.createElement(_AccessTime2.default, null),
              " updated just now"
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
          title: "Fallback Triggered :",
          headerColor: "primary",
          tabs: [{
            tabName: "Incidents",
            tabIcon: _BugReport2.default,
            tabContent: _react2.default.createElement(_Table2.default, {
              tableHeaderColor: "warning",
              tableHead: ["ID", "Name", "Time"],
              tableData: data.Incidents
            })
            // <Tasks
            //   checkedIndexes={[]}
            //   tasksIndexes={[]}
            //   tasks={data.Incidents}
            // />

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
              "Actions Performed"
            )
          ),
          _react2.default.createElement(
            _CardBody2.default,
            null,
            _react2.default.createElement(_Table2.default, {
              tableHeaderColor: "warning",
              tableHead: ["ID", "Name", "Time"],
              tableData: data.Actions
            })
          )
        )
      )
    )
  );
}