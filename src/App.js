import React, { useReducer } from 'react';
import './styles/index.scss';
import { Route, Switch, Redirect } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import NavPanel from './components/NavPanel';

const reducer = (state, action) => {
    switch (action.type) {
        case 'nav_panel': 
            return { 
                ...state, 
                navOpen: action.value
            };
        default:
            break;
    }
    return state;
};

const initialState = {
    navOpen: false
};

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { navOpen } = state;
    return (
        <React.Fragment>
            <NavPanel 
                state={state}
                dispatch={dispatch}
            />
            <Switch>
                <Route
                    path="/" exact
                    render={() => <Redirect to="/profile/settings" />}
                />
                <Route
                    path="/profile/settings" exact
                    render={() => <Dashboard 
                    state={state}
                    />}
                />
            </Switch>
        </React.Fragment>
    );
}
          
          export default App;
