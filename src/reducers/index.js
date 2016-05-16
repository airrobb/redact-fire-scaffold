import { Map } from 'immutable'
import Firebase from 'firebase'
import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import { loginSuccess, loginFailure, loginError, logoutSuccess, validateLogin } from './actions/users'
import { signUpSuccess, signUpFailure, signUpError, validateSignup } from './actions/signup'
import { updateDetailsSuccess, updateDetailsError, validateChangeEmail, changeEmailSuccess, changeEmailError } from './actions/account'

const initialState = Map({
  ref: new Firebase('https://redact-fire.firebaseio.com/'),
  user: Map({
    uid: undefined,
    email: undefined,
    avatar: undefined,
    info: Map({
    })
  }),
  account: Map({
    detailsForm: Map({
      name: undefined,
      location: undefined,
      description: undefined,
      waiting: false,
      message: Map({
        type: '',
        active: false,
        content: Map({
          headline: undefined,
          message: undefined
        })
      })
    }),
    changeEmailForm: Map({
      email1:  Map({
        value: undefined,
        validation: undefined
      }),
      email2:  Map({
        value: undefined,
        validation: undefined
      }),
      password:  Map({
        value: undefined,
        validation: undefined
      }),
      valid: false,
      waiting: false,
      message: Map({
        type: '',
        active: false,
        content: Map({
          headline: undefined,
          message: undefined
        })
      })
    })
  }),
  loginForm: Map({
    email: Map({
      value: undefined,
      validation: undefined
    }),
    password: Map({
      value: undefined,
      validation: undefined
    }),
    valid: false,
    waiting: false,
    message: Map({
      type: '',
      active: false,
      content: Map({
        headline: undefined,
        message: undefined
      })
    })
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
    }),
    valid: false,
    waiting: false,
    message: Map({
      type: '',
      active: false,
      content: Map({
        headline: undefined,
        message: undefined
      })
    })
  })
})

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'VALIDATE_LOGIN':
      return validateLogin(state, action.field, action.value)
    case 'LOGIN_SUCCESS':
      return loginSuccess(state, action.user)
    case 'LOGIN_FAILURE':
      return loginFailure(state)
    case 'LOGIN_ERROR':
      return loginError(state)
    case 'VALIDATE_SIGNUP':
      return validateSignup(state, action.field, action.value)
    case 'SIGNUP_ERROR':
      return signUpError(state)
    case 'SIGNUP_FAILURE':
      return signUpFailure(state)
    case 'SIGNUP_SUCCESS':
      return signUpSuccess(state)
    case 'LOGOUT_SUCCESS':
      return logoutSuccess(state)
    case 'UPDATE_DETAILS_WAITING':
      return updateDetailsWaiting(state)
    case 'UPDATE_DETAILS_SUCCESS':
      return updateDetailsSuccess(state)
    case 'UPDATE_DETAILS_ERROR':
      return updateDetailsError(state)
    case 'VALIDATE_CHANGE_EMAIL':
      return validateChangeEmail(state, action.field, action.value)
    case 'CHANGE_EMAIL_WAITING':
      return changeEmailWaiting(state)
    case 'CHANGE_EMAIL_SUCCESS':
      return changeEmailSuccess(state)
    case 'CHANGE_EMAIL_ERROR':
      return changeEmailError(state)
  }
  return state
}


export const reducers = combineReducers({
  app: reducer,
  routing: routerReducer
})
