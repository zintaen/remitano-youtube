import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { AppProvider } from 'contexts/app';
import routes from './routes';

ReactDOM.render(
  <AppProvider>
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            exact={!!route.exact}
            key={route.path}
            path={route.path}
            render={(props) => <route.component {...props} />}
          />
        ))}
      </Switch>
    </Router>
  </AppProvider>,
  document.getElementById('root'),
);
