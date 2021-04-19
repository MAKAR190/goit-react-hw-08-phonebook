import React, { Component, Suspense } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import Spinner from "./components/Spinner";
import routes from "./routes";
import Navigation from "./components/Navigation/Navigation";
import { connect } from "react-redux";
import * as operations from "./redux/auth/authOperations";
import * as selectors from "./redux/auth/authSelectors";
import PrivateRoute from "./components/routing/PrivateRoute";
import PublicRoute from "./components/routing/PublicRoute";
class App extends Component {
  componentDidMount() {
    this.props.fetchUserData();
  }

  render() {
    const { loading } = this.props;
    return (
      <Suspense fallback={<Spinner />}>
        <Navigation />
        {loading && <Spinner />}
        <Switch>
          {routes.map((route) =>
            route.private ? (
              <PrivateRoute {...route} key={route.path} />
            ) : (
              <PublicRoute {...route} key={route.path} />
            )
          )}
        </Switch>
      </Suspense>
    );
  }
}
const mapStateToProps = (state) => ({
  loading: selectors.getLoading(state),
});
const mapDispatchToProps = {
  fetchUserData: operations.fetchUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
