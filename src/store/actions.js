const handleUserName = userName => ({
  type: 'HANDLE_USERNAME',
  userName
})

const logout = () => ({
  type: 'LOGOUT'
})

const handleUserSubmit = () => ({
  type: 'HANDLE_SUBMIT',
  isUserCreated: true
})

const fetchSpotPrice = () => ({
  type: 'FETCH_SPOT_PRICE'
})

const fetchCurrencies = () => ({
  type: 'FETCH_CURRENCIES'
})
 
export {
  handleUserName,
  handleUserSubmit,
  fetchSpotPrice,
  fetchCurrencies,
  logout
};