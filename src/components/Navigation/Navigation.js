import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import routes from "../../routes";
import { Link } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import { connect } from "react-redux";
import * as operations from "../../redux/auth/authOperations";
import * as selectors from "../../redux/auth/authSelectors";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
const Navigation = ({ isAuthenticated, user, logout }) => {
  const classes = useStyles();
  const filteredRoutes = isAuthenticated
    ? routes.filter((route) => route.restricted === false)
    : routes.filter((route) => route.private === false);
  return (
    <AppBar position="fixed">
      <Toolbar className={classes.root}>
        {filteredRoutes.map((route) => (
          <Link
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
            key={route.path}
            to={route.path}
          >
            <Button color="inherit">{route.label}</Button>
          </Link>
        ))}
        <h1
          style={{
            margin: "0 auto",
          }}
        >
          Phonebook
        </h1>
        {isAuthenticated && <UserMenu logout={logout} user={user} />}
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: selectors.isAuthenticated(state),
  user: selectors.getUser(state),
});

const mapDispatchToProps = {
  logout: operations.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
