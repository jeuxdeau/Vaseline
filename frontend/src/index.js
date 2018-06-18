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

import Account from './containers/Account'
import AccountUser from './containers/AccountUser'
import AccountCompanion from './containers/AccountCompanion'
import AccountCreateCompanion from './containers/AccountCreateCompanion'
import Fileupload from './components/molecules/Fileupload'
import Search from './containers/Search'

import PrivateRoute from './containers/PrivateRoute'

import Notification from './containers/Notification'

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
	        <PrivateRoute exact path="/account/" component={Account} />
	        <PrivateRoute path="/account/user/" component={AccountUser} />
	        <PrivateRoute path="/account/companion/:id" component={AccountCompanion} />
		<PrivateRoute path="/account/companion_create/" component={AccountCreateCompanion}/>
          <Route exact path="/intro/" component={IntroPage} />
		      <Route exact path="/upload/" component={Fileupload} />
          <PrivateRoute path="/detail/:name" component={Detail} />
		      <PrivateRoute path="/search/" component={Search} />
          <PrivateRoute path="/notification" component={Notification} />
          <PrivateRoute path="/" component={List} />
        </Switch>
      </ConnectedRouter>
    </PersistGate>
	</Provider>
), document.getElementById('app'))
