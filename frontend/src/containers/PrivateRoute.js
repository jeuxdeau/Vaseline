import React from 'react'
import { Route, Redirect } from 'react-router'
import { connect } from 'react-redux'
import * as reducers from '../store/reducers'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  const isInvalidURL = ({...rest}.computedMatch.path == "/") && (!{...rest}.computedMatch.isExact)

	return (
  		<Route {...rest} render={props => (
    		isAuthenticated ? ( 
          isInvalidURL ? (
            <h1>Logged in, but invalid URL!</h1>
          ) : (
      		  <Component {...props}/>
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
  isAuthenticated: reducers.isAuthenticated(state)
})

export default connect(mapStateToProps, null)(PrivateRoute);