import { Map } from 'immutable'
import Firebase from 'firebase'
import { loginSuccess, loginFailure, signUpSuccess, signUpFailure, logoutSuccess } from './reducers/users'
// Your Firebase Ref Goes here

const initialState = Map({
  ref: new Firebase('https://redact-fire.firebaseio.com/'),
  user: undefined
})

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return loginSuccess(state, action.user)
    case 'LOGIN_FAILURE':
      return state
    case 'SIGN_UP_FAILURE':
      return state
    case 'SIGN_UP_SUCCESS':
      return state
    case 'LOGOUT_SUCCESS':
      return state
  }
  return state
}
