export const initialState = {
  currency: {
    selectedCurrency: 'USD',
    currencies: [],
    exchangeRates: [],
    spotPrice: undefined,
  },
  userForm: {
    isUserLogged: false,
    userName: '',
  }
}