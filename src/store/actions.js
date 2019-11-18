const handleUserName = userName => ({
  type: 'HANDLE_USERNAME',
  userName
})

const handleUserSubmit = () => ({
  type: 'HANDLE_SUBMIT',
  isUserCreated: true
})

const fetchSpotPrice = () => ({
  type: 'FETCH_SPOT_PRICE'
})
 
export {
  handleUserName,
  handleUserSubmit,
  fetchSpotPrice
};