import { RSAA } from 'redux-api-middleware'
import { withAuth } from '../reducers'

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

export const ACCOUNT_USER_PASSWORD_REQUEST = '@@auth/ACCOUNT_USER_PASSWORD_REQUEST'
export const ACCOUNT_USER_PASSWORD_SUCCESS = '@@auth/ACCOUNT_USER_PASSWORD_SUCCESS'
export const ACCOUNT_USER_PASSWORD_FAILURE = '@@auth/ACCOUNT_USER_PASSWORD_FAILURE'

export const ACCOUNT_USER_PROFILE_REQUEST = '@@auth/ACCOUNT_USER_PROFILE_REQUEST'
export const ACCOUNT_USER_PROFILE_SUCCESS = '@@auth/ACCOUNT_USER_PROFILE_SUCCESS'
export const ACCOUNT_USER_PROFILE_FAILURE = '@@auth/ACCOUNT_USER_PROFILE_FAILURE'

export const ACCOUNT_COMPANION_REQUEST = '@@auth/ACCOUNT_COMPANION_REQUEST'
export const ACCOUNT_COMPANION_SUCCESS = '@@auth/ACCOUNT_COMPANION_SUCCESS'
export const ACCOUNT_COMPANION_FAILURE = '@@auth/ACCOUNT_COMPANION_FAILURE'

export const ACCOUNT_CREATE_COMPANION_REQUEST = '@@auth/ACCOUNT_CREATE_COMPANION_REQUEST'
export const ACCOUNT_CREATE_COMPANION_SUCCESS = '@@auth/ACCOUNT_CREATE_COMPANION_SUCCESS'
export const ACCOUNT_CREATE_COMPANION_FAILURE = '@@auth/ACCOUNT_CREATE_COMPANION_FAILURE'

export const FILE_REQUEST = '@@auth/FILE_REQUEST'
export const FILE_SUCCESS = '@@auth/FILE_SUCCESS'
export const FILE_FAILURE = '@@auth/FILE_FAILURE'


const ProcUserPasswordUpdateInfo = (input) => ({
	"password":input.password,
})

const ProcUserProfileUpdateInfo = (input) => (
	{
        "profile":{
                "nickname": input.nickname,
                "first_address": input.first_address,
                "second_address": input.second_address,
                "age": input.age,
                "gender": input.gender,
                "email": input.email
        }
})

const ProcCompanionUpdateInfo = (input) => ({
	"desired_mate":{
		"personality":{
			"affinity_with_human":input.desired_mate_personality.affinity_with_human,
			"affinity_with_dog": input.desired_mate_personality.affinity_with_dog,
                        "shyness": input.desired_mate_personality.shyness,
                        "activity": input.desired_mate_personality.activity,
                        "aggression": input.desired_mate_personality.aggression,
                        "loudness": input.desired_mate_personality.loudness,
                        "etc": input.desired_mate_personality.etc
		},
		"breed":input.desired_mate.breed,
		"sex":input.desired_mate.sex,
		"size":input.desired_mate.size
	},
	"personality":{
		"affinity_with_human":input.personality.affinity_with_human,
        	"affinity_with_dog": input.personality.affinity_with_dog,
               	"shyness": input.personality.shyness,
               	"activity": input.personality.activity,
                "aggression": input.personality.aggression,
                "loudness": input.personality.loudness,
                "etc": input.personality.etc
	},
	"mating_season":{
		"season_start":input.mating_season.season_start,
		"season_end":input.mating_season.season_end
	},
	"like_sent": [],
    	"like_received": [],
    	"proposal_sent": [],
    	"proposal_received": [],
    	"message_sent": [],
    	"message_received": [],
	"name":input.companion_info.name,
	"sex":input.companion_info.sex,
	"birth_year":input.companion_info.birth_year,
	"breed":input.companion_info.breed,
	"size":input.companion_info.size
})


