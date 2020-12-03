import React from "react"
import ReactDOM from "react-dom"
import { createBrowserHistory } from "history"
import "./styles/index.scss"
import { Route, Switch, Redirect } from "react-router-dom"
import * as serviceWorker from "./serviceWorker"
import { Router } from "react-router-dom"

import Dashboard from "../src/components/Dashboard"
import Layout from "../src/layout"

import GlobalContextProvider from "./contexts/global-context-provider"
import { ToastMessageProvider } from "./contexts/toast-message-provider"

const routes = (
  <Switch>
    <Redirect from="/" exact to="/profile/settings" />
    <Route path="/profile/settings" exact component={Dashboard} />
  </Switch>
)

const history = createBrowserHistory()

ReactDOM.render(
  <GlobalContextProvider>
    <ToastMessageProvider>
      <Router history={history}>
        <Layout>{routes}</Layout>
      </Router>
    </ToastMessageProvider>
  </GlobalContextProvider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
