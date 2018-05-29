import { RSAA } from 'redux-api-middleware'
//import { withAuth } from '../reducers'

export const USER_REQUEST = '@@user/USER_REQUEST'
export const USER_SUCCESS = '@@user/USER_SUCCESS'
export const USER_FAILURE = '@@user/USER_FAILURE'

export const user = ({id}) => ({
	[RSAA]: {
		endpoint: '/api/users/'+id,
		method: 'GET',
		headers: 'Content-type': 'application/json',
		types: [
			USER_REQUEST, USER_SUCCESS, USER_FAILURE
		]
	}
})