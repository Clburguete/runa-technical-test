import { initialState } from "@store";

const mapSingleValue = (state, singleValue ) => {
  return {...state, [singleValue]: singleValue }
}
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
    case 'FETCH_EXCHANGE_RATE_SUCCESS':
      return mapExchangeRate(state, action.rate)
    default:
      return state;
  }
}

export {
  storeReducer
}