function userLogin(email, password) {
  return function (dispatch, getState) {
    getState().get('ref').authWithPassword({
      email: email,
      password: password
    }, (err, userData) => {
      err ? dispatch(loginFailure()) : dispatch(loginSuccess(userData))
    })
  }
}

function loginSuccess(userData) {
  return {
    type: 'USER_LOGIN',
    user: userData,
  }
}

function loginFailure() {
  return {
    type: 'LOGIN_FAILURE'
  }
}
