import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

/* seperate classes of states we will use in this project.
 * auth : Authorization information.
 * list : Companion list information.
 * user : User information.
 */
import auth, * as fromAuth from './auth'
import list, * as fromList from './list'
import user, * as fromUser from './user'

export default combineReducers ({
	auth: auth,
	list: list,
	user: user,
	router: routerReducer
})

// 1. AUTH
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

// 2. LIST
export const currentCompanionList = 
	state => fromList.companionList(state.list)
export const listErrors = 
	state => fromList.errors(state.list)

// 3. USER
export const userInfo =
	state => fromUser.user(state.user)
export const userErrors =
	state => fromUser.errors(state.user)