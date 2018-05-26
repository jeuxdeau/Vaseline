/* ORIGINAL ARC VER.

import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createHistory } from 'history'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import configureStore from 'store/configure'

import routes from 'routes'

const baseHistory = useRouterHistory(createHistory)({ basename: process.env.PUBLIC_PATH })
const store = configureStore({}, baseHistory)
const history = syncHistoryWithStore(baseHistory, store)
const root = document.getElementById('app')

const renderApp = () => (
  <Provider store={store}>
    <Router key={Math.random()} history={history} routes={routes} />
  </Provider>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
*/

import React from 'react'
import ReactDOM from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import { Provider } from 'react-redux'

//import './index.css'
import configureStore from './store/configure'

import { Route, Switch } from 'react-router'

import Signin from './containers/Signin'
import List from './containers/List'
import Detail from './containers/Detail'
import SignUp from './containers/Signup'
import IntroPage from './components/pages/IntroPage'

import PrivateRoute from './containers/PrivateRoute'

import 'bootstrap/dist/css/bootstrap.min.css'

import { PersistGate } from 'redux-persist/es/integration/react'

const history = createHistory()
const {store, persistor} = configureStore(history)

ReactDOM.render((
	<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/signin/" component={Signin} />
          <Route exact path="/signup/" component={SignUp} />
          <Route exact path="/intro/" component={IntroPage} />
          <PrivateRoute path="/detail/:name" component={Detail} />
          <PrivateRoute path="/" component={List} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
	</Provider>
), document.getElementById('app'))