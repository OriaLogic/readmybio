import { ADD_EVENT } from '../constants/actionTypes';

const event = (state = undefined, action) => {

}

const events = (state = [], action) => {
  switch (action.type) {
    case ADD_EVENT:
      return state;
    default:
      return state;
  }
}

export default events;
