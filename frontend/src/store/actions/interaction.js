import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const MESSAGE_REQUEST = '@@int/MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = '@@int/MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = '@@int/MESSAGE_FAILURE'

export const LIKE_REQUEST = '@@int/LIKE_REQUEST'
export const LIKE_SUCCESS = '@@int/LIKE_SUCCESS'
export const LIKE_FAILURE = '@@int/LIKE_FAILURE'

export const PROPOSAL_REQUEST = '@@int/PROPOSAL_REQUEST'
export const PROPOSAL_SUCCESS = '@@int/PROPOSAL_SUCCESS'
export const PROPOSAL_FAILURE = '@@int/PROPOSAL_FAILURE'

export const READ_MESSAGE_REQUEST = '@@int/READ_MESSAGE_REQUEST'
export const READ_MESSAGE_SUCCESS = '@@int/READ_MESSAGE_SUCCESS'
export const READ_MESSAGE_FAILURE = '@@int/READ_MESSAGE_FAILURE'

export const READ_LIKE_REQUEST = '@@int/READ_LIKE_REQUEST'
export const READ_LIKE_SUCCESS = '@@int/READ_LIKE_SUCCESS'
export const READ_LIKE_FAILURE = '@@int/READ_LIKE_FAILURE'

export const READ_PROPOSAL_REQUEST = '@@int/READ_PROPOSAL_REQUEST'
export const READ_PROPOSAL_SUCCESS = '@@int/READ_PROPOSAL_SUCCESS'
export const READ_PROPOSAL_FAILURE = '@@int/READ_PROPOSAL_FAILURE'
 
export const mSend = (sender, receiver, message) => ({
	[RSAA]: {
		endpoint: '/api/messages/',
		method: 'POST',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			"message":message,
			"is_read":false,
			"sender":sender,
			"receiver":receiver,
		}),
		types: [
			MESSAGE_REQUEST, MESSAGE_SUCCESS, MESSAGE_FAILURE
		]
	}
})

export const lSend = (sender, receiver) => ({
	[RSAA]: {
		endpoint: '/api/likes/',
		method: 'POST',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			"sender":sender,
			"receiver":receiver,
		}),
		types: [
			LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE
		]
	}
})

export const pSend = (sender, receiver) => ({
	[RSAA]: {
		endpoint: '/api/proposals/',
		method: 'POST',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			"sender":sender,
			"receiver":receiver,
		}),
		types: [
			PROPOSAL_REQUEST, PROPOSAL_SUCCESS, PROPOSAL_FAILURE
		]
	}
})

export const mRead = (id) => ({
	[RSAA]: {
		endpoint: '/api/messages/'+id + '/',
		method: 'PUT',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			"is_read":true,
		}),
		types: [
			READ_MESSAGE_REQUEST, READ_MESSAGE_SUCCESS, READ_MESSAGE_FAILURE
		]
	}
})

export const lRead = (id) => ({
	[RSAA]: {
		endpoint: '/api/likes/'+id + '/',
		method: 'PUT',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			"is_read":true,
		}),
		types: [
			READ_LIKE_REQUEST, READ_LIKE_SUCCESS, READ_LIKE_FAILURE
		]
	}
})

export const pRead = (id, granted) => ({
	[RSAA]: {
		endpoint: '/api/proposals/'+id + '/',
		method: 'PUT',
		headers: {'Content-type': 'application/json'},
		body: JSON.stringify({
			"is_read":true,
			"granted":granted,
		}),
		types: [
			READ_PROPOSAL_REQUEST, READ_PROPOSAL_SUCCESS, READ_PROPOSAL_FAILURE
		]
	}
})