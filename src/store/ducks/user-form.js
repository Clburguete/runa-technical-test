import { initialState } from "@store";

const
  HANDLE_USERNAME ="HANDLE_USERNAME",
  LOGIN_USER = "HANDLE_SUBMIT";

export const handleUserName = userName => ({
  type: HANDLE_USERNAME,
  userName
})

export const login = () => ({
  type: LOGIN_USER,
})

export const logout = () => ({
  type: 'LOGOUT'
})

const reducer = (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case 'HANDLE_USERNAME':
      return {...state, userName : action.userName};
    case 'HANDLE_SUBMIT':
      return {...state, isUserLogged: true };
    case 'LOGOUT':
      return {...initialState};
    default:
      return {...state};
  }
}

export default reducer;