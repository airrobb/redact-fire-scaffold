export function updateDetails () {
  return function (dispatch, getState) {

  }
}

export function updateDetailsChange (field, value) {
  return {
    type: 'UPDATE_DETAILS_CHANGE',
    field: field,
    value: value
  }
}


function updateDetailsWaiting () {
  return {
    type: 'UPDATE_DETAILS_WAITING'
  }
}

function updateDetailsSuccess () {
  return {
    type: 'UPDATE_DETAILS_SUCCESS'
  }
}

function updateDetailsError () {
  return {
    type: 'UPDATE_DETAILS_ERROR'
  }
}

export function changeEmail () {
  return function (dispatch, getState) {

  }
}

function changeEmailSuccess () {
  return {
    type: 'CHANGE_EMAIL_SUCCESS'
  }
}

function changeEmailWaiting () {
  return {
    type: 'CHANGE_EMAIL_WAITING'
  }
}

export function validateChangeEmail (field, value) {
  return {
    type: 'VALIDATE_CHANGE_EMAIL',
    field: field,
    value: value
  }
}

export function changeEmailError () {
  return {
    type: 'CHANGE_EMAIL_ERROR'
  }
}
