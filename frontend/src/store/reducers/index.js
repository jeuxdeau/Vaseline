import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth, * as fromAuth from './auth'
import list, * as fromList from './list'

export default combineReducers ({
	auth: auth,
	list: list,
	router: routerReducer
})

// Use functions below to get authentication info
export const isAuthenticated = 
	state => fromAuth.isAuthenticated(state.auth)
export const accessToken = 
	state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired = 
	state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken = 
	state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired = 
	state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors = 
	state => fromAuth.errors(state.auth)
export const userID =
	state => fromAuth.userID(state.auth)

export function withAuth(headers={}) {
	return (state)=>({
		...headers,
		'Authorization': `Bearer ${accessToken(state)}`
	})
}

// Use functions below to get list info
export const currentCompanionList = 
	state => fromList.companionList(state.list)
export const listErrors = 
	state => fromList.errors(state.list)