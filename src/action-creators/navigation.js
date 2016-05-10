export function userLogout() {
  return function (dispatch, getState) {
    getState().app.get('ref').unauth()
    dispatch(logoutSuccess())
  }
}

function logoutSuccess() {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}
