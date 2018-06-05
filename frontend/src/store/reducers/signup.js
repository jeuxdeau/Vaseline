import * as signup from '../actions/signup'

const initialState = {
}

export default (state=initialState, action) => {
	console.log(action)
	switch(action.type) {
		case signup.POST_SIGNUP_SUCCESS:
			console.log("SIGNUP SUCCESS!")
			return {}
		case signup.POST_SIGNUP_FAILURE:
			console.log("SIGNUP FAILURE!")
			return {}
		default:
			return state
	}
}