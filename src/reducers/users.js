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

export function loginFailure (state) {
  const setErrorState = state.setIn(['loginForm', 'message'],
    Map({
      type: 'danger',
      active: true,
      content: Map({
        headline: 'Please fix the errors below',
        message: 'Email is taken or invalid, please choose another one.'
      })
    })
  )
  return setErrorState
}

export function loginError (state) {
  const setErrorState = state.setIn(['loginForm', 'message'],
    Map({
      type: 'danger',
      active: true,
      content: Map({
        headline: 'Invalid inputs',
        message: 'Please fix the above fields and try again'
      })
    })
  )
  return setErrorState
}


export function validateLogin (state, field, value) {
  const updatedValue = state.setIn(['loginForm', field, 'value'], value)
  switch (field) {
    case 'email':
      return validateEmail(updatedValue)
    case 'password':
      return validatePassword(updatedValue)
    }
  return state
}

function validateEmail (state) {
  const emailValue = state.getIn(['loginForm', 'email', 'value'])
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isValid = emailValue.length > 0 ? emailRegex.test(emailValue) : undefined
  const validationState = state.setIn(['loginForm', 'email', 'validation'],
                          isValid)
  return validationState.setIn(['loginForm', 'valid'], allFieldsValid(validationState))
}

function validatePassword (state) {
  const passwordValue = state.getIn(['loginForm', 'password', 'value'])
  const isValid = passwordValue.length > 0 ? passwordValue.length > 8 && passwordValue.length < 16 : undefined
  const validationState = state.setIn(['loginForm', 'password', 'validation'],
                        isValid)
  return validationState.setIn(['loginForm', 'valid'], allFieldsValid(validationState))
}

function allFieldsValid (state) {
  const emailValid = state.getIn(['loginForm', 'email', 'validation'])
  const passwordValid = state.getIn(['loginForm', 'password', 'validation'])
  return emailValid && passwordValid
}
