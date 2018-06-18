import { RSAA } from 'redux-api-middleware'
//import { withAuth } from '../reducers' : we don't need it right now, as fetching user data does not require auth.

export const USER_REQUEST = '@@user/USER_REQUEST'
export const USER_SUCCESS = '@@user/USER_SUCCESS'
export const USER_FAILURE = '@@user/USER_FAILURE'

export const USER_NEWS_REQUEST = '@@user/USER_NEWS_REQUEST'
export const USER_NEWS_SUCCESS = '@@user/USER_NEWS_SUCCESS'
export const USER_NEWS_FAILURE = '@@user/USER_NEWS_FAILURE'

export const USER_REPR_REQUEST = '@@user/USER_REPR_COMP_REQUEST'
export const USER_REPR_SUCCESS = '@@user/USER_REPR_COMP_SUCCESS'
export const USER_REPR_FAILURE = '@@user/USER_REPR_COMP_FAILURE'

export const USER_REPR_UPDATE_REQUEST = '@@user/USER_REPR_UPDATE_REQUEST'
export const USER_REPR_UPDATE_SUCCESS = '@@user/USER_REPR_UPDATE_SUCCESS'
export const USER_REPR_UPDATE_FAILURE = '@@user/USER_REPR_UPDATE_FAILURE'

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

export const user_repr = (id) => ({
	[RSAA]: {
		endpoint: '/api/users/update/represent/'+ id + '/',
		method: 'GET',
		headers: { 'Content-type': 'application/json' },
		types: [
			USER_REPR_REQUEST, USER_REPR_SUCCESS, USER_REPR_FAILURE
		]
	}	
})

export const user_repr_update = (userId, reprId) => ({
	[RSAA]: {
		endpoint: '/api/users/update/represent/'+ userId + '/',
		method: 'PUT',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({
			represent_companion: reprId,
		}),
		types: [
			USER_REPR_UPDATE_REQUEST, USER_REPR_UPDATE_SUCCESS, USER_REPR_UPDATE_FAILURE
		]
	}	
})