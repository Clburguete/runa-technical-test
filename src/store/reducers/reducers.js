import { initialState } from "./../initial-state";

const mapUserName = (state, userName) => {
  return {...state, userName};
}

const mapUserCreation = (state) => {
  return {...state, isUserCreated : true}
}

const mapBTCSpotPrice = (state, spotPrice) => {
  return {...state, spotPrice}
}

const storeReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'HANDLE_USERNAME':
      return mapUserName(state, action.userName);
    case 'HANDLE_SUBMIT':
      return mapUserCreation(state);
    case 'FETCH_SPOT_PRICE_SUCCESS':
      return mapBTCSpotPrice(state, action.price);
    default:
      return state;
  }
}

export {
  storeReducer
}