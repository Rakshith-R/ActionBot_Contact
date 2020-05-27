import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import { bugs, website, server } from "variables/general.js";

import {
  dailySalesChart,
  dailySalesChart1,
  dailyUsageServiceChart,
  emailsSubscriptionChart,
  completedTasksChart,
  serviceUsage
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const [data, setData] = React.useState({ Incidents: [], Actions: [], frequentActions: { labels: [], series: [] } })
  const cb = React.useCallback(() => {
    fetch("http://localhost:5000/api")
      .then((res) => {
        console.log(res);
        // setData(res)
        return res.json()
      }).then(res => {
        // const i = res.Incidents.map(i => { return { ...i, timestamp: Date(i.timestamp).getLocaleDateTimeString } })
        console.log(res)
        res['Incidents'] = res['Incidents'].map(i => {
          i[2] = new Date(i[2] * 1000).toLocaleString('en-IN')
          return i
        })
        res['Actions'] = res['Actions'].map(i => {
          i[2] = new Date(i[2] * 1000).toLocaleString('en-IN')
          return i
        })
        console.log(res)
        setData(res); console.log(res)
      }
      )
  }, [data, setData])
  React.useEffect(() => {
    cb()
  }, [])
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="warning" stats icon>
              <CardIcon color="warning">
                <Icon>storage</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Server Capacity</p>
              <h3 className={classes.cardTitle}>
                75<small>%</small>
              </h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  Just Updated
                </a>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="success" stats icon>
              <CardIcon color="success">
                <Icon>check_circle</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Total Sessions Today</p>
              <h3 className={classes.cardTitle}>4,245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="danger" stats icon>
              <CardIcon color="danger">
                <Icon>info_outline</Icon>
              </CardIcon>
              <p className={classes.cardCategory}>Incidents</p>
              <h3 className={classes.cardTitle}>175</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Live
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={6} md={3}>
          <Card>
            <CardHeader color="info" stats icon>
              <CardIcon color="info">
                <Accessibility />
              </CardIcon>
              <p className={classes.cardCategory}>Active Users</p>
              <h3 className={classes.cardTitle}>1245</h3>
            </CardHeader>
            <CardFooter stats>
              <div className={classes.stats}>
                <Update />
                Just Updated
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Usage</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 55%
                </span>{" "}
                increase in usage today.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 1 minute ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={emailsSubscriptionChart.data}
                type="Bar"
                options={emailsSubscriptionChart.options}
                responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                listener={emailsSubscriptionChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Usage by medium.</h4>
              <p className={classes.cardCategory}>{'Telegram, Google Assitant, Website'}</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 2 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={completedTasksChart.data}
                type="Pie"
                options={completedTasksChart.options}
                listener={completedTasksChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Share of Each medium</h4>
              <p className={classes.cardCategory}>{'Telegram, Google Assitant, Website'}</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 3 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="success">
              <ChartistGraph
                className="ct-chart"
                data={dailyUsageServiceChart.data}
                type="Line"
                options={dailyUsageServiceChart.options}
                listener={dailyUsageServiceChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Services Usage</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowUpward className={classes.upArrowCardCategory} /> 10%
                </span>{" "}
                increase in usage today.
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 1 minute ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="info">
              <ChartistGraph
                className="ct-chart"
                data={data.frequentActions}
                type="Pie"
                options={serviceUsage.options}
                listener={serviceUsage.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Percentage use of Each Service</h4>
              <p className={classes.cardCategory}>{'Flight Details is the most used service'}</p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 5 days ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader color="warning">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart1.data}
                type="Line"
                options={dailySalesChart1.options}
                responsiveOptions={dailySalesChart1.responsiveOptions}
                listener={dailySalesChart1.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Incidents.</h4>
              <p className={classes.cardCategory}>
                <span className={classes.successText}>
                  <ArrowDownward className={classes.upArrowCardCategory} /> 5%
                </span>{" "}
                decrease in Incidents
              </p>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated just now
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Fallback Triggered :"
            headerColor="primary"
            tabs={[
              {
                tabName: "Incidents",
                tabIcon: BugReport,
                tabContent: (
                  <Table
                    tableHeaderColor="warning"
                    tableHead={["ID", "Name", "Time"]}
                    tableData={data.Incidents}
                  />
                  // <Tasks
                  //   checkedIndexes={[]}
                  //   tasksIndexes={[]}
                  //   tasks={data.Incidents}
                  // />
                )
              },
              // {
              //   tabName: "Website",
              //   tabIcon: Code,
              //   tabContent: (
              //     <Tasks
              //       checkedIndexes={[0]}
              //       tasksIndexes={[0, 1]}
              //       tasks={website}
              //     />
              //   )
              // },
              // {
              //   tabName: "Server",
              //   tabIcon: Cloud,
              //   tabContent: (
              //     <Tasks
              //       checkedIndexes={[1]}
              //       tasksIndexes={[0, 1, 2]}
              //       tasks={server}
              //     />
              //   )
              // }
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Actions Performed</h4>
              {/* <p className={classes.cardCategoryWhite}>

              </p> */}
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Time"]}
                tableData={data.Actions}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
