import { RSAA } from 'redux-api-middleware'

export const POST_SIGNUP_REQUEST = '@@signup/POST_SIGNUP_REQUEST'

export const postInput = (input) => ({
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

export const postSignupRequest = (input) => ({
	[RSAA]: {
		endpoint: '/api/users/',
		method: 'POST',
		body: JSON.stringify({postInput(input)}),
		headers: { 'Content-type': 'application/json' },
		type: POST_SIGNUP_REQUEST
	}
})
