import { initialState } from "./../initial-state";

const mapUserName = (state, userName) => {
  return {...state, userName};
}

const userName = (state = initialState, action) => {
  switch (action.type) {
    case 'HANDLE_USERNAME':
      return mapUserName(state, action.userName);
    default:
      return state;
  }
}

export {
  userName
}