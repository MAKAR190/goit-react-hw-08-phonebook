import React, { Component } from "react";
import RegForm from "../components/Forms/RegForm";
import { connect } from "react-redux";
import * as selectors from "../redux/auth/authSelectors";
import Alert from "@material-ui/lab/Alert";
class Register extends Component {
  render() {
    const { error } = this.props;
    return (
      <>
        <RegForm />
        {error && <Alert severity="error">{error}</Alert>}
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  error: selectors.getRegError(state),
});
export default connect(mapStateToProps)(Register);
