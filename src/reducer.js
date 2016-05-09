import { Map } from 'immutable'
import Firebase from 'firebase'

// Your Firebase Ref Goes here

const INITIAL_STATE = Map({
  ref: new Firebase('https://redact-fire.firebaseio.com/'),
  user: undefined
})

export default function (state = INITIAL_STATE, action) {
  console.log(action)
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return state
    case 'LOGIN_FAILURE':
      return state
    case 'SIGN_UP_FAILURE':
      return state
    case 'SIGN_UP_SUCCESS':
      return state
  }
  return state
}
