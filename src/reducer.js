import { Map, List } from 'immutable'

const INITIAL_STATE = Map({
  thing: undefined
})


export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'DOES_SOMETHING':
      return state
  }
  return state
}