const ProcCompanionCreateInfo = (input, user_id) => ({
	"desired_mate":{
		"personality":{
			"affinity_with_human":input.desired_mate_personality.affinity_with_human,
			"affinity_with_dog": input.desired_mate_personality.affinity_with_dog,
                        "shyness": input.desired_mate_personality.shyness,
                        "activity": input.desired_mate_personality.activity,
                        "aggression": input.desired_mate_personality.aggression,
                        "loudness": input.desired_mate_personality.loudness,
                        "etc": input.desired_mate_personality.etc
		},
		"breed":input.desired_mate.breed,
		"sex":input.desired_mate.sex,
		"size":input.desired_mate.size
	},
	"personality":{
		"affinity_with_human":input.personality.affinity_with_human,
        	"affinity_with_dog": input.personality.affinity_with_dog,
               	"shyness": input.personality.shyness,
               	"activity": input.personality.activity,
                "aggression": input.personality.aggression,
                "loudness": input.personality.loudness,
                "etc": input.personality.etc
	},
	"mating_season":{
		"season_start":input.mating_season.season_start,
		"season_end":input.mating_season.season_end
	},
	"media":[],
	"like_sent": [],
    	"like_received": [],
    	"proposal_sent": [],
    	"proposal_received": [],
    	"message_sent": [],
    	"message_received": [],
	"name":input.companion_info.name,
	"sex":input.companion_info.sex,
	"birth_year":input.companion_info.birth_year,
	"breed":input.companion_info.breed,
	"size":input.companion_info.size,
	"user":user_id
})


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
	"media": [],
    "like_sent": [],
    "like_received": [],
    "proposal_sent": [],
    "proposal_received": [],
    "message_sent": [],
    "message_received": []
  },
  "profile": {
    "nickname": input.profile.nickname,
    "first_address": input.profile.rough_address,
    "second_address": input.profile.detailed_address,
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
		endpoint: '/api/users/',
		method: 'POST',
		body: JSON.stringify(ProcUserInfo(input)),
		headers: {'Content-type': 'application/json'},
		types: [
			SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE
		]
	}
})

export const account_user_password = (input, user_id) => ({
        [RSAA]: {
		            endpoint: '/api/users/update/password/'+user_id+'/',
                method: 'PUT',
                body: JSON.stringify(ProcUserPasswordUpdateInfo(input)),
                headers: {'Content-type': 'application/json'},
                types: [
                        ACCOUNT_USER_PASSWORD_REQUEST, ACCOUNT_USER_PASSWORD_SUCCESS, ACCOUNT_USER_PASSWORD_FAILURE
                ]
        }
})

export const account_user_profile = (input, user_id) => ({
        [RSAA]: {
                endpoint: '/api/users/update/profile/'+user_id+'/',
                method: 'PUT',
                body: JSON.stringify(ProcUserProfileUpdateInfo(input)),
                headers: {'Content-type': 'application/json'},
                types: [
                        ACCOUNT_USER_PROFILE_REQUEST, ACCOUNT_USER_PROFILE_SUCCESS, ACCOUNT_USER_PROFILE_FAILURE
                ]
        }
})

export const account_companion = (input, companion_id) => ({
        [RSAA]: {
                endpoint: '/api/companions/'+companion_id+'/',
                method: 'PUT',
                body: JSON.stringify(ProcCompanionUpdateInfo(input)),
                headers: {'Content-type': 'application/json'},
                types: [
                        ACCOUNT_COMPANION_REQUEST, ACCOUNT_COMPANION_SUCCESS, ACCOUNT_COMPANION_FAILURE
                ]
        }
})

export const account_create_companion = (input, user_id) => ({
        [RSAA]: {
                endpoint: '/api/companions/',
                method: 'POST',
                body: JSON.stringify(ProcCompanionCreateInfo(input, user_id)),
                headers: withAuth({'Content-type': 'application/json'}),
                types: [
                        ACCOUNT_CREATE_COMPANION_REQUEST, ACCOUNT_CREATE_COMPANION_SUCCESS, ACCOUNT_CREATE_COMPANION_FAILURE
                ]
        }
})


export const search = () => ({
})

export const filePost = (fileData) => ({
        [RSAA]: {
                endpoint: '/api/upload/',
                method: 'POST',
                body: JSON.stringify(fileData),
                headers: withAuth({'Content-type': 'application/json'}),
                types: [
                        ACCOUNT_CREATE_COMPANION_REQUEST, ACCOUNT_CREATE_COMPANION_SUCCESS, ACCOUNT_CREATE_COMPANION_FAILURE
                ]
        }
})
