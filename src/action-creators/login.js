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
