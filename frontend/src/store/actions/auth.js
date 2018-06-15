import { RSAA } from 'redux-api-middleware'

export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE'

export const TOKEN_REQUEST = '@@auth/TOKEN_REQUEST'
export const TOKEN_RECEIVED = '@@auth/TOKEN_RECEIVED'
export const TOKEN_FAILURE = '@@auth/TOKEN_FAILURE'

export const LOGOUT = '@@auth/LOGOUT'

export const SIGNUP_REQUEST = '@@auth/SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = '@@auth/SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = '@@auth/SIGNUP_FAILURE'

const ProcUserInfo = (input) => ({
  "username": input.username,
  "password": input.password,
  "companion": {
    "name": input.companion.name,
    "sex": input.companion.sex,
    "birth_year": input.companion.birth_year,
    "breed": input.companion.breed,
    "size": input.companion.size,
    "desired_mate": {
      "breed": input.companion.desired_mate.breed,
      "sex": input.companion.desired_mate.sex,
      "size": input.companion.desired_mate.size
    },
    "personality": {
      "affinity_with_human": input.companion.personality.affinity_with_human,
      "affinity_with_dog": input.companion.personality.affinity_with_dog,
      "shyness": input.companion.personality.shyness,
      "activity": input.companion.personality.activity,
      "loudness": input.companion.personality.loudness,
      "aggression": input.companion.personality.aggression,
      "etc": input.companion.personality.etc
    },
    "mating_season": {
      "season_start": input.companion.mating_season.season_start,
      "season_end": input.companion.mating_season.season_end
    },
    "like_sent": [],
    "like_received": [],
    "proposal_sent": [],
    "proposal_received": [],
    "message_sent": [],
    "message_received": []
  },
  "profile": {
    "nickname": input.profile.nickname,
    "postal_code": input.profile.postal_code,
    "rough_address": input.profile.rough_address,
    "detailed_address": input.profile.detailed_address,
    "age": input.profile.age,
    "gender": input.profile.gender,
    "email": input.profile.email
  }
})


export const login = (username, password) => ({
	[RSAA]: {
		endpoint: '/api/auth/token/obtain/',
		method: 'POST',
		body: JSON.stringify({username, password}),
		headers: { 'Content-type': 'application/json'},
		types: [
			LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
		]
	}
})

export const refreshAccessToken = (token) => ({
	[RSAA]: {
		endpoint: '/api/auth/token/refresh/',
		method: 'POST',
		body: JSON.stringify({refresh: token}),
		headers: { 'Content-type': 'application/json'},
		types: [
			TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
		]
	}
})

export const logout = () => ({
	type: LOGOUT,
})

export const signup = (input) => ({
	[RSAA]: {
		endpoint: 'api/users/',
		method: 'POST',
		body: JSON.stringify(ProcUserInfo(input)),
		headers: {'Content-type': 'application/json'},
		types: [
			SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE
		]
	}
})

export const search = () => ({

})
