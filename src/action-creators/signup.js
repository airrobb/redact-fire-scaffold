export function signUp (email, password) {
  return function (dispatch, getState) {
    const ref = getState().app.get('ref')
    ref.createUser({
      email: email,
      password: password
    }, (err, userData) => {
      err ? dispatch(signUpFailure()) : dispatch(signUpSuccess())
    })
  }
}

function signUpFailure () {
  return {
    type: 'SIGN_UP_FAILURE'
  }
}

function signUpSuccess () {
  return {
    type: 'SIGN_UP_SUCCESS'
  }
}

export function validateSignup (field, value) {
  return {
    type: 'VALIDATE_SIGNUP',
    field: field,
    value: value
  }
}
