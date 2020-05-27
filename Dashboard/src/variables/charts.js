// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Sales
// #############################

const dailySalesChart = {
  data: {
    labels: ["W", "T", "F", "S", "S", "M", "T"],
    series: [[12000, 17000, 7000, 17000, 23000, 18000, 38000]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 10
    }
  },
  // for animation
  animation: {
    draw: function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
const dailySalesChart1 = {
  data: {
    labels: ["W", "T", "F", "S", "S", "M", "T"],
    series: [[38000, 18000, 23000, 17000, 7000, 17000, 12000]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 50000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 10
    }
  },
  // for animation
  animation: {
    draw: function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};


const dailyUsageServiceChart = {
  data: {
    labels: ["W", "T", "F", "S", "S", "M", "T"],
    series: [
      [1072, 2000, 983, 1772, 524, 616, 1095],
      [1299, 1124, 1738, 761, 1587, 1009, 1239],
      [703, 1881, 1289, 915, 1376, 891, 1146],
      [677, 1787, 765, 1247, 532, 1058, 1782],
    ]
  },
  options: {
    showArea: true,
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 3000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 5
    }
  },
  // for animation
  animation: {
    draw: function (data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};
// ##############################
// // // Email Subscriptions
// #############################

const emailsSubscriptionChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    series: [
      [1084, 886, 640, 1560, 1106, 906, 652, 868, 1136, 1220, 1512, 1790],
      [577, 1650, 1490, 1237, 1891, 1218, 1408, 1266, 939, 1016, 1864, 1224],
      [1373, 2086, 2848, 1074, 1067, 2096, 2122, 2036, 2026, 2990, 1362, 1991]
    ]
  },
  options: {
    stackBars: true,

    low: 0,
    high: 6000,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    },
  },

  responsiveOptions:
    []
  ,

  animation: {
    draw: function (data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {
  data: {
    labels: ["Telegram 32.3%", "Google 18.8%", "Website 48.8%"],
    series: [430, 250, 650]
  },
  options: {
    donut: true,
    donutWidth: 50,
    chartPadding: 0,
    labelOffset: 25,
    startAngle: 160
  },
  animation: {
    draw: function (data) {
      if (true) {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2 * 2,
            dur: durations2 * 2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const serviceUsage = {
  data: {
    labels: ["Booking Cab 23.2%", "Hotels 18.8%", "Flight Details 35%", "Currency Exchange 22.8%"],
    series: [430, 350, 650, 423]
  },
  options: {
    donut: true,
    donutWidth: 60,
    chartPadding: 0,
    labelOffset: -10,
    labelDirection: 'explode',
  },
  animation: {
    draw: function (data) {
      if (true) {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2 * 2,
            dur: durations2 * 2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

module.exports = {
  dailySalesChart,
  dailySalesChart1,
  dailyUsageServiceChart,
  emailsSubscriptionChart,
  completedTasksChart,
  serviceUsage
};
