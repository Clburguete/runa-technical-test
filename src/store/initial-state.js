export const initialState = {
  currency: {
    selectedCurrency: 'USD',
    currencies: [],
    exchangeRates: [],
    spotPrice: undefined,
    buyPrice: undefined
  },
  userForm: {
    isUserLogged: false,
    userName: '',
  }
}