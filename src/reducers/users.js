export function loginSuccess (state, userData) {
  const setUser = state.setIn(['user', 'uid'], userData.uid)
                       .setIn(['user', 'email'], userData.password.email)
  return setUser
}

export function loginFailure (state, userData) {
  return state
}


export function logoutSuccess (state) {
  const clearUser = state.setIn(['user', 'uid'], undefined)
                         .setIn(['user', 'email'], undefined)
  return clearUser
}
