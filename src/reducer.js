import { Map, List } from 'immutable'
import firebase from 'firebase'


const INITIAL_STATE = Map({
  ref: 
  thing: undefined
})


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'DOES_SOMETHING':
      return state
  }
  return state
}
