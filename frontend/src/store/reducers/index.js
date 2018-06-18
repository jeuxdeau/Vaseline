import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import auth, * as fromAuth from './auth'
import list, * as fromList from './list'
import userAction, * as fromUser from './user'
//import * as fromUser from './user'

export default combineReducers ({
	auth: auth,
	list: list,
	user: userAction,
	router: routerReducer,
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
export const accountUserPasswordErrors =
        state => fromAuth.errors_account_user_password(state.auth)
export const accountUserProfileErrors =
        state => fromAuth.errors_account_user_profile(state.auth)
export const accountCompanionErrors =
        state => fromAuth.errors_companion(state.auth)
export const accountCreateCompanionErrors =
        state => fromAuth.errors_create_companion(state.auth)

export function withAuth(headers={}) {
	return (state)=>({
		...headers,
		'Authorization': `Bearer ${accessToken(state)}`
	})
}

// Use functions below to get list info
export const currentCompanionList = 
	state => fromList.companionList(state.list)
export const currentCompanionAddressList =
	state => fromAuth.companionAddressList(state.auth)
export const listErrors = 
	state => fromList.errors(state.list)
export const userErrors =
	state => fromUser.errors(state.user)
export const userID =
	state => fromAuth.userID(state.auth)
export const userInfo =
	state => fromUser.userInfo(state.user)
export const userNews =
	state => fromUser.userNews(state.user)
