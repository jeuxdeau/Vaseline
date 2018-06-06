import { RSAA } from 'redux-api-middleware'

export const SIGNUP_REQUEST = '@@signup/SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = '@@signup/SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = '@@signup/SIGNUP_FAILURE'

export const postSignup = () => ({
	[RSAA]: {
		endpoint: '/api/users/',
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		types: [
			SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE
		]
	}
})