import { 
  handleUserName,
  handleUserSubmit,
  fetchSpotPrice
} from "./actions";

const mapStateToProps = state => ({
  ...state,
  userName: state.userName,
  isUserCreated: state.isUserCreated,
  currencies: state.currencies
})

const mapDispatchToProps = dispatch => ({
  handleChange: val => dispatch(handleUserName(val)),
  handleSubmit: () => dispatch(handleUserSubmit()),
  fetchSpotPrice: () => dispatch(fetchSpotPrice()),
  fetchCurrencies: () => dispatch(fetchCurrencies())
})

export {
  mapStateToProps,
  mapDispatchToProps,
  fetchSpotPrice
}