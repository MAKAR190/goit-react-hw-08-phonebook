import { createReducer, combineReducers } from "@reduxjs/toolkit";
import * as actions from "./authActions";
const defaultUserState = {
  name: null,
  email: null,
};
const tokenReducer = createReducer(null, {
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
  [actions.fetchUserDataError]: () => null,
});
const userReducer = createReducer(null, {
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.fetchUserDataSuccess]: (_, { payload }) => payload,
  [actions.logoutSuccess]: () => defaultUserState,
});
const errorsReducer = createReducer(null, {
  [actions.loginError]: (_, { payload }) => payload.message,
  [actions.logoutError]: (_, { payload }) => payload.message,
  [actions.fetchUserDataError]: (_, { payload }) => payload.message,
  [actions.registerError]: (_, { payload }) => payload.message,
});
const loadingReducer = createReducer(false, {
  [actions.loginRequest]: () => true,
  [actions.loginSuccess]: () => false,
  [actions.loginError]: () => false,
  [actions.registerRequest]: () => true,
  [actions.registerSuccess]: () => false,
  [actions.registerError]: () => false,
  [actions.fetchUserDataRequest]: () => true,
  [actions.fetchUserDataSuccess]: () => false,
  [actions.fetchUserDataError]: () => false,
  [actions.logoutRequest]: () => true,
  [actions.logoutSuccess]: () => false,
  [actions.logoutError]: () => false,
});
export default combineReducers({
  user: userReducer,
  token: tokenReducer,
  loading: loadingReducer,
  errors: errorsReducer,
});
