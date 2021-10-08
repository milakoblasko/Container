import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MicroFrontend from './MFrontend';
import StaticFrontend from './StaticFrontend';
import Navbar from './Components/Navbar';
import Config from './Config';

const MfrontendComponent = ({ history }) => (
  <MFrontend
    history={history}
    host={Config.mfrontendHost}
    name="Mfrontend"
  />
);

const StaticMfrontendComponent = () => <StaticFrontend />;

const Dashboard = () => (
  <>
    <Navbar />
    <MicrofrontendComponent />
  </>
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/mfrontend" component={MfrontendComponent} />
    <Route exact path="/static" component={StaticMfrontendComponent} />
  </Switch>
);

export default Routes;
