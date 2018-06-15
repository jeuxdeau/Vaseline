import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

export const MESSAGE_REQUEST = '@@interaction/MESSAGE_REQUEST'
export const MESSAGE_SUCCESS = '@@interaction/MESSAGE_SUCCESS'
export const MESSAGE_FAILURE = '@@interaction/MESSAGE_FAILURE'

export const LIKE_REQUEST = '@@interaction/LIKE_REQUEST'
export const LIKE_SUCCESS = '@@interaction/LIKE_SUCCESS'
export const LIKE_FAILURE = '@@interaction/LIKE_FAILURE'

export const PROPOSAL_REQUEST = '@@interaction/PROPOSAL_REQUEST'
export const PROPOSAL_SUCCESS = '@@interaction/PROPOSAL_SUCCESS'
export const PROPOSAL_FAILURE = '@@interaction/PROPOSAL_FAILURE'

// ===========================================================================================================
// Interaction : We manage 3 types of interactions (message, like, proposal) altogether.
//               Therefore, we need to specify "type" of the interaction when we send such request.
// ===========================================================================================================
export const interaction = (type, sender, receiver, message) => {
	switch(type) {
		case 'message':
			return {
				[RSAA]: {
					endpoint: '/api/messages/',
					method: 'POST',
					headers: {'Content-type':'application/json'},
					body: JSON.stringify({
						"message": message,
						"is_read": false, // since this is new message...
						"sender": sender,
						"receiver": receiver,
					}),
					type: [
						MESSAGE_REQUEST, MESSAGE_SUCCESS, MESSAGE_FAILURE
					]
				}
			}
			break
		case 'like':
			return {
				[RSAA]: {
					endpoint: '/api/likes/',
					method: 'POST',
					headers: {'Content-type':'application/json'},
					body: JSON.stringify({
						"sender": sender,
						"receiver": receiver,
					}),
					type: [
						LIKE_REQUEST, LIKE_SUCCESS, LIKE_FAILURE
					]
				}
			}
			break
		case 'proposal':
			return {
				[RSAA]: {
					endpoint: '/api/proposals/',
					method: 'POST',
					headers: {'Content-type':'application/json'},
					body: JSON.stringify({
						"sender": sender,
						"receiver": receiver,
					}),
					type: [
						PROPOSAL_REQUEST, PROPOSAL_SUCCESS, PROPOSAL_FAILURE
					]
				}
			}
			break
	}
}