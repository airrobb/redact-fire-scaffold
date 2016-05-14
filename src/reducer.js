import { Map } from 'immutable'
import Firebase from 'firebase'
import { loginSuccess, loginFailure, signUpSuccess, signUpFailure, logoutSuccess, validateSignup } from './reducers/users'
// Your Firebase Ref Goes here

const initialState = Map({
  ref: new Firebase('https://redact-fire.firebaseio.com/'),
  user: Map({
    uid: undefined,
    email: undefined
  }),
  signUpForm: Map({
    email: Map({
      value: undefined,
      validation: undefined
    }),
    password1: Map({
      value: undefined,
      validation: undefined
    }),
    password2: Map({
      value: undefined,
      validation: undefined
    })
  })
})

export default function (state = initialState, action) {
  switch (action.type) {

    case 'LOGIN_SUCCESS':
      return loginSuccess(state, action.user)
    case 'LOGIN_FAILURE':
      return loginFailure(state)
    case 'VALIDATE_SIGNUP':
      return validateSignup(state, action.field, action.value)
    case 'SIGN_UP_FAILURE':
      return signUpFailure(state)
    case 'SIGN_UP_SUCCESS':
      return signUpSuccess(state)
    case 'LOGOUT_SUCCESS':
      return logoutSuccess(state)
  }
  return state
}
