import React, { Component } from "react";
import LoginForm from "../components/Forms/LoginForm";
import { connect } from "react-redux";
import * as selectors from "../redux/auth/authSelectors";
import Alert from "@material-ui/lab/Alert";
class Login extends Component {
  render() {
    const { error } = this.props;
    return (
      <>
        <LoginForm />
        {error && <Alert severity="error">{error}</Alert>}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  error: selectors.getLoginError(state),
});
export default connect(mapStateToProps)(Login);
