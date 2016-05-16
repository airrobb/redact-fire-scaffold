import { push } from 'react-router-redux'

export function userLogin (email, password) {
  return function (dispatch, getState) {
    getState().app.get('ref').authWithPassword({
      email: email,
      password: password
    }, (err, userData) => {
      if (err) {
        dispatch(loginFailure())
      } else {
        dispatch(loginSuccess(userData))
        dispatch(push('/'))
      } 
    })
  }
}

export function loginError () {
  return {
    type: 'LOGIN_ERROR'
  }
}

export function validateLogin (field, value) {
  return {
    type: 'VALIDATE_LOGIN',
    field: field,
    value: value
  }
}

function loginSuccess (userData) {
  return {
    type: 'LOGIN_SUCCESS',
    user: userData
  }
}

function loginFailure () {
  return {
    type: 'LOGIN_FAILURE'
  }
}
