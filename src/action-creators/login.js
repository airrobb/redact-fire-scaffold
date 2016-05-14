export function userLogin (email, password) {
  return function (dispatch, getState) {
    getState().app.get('ref').authWithPassword({
      email: email,
      password: password
    }, (err, userData) => {
      err ? dispatch(loginFailure()) : dispatch(loginSuccess(userData))
    })
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
