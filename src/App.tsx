import { lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const LayoutContainer = lazy(
  () => import('@containers/layout/LayoutContainer')
);

const App = () => (
  <Router>
    <Switch>
      {/* <Route path="/login" component={Login} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/forgot-password" component={ForgotPassword} /> */}

      {/* Place new routes over this */}
      <Route path="/app" component={LayoutContainer} />
      {/* If you have an index page, you can remothis Redirect */}
      <Redirect exact from="/" to="/app" />
    </Switch>
  </Router>
);

export default App;
