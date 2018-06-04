import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import * as reducers from '../store/reducers'

import Sidebar from './Sidebar'
import { user } from '../store/actions/user'

/*
 * PrivateRoute : Provides basic template for valid service pages.(ex. Detail, List page)
 * It imposes <Sidebar> on every valid service pages, so we do not have to care about it on each pages.
 */
const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  // isInvalidURL : check if the given url is valid. If it is not, give out error page.
  const isInvalidURL = ({...rest}.computedMatch.path == "/") && (!{...rest}.computedMatch.isExact)

	return (
  		<Route {...rest} render={props => (
    		isAuthenticated ? ( 
          isInvalidURL ? (
            <h1>Logged in, but invalid URL!</h1>
          ) : (
            <div>
              <Sidebar {...props}/>
      		    <Component {...props}/>
            </div>
    		  )
        )
         : (
      		<Redirect to={{
        		pathname: '/signin/',
        		state: { from: props.location }
      		}}/>
    		)
  		)}/>
	)
}

const mapStateToProps = (state) => ({
  isAuthenticated: reducers.isAuthenticated(state),
})

export default connect(mapStateToProps, null)(PrivateRoute);