import React from "react";
import { connect } from "react-redux";
import { login, registerUser } from "../store/actions/userActions";

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ ...this.state, [name]: value });
  };

  submitHandler = (event) => {
    try {
      const user = {
        username: this.state.username,
        password: this.state.password,
      };

      event.preventDefault();
      this.props.isLogin ? this.props.login(user) : this.props.register(user);
      this.props.history.push("/plants");
    } catch (err) {
      console.log(err);
      const message = this.isLogin
        ? "Could not login at this time. Please try again"
        : "Could not register at this time. Please try again";
      this.setState({ ...this.state, error: message });
    }
  };

  render() {
    const { isLogin } = this.props;
    return (
      <div id="form">
        <h1>
          {isLogin
            ? "Login to Track your Plants"
            : "Signup to Track your Plants"}
        </h1>
        <form onSubmit={this.submitHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        <p id="error">{this.state.error}</p>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => dispatch(login(user)),
    register: (user) => dispatch(registerUser(user)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
