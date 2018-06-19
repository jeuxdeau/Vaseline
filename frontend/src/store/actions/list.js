import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const LIST_REQUEST = '@@list/LIST_REQUEST'
export const LIST_SUCCESS = '@@list/LIST_SUCCESS'
export const LIST_FAILURE = '@@list/LIST_FAILURE'

export const IMG_LIST_REQUEST = '@@list/IMG_LIST_REQUEST'
export const IMG_LIST_SUCCESS = '@@list/IMG_LIST_SUCCESS'
export const IMG_LIST_FAILURE = '@@list/IMG_LIST_FAILURE'

export const list = () => ({
	[RSAA]: {
		endpoint: '/api/companions/',
		method: 'GET',
		headers: withAuth({'Content-type': 'application/json'}),
		types: [
			LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE
		]
	}
})

export const imgList = () => ({
	[RSAA]: {
		endpoint: '/api/images/',
		method: 'GET',
		headers: {'Content-type': 'application/json'},
		types: [
			IMG_LIST_REQUEST, IMG_LIST_SUCCESS, IMG_LIST_FAILURE
		]
	}	
})