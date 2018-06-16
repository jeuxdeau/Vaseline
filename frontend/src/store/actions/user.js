import { RSAA } from 'redux-api-middleware'
//import { withAuth } from '../reducers' : we don't need it right now, as fetching user data does not require auth.

export const USER_REQUEST = '@@user/USER_REQUEST'
export const USER_SUCCESS = '@@user/USER_SUCCESS'
export const USER_FAILURE = '@@user/USER_FAILURE'

export const USER_NEWS_REQUEST = '@@user/USER_NEWS_REQUEST'
export const USER_NEWS_SUCCESS = '@@user/USER_NEWS_SUCCESS'
export const USER_NEWS_FAILURE = '@@user/USER_NEWS_FAILURE'

export const user = (id) => ({
	[RSAA]: {
		endpoint: '/api/users/'+id,
		method: 'GET',
		headers: { 'Content-type': 'application/json' },
		types: [
			USER_REQUEST, USER_SUCCESS, USER_FAILURE
		]
	}
})

export const user_news = (id) => ({
	[RSAA]: {
		endpoint: '/api/total/'+id,
		method: 'GET',
		headers: { 'Content-type': 'application/json' },
		types: [
			USER_NEWS_REQUEST, USER_NEWS_SUCCESS, USER_NEWS_FAILURE
		]
	}
})