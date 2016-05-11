import { Map } from 'immutable'
import Firebase from 'firebase'
import { loginSuccess, loginFailure, signUpSuccess, signUpFailure, logoutSuccess } from './reducers/users'
// Your Firebase Ref Goes here

const initialState = Map({
  ref: new Firebase('https://redact-fire.firebaseio.com/'),
  user: Map({
    uid: undefined,
    email: undefined
  })
})

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return loginSuccess(state, action.user)
    case 'LOGIN_FAILURE':
      return loginFailure(state)
    case 'SIGN_UP_FAILURE':
      return signUpFailure(state)
    case 'SIGN_UP_SUCCESS':
      return signUpSuccess(state)
    case 'LOGOUT_SUCCESS':
      return logoutSuccess(state)
  }
  return state
}
