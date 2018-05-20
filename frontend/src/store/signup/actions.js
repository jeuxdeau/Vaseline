export const POST_SIGNUP_REQUEST = 'POST_SIGNUP_REQUEST'

export const postSignupRequest = (input) => {
  return {
    type: POST_SIGNUP_REQUEST,
    input
  }
}
