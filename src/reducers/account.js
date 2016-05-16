export function updateDetailsSuccess (state) {
  return state
}

export function updateDetailsError (state) {
  return state
}

export function updateDetailsWaiting (state) {
  return state
}


export function validateChangeEmail (state, field, value) {
  const updatedValue = state.setIn(['account', 'changeEmailForm', field, 'value'], value)
  switch (field) {
    case 'email1':
      return validateFirstEmail(updatedValue)
    case 'email2':
      return validateSecondEmail(updatedValue)
    case 'password':
      return validatePassword(updatedValue)
    default:
      return state
  }
}

function validateFirstEmail (state) {
  const emailValue = state.getIn(['account', 'changeEmailForm', 'email1', 'value'])
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  const isValid = emailValue.length > 0 ? emailRegex.test(emailValue) : undefined
  const validationState = state.setIn(['account', 'changeEmailForm', 'email1', 'validation'],
                          isValid)
  return validationState.setIn(['account', 'changeEmailForm', 'valid'], allFieldsValid(validationState))
}

function validateSecondEmail (state) {
  const firstEmailValue = state.getIn(['account', 'changeEmailForm', 'email1', 'value'])
  const secondEmailValue = state.getIn(['account', 'changeEmailForm', 'email2', 'value'])
  const isValid = secondEmailValue.length > 0 ? firstEmailValue === secondEmailValue : undefined
  const validationState = state.setIn(['account', 'changeEmailForm', 'email2', 'validation'],
                        isValid)
  return validationState.setIn(['account', 'changeEmailForm','valid'], allFieldsValid(validationState))
}

function validatePassword (state) {
  const passwordValue = state.getIn(['account', 'changeEmailForm', 'password', 'value'])
  const isValid = passwordValue.length > 0 ? passwordValue.length > 6 && passwordValue.length < 16 : undefined
  const validationState = state.setIn(['account', 'changeEmailForm', 'password', 'validation'],
                        isValid)
  return validationState.setIn(['account', 'changeEmailForm', 'valid'], allFieldsValid(validationState))
}

function allFieldsValid (state) {
  const firstEmailValid = state.getIn(['account', 'changeEmailForm', 'email1', 'validation'])
  const secondEmailValid = state.getIn(['account', 'changeEmailForm', 'email2', 'validation'])
  const passwordValid = state.getIn(['account', 'changeEmailForm', 'password', 'validation'])
  console.log(secondEmailValid)
  console.log(firstEmailValid)
  console.log(passwordValid)
  return firstEmailValid && secondEmailValid && passwordValid
}

export function changeEmailSuccess (state) {
  return state
}

export function changeEmailError (state) {
  return state
}

export function changeEmailWaiting (state) {
  return state
}
