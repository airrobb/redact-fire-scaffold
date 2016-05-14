export function loginSuccess (state, userData) {
  const setUser = state.setIn(['user', 'uid'], userData.uid)
                       .setIn(['user', 'email'], userData.password.email)
  return setUser
}

export function loginFailure (state, userData) {
  return state
}

export function signUpSuccess (state) {
  return state
}

export function signUpFailure (state) {
  return state
}

export function logoutSuccess (state) {
  const clearUser = state.setIn(['user', 'uid'], undefined)
                         .setIn(['user', 'email'], undefined)
  return clearUser
}

export function validateSignup (state, field, value) {
  const updatedValue = state.setIn(['signUpForm', field, 'value'], value)
  switch (field) {
    case 'email':
      return validateEmail(updatedValue)
    case 'password1':
      return validateFirstPassword(updatedValue)
    case 'password2':
      return validateSecondPassword(updatedValue)
  }
  return state
}

function validateEmail (state) {
  const emailValue = state.getIn(['signUpForm', 'email', 'value'])
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const validationState = state.setIn(['signUpForm', 'email', 'validation'],
                            emailRegex.test(emailValue))
  return validationState.setIn(['signUpForm', 'valid'], allFieldsValid(validationState))
}

function validateFirstPassword (state) {
  const passwordValue = state.getIn(['signUpForm', 'password1', 'value'])
  const isValid = passwordValue.length > 8 || passwordValue.length < 16
  const validationState = state.setIn(['signUpForm', 'password1', 'validation'],
                        isValid)
  return validationState.setIn(['signUpForm', 'valid'], allFieldsValid(validationState))
}

function validateSecondPassword (state) {
  const firstPasswordValue = state.getIn(['signUpForm', 'password1', 'value'])
  const secondPasswordValue = state.getIn(['signUpForm', 'password2', 'value'])
  const isValid = firstPasswordValue === secondPasswordValue
  const validationState = state.setIn(['signUpForm', 'password2', 'validation'],
                        isValid)
  return validationState.setIn(['signUpForm', 'valid'], allFieldsValid(validationState))
}

function allFieldsValid (state) {
  const emailValid = state.getIn(['signUpForm', 'email', 'validation'])
  const firstPasswordValid = state.getIn(['signUpForm', 'password1', 'validation'])
  const secondPasswordValid = state.getIn(['signUpForm', 'password2', 'validation'])
  return emailValid && firstPasswordValid && secondPasswordValid
}
