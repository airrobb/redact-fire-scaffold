export function loginSuccess(state, userData) {
  return state.update('user', (u) => userData.uid)
}

export function loginFailure(state, userData) {
  return state
}

export function signUpSuccess(state) {
  return state
}

export function signUpFailure(state) {
  return state
}

export function logoutSuccess(state) {
  return state
}
