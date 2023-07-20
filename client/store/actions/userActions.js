import axios from "axios";

//action type constants
export const LOGIN_USER = "LOGIN_USER";
export const ADD_TOKEN = "ADD_TOKEN";
export const GET_PLANTS = "GET_PLANTS";
export const LOG_OUT = "LOG_OUT";

//action creators
export const _loginUser = (token, username) => {
  return {
    type: LOGIN_USER,
    token,
    username,
  };
};

const _getPlants = (plants) => {
  return {
    type: GET_PLANTS,
    plants,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const registerUser = (user) => {
  return (dispatch) => {
    axios
      .post("/api/auth/register", user)
      .then(({ data }) => {
        dispatch(_loginUser(data.token, data.username));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const login = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("/api/auth/login", user);

      dispatch(_loginUser(data.token, data.username));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserPlants = (token) => {
  return (dispatch) => {
    axios
      .get("/api/plants", {
        headers: {
          Authorization: token,
        },
      })
      .then(({ data }) => {
        dispatch(_getPlants(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
