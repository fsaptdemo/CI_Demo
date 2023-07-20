import { LOGIN_USER, GET_PLANTS, LOG_OUT } from "../actions/userActions";

const initialState = {
  plants: [],
  username: "",
  loggedIn: false,
  token: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        token: action.token,
        username: action.username,
        loggedIn: true,
      };
    case GET_PLANTS:
      return {
        ...state,
        plants: action.plants,
      };
    case LOG_OUT:
      return initialState;
    default:
      return state;
  }
};
