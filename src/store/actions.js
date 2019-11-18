const handleUserName = userName => ({
  type: 'HANDLE_USERNAME',
  userName
})

const handleUserSubmit = () => ({
  type: 'HANDLE_SUBMIT',
  isUserCreated: true
})

export {
  handleUserName,
  handleUserSubmit
};