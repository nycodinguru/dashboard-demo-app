import React from 'react';
import './styles/index.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import NavPanel from './components/NavPanel';

function App() {
    return (
        <React.Fragment>
            <NavPanel />
            <Switch>
                <Route
                exact
                path="/"
                render={() => <Redirect to="/profile/settings" />}
                />
                <Route
                exact
                path="/profile/settings"
                render={() => <Dashboard />}
                />
            </Switch>
    </React.Fragment>
            );
          }
          
          export default App;
