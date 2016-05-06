import { Map } from 'immutable'
import Firebase from 'firebase'

// Your Firebase Ref Goes here

const INITIAL_STATE = Map({
  ref: new Firebase('https://redact-fire.firebaseio.com/'),
  thing: undefined
})

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'DOES_SOMETHING':
      return state
  }
  return state
}
