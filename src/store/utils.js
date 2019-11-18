import { 
  handleUserName,
  handleUserSubmit,
  fetchSpotPrice
} from "./actions";

const mapStateToProps = state => ({
  ...state,
  userName: state.userName,
  isUserCreated: state.isUserCreated
})

const mapDispatchToProps = dispatch => ({
  handleChange: val => dispatch(handleUserName(val)),
  handleSubmit: () => dispatch(handleUserSubmit()),
  fetchSpotPrice: () => dispatch(fetchSpotPrice())
})

export {
  mapStateToProps,
  mapDispatchToProps,
  fetchSpotPrice
}