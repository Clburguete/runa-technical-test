export const initialState = {
  currency: {
    selectedCurrency: 'USD',
    currencies: [],
    buyPrice: undefined,
    sellPrice: undefined,
    spotPrice: undefined,
  },
  userForm: {
    isUserLogged: false,
    userName: '',
  }
}