import { initialState } from "@store";

const mapUserName = (state, userName) => {
  return {...state, userName};
}

const mapLogout = () => initialState;

const mapUserCreation = (state) => {
  return {...state, isUserLogged : true};
}

const mapBTCSpotPrice = (state, spotPrice) => {
  return {...state, spotPrice};
}

const mapCurrencies = (state, currencies) => {
  return {...state, currencies};
}

const storeReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'HANDLE_USERNAME':
      return mapUserName(state, action.userName);
    case 'LOGOUT':
      return mapLogout();
    case 'HANDLE_SUBMIT':
      return mapUserCreation(state);
    case 'FETCH_SPOT_PRICE_SUCCESS':
      return mapBTCSpotPrice(state, action.price);
    case 'FETCH_CURRENCIES_SUCCESS':
      return mapCurrencies(state,action.currencies)
    default:
      return state;
  }
}

export {
  storeReducer
}