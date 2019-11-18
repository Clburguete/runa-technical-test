import { 
  handleUserName,
  handleUserSubmit
} from "./actions";

const mapStateToProps = state => ({
  ...state,
  userName: state.userName,
  isUserCreated: state.isUserCreated
})

const mapDispatchToProps = dispatch => ({
  handleChange: val => dispatch(handleUserName(val)),
  handleSubmit: () => dispatch(handleUserSubmit())
})

export {
  mapStateToProps,
  mapDispatchToProps
}