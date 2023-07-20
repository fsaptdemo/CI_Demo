import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "../store/actions/userActions";

const NavBar = (props) => {
  const { loggedIn, logout } = props;

  const handleClick = () => {
    logout();
  };

  return (
    <div id="navBar">
      {!loggedIn ? (
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/signup">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      ) : (
        <div className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/plants">Plants</NavLink>
          <NavLink onClick={() => handleClick()} to="/">
            Log out
          </NavLink>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.loggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
