export function updateDetails () {
  return function (dispatch, getState) {
    
  }
}


function updateDetailsWaiting () {

}

function updateDetailsSuccess () {

}

function updateDetailsError () {

}

export function changeEmail () {

}

function changeEmailSuccess () {

}

function changeEmailWaiting () {

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
