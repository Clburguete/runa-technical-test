import { 
  handleUserName,
  handleUserSubmit,
  fetchSpotPrice,
  fetchCurrencies,
  logout
} from "./actions";

const mapStateToProps = state => ({
  ...state,
  userName: state.userName,
  isUserLogged: state.isUserLogged,
  currencies: state.currencies
})

const mapDispatchToProps = dispatch => ({
  handleChange: val => dispatch(handleUserName(val)),
  handleSubmit: () => dispatch(handleUserSubmit()),
  fetchSpotPrice: () => dispatch(fetchSpotPrice()),
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  logout: () => dispatch(logout())
})

export {
  mapStateToProps,
  mapDispatchToProps,
  fetchSpotPrice
}