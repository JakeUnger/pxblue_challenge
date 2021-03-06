import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Different App Pages/Routes
import Alerts from "../pages/alerts";
import Schedule from "../pages/schedule";
import Logout from "../pages/logout";
import Resources from "../pages/resources";
import EventLog from "../pages/events";
import Settings from "../pages/settings";
import Userguide from "../pages/userguide";
import UserProfile from "../pages/profile";
import License from "../pages/license";
import Home from "../pages/home";

/*
The main page body, which contains the route definitions
*/
const Main = ({ style }) => (
  <main style={{ padding: "16px" }}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/alerts" component={Alerts} />
        <Route exact path="/schedule" component={Schedule} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/resources" component={Resources} />
        <Route exact path="/eventlog" component={EventLog} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/userguide" component={Userguide} />
        <Route exact path="/profile" component={UserProfile} />
        <Route exact path="/license" component={License} />
        <Route exact path="/logout" component={Logout} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  </main>
);
export default Main;
