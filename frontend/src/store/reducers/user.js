import * as userAction from '../actions/user'

const initialState = {
	user: undefined,
	errors: {},
}

export default (state=initialState, action) => {
	switch(action.type) {
		case userAction.USER_SUCCESS:
			return {
				user: action.payload,
				errors: {}
			}
		case userAction.USER_FAILURE:
			return {
				user: undefined,
				errors: 
					action.payload.response || {'get_user_errors': action.payload.statusText},
			}
		default:
			return state
	}
}

export const userInfo = (state) => (state.user)
export const errors = (state) => (state.errors)