import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const LIST_REQUEST = '@@list/LIST_REQUEST'
export const LIST_SUCCESS = '@@list/LIST_SUCCESS'
export const LIST_FAILURE = '@@list/LIST_FAILURE'

export const list = () => ({
	[RSAA]: {
		endpoint: '/companions/',
		method: 'GET',
		headers: withAuth({'Content-type': 'application/json'}),
		types: [
			LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE
		]
	}
})