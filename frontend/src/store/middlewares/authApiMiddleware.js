import { isRSAA, apiMiddleware } from 'redux-api-middleware'

import { TOKEN_RECEIVED, refreshAccessToken } from '../actions/auth'
import { refreshToken, isAccessTokenExpired } from '../reducers'

export default function createAuthApiMiddleware() {
	let postponedRSAAs = []

	return ({ dispatch, getState }) => {
        console.log(dispatch)

		const rsaaMiddleware = apiMiddleware({dispatch, getState})
		
		return (next) => (action) => {
			
            const nextCheckPostponed = (nextAction) => {
        		if(nextAction.type === TOKEN_RECEIVED) {
        			next(nextAction)
        			postponedRSAAs.forEach((postponed) => {
        				rsaaMiddleware(next)(postponed)
        			})
        			postponedRSAAs = []
        		} else {
        			next(nextAction)
        		}
        	}

        	if(isRSAA(action)) {
        		const state = getState()
        		const token = refreshToken(state)

        		if(token && isAccessTokenExpired(state)) {
        			postponedRSAAs.push(action)
        			if(postponedRSAAs.length === 1) {
        				const action = refreshAccessToken(token)
        				return rsaaMiddleware(nextCheckPostponed)(action)
        			} else {
        				return
        			}
        		}
        		return rsaaMiddleware(next)(action)
        	}
        
        	return next(action)
        
        }
    }
}