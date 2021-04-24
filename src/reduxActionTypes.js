const actionTypes = {
  //* Contacts Action Types
  fetchContactsRequest: "contacts/fetchContactsRequest",
  fetchContactsSuccess: "contacts/fetchContactsSuccess",
  fetchContactsError: "contacts/fetchContactsError",
  addContactRequest: "contacts/addContactRequest",
  addContactSuccess: "contacts/addContactSuccess",
  addContactError: "contacts/addContactError",
  deleteContactRequest: "contacts/deleteContactRequest",
  deleteContactSuccess: "contacts/deleteContactSuccess",
  deleteContactError: "contacts/deleteContactError",
  filter: "filter/change",
  //* Auth Action Types
  loginRequest: "auth/loginRequest",
  loginSuccess: "auth/loginSuccess",
  loginError: "auth/loginError",
  registerRequest: "auth/registerRequest",
  registerSuccess: "auth/registerSuccess",
  registerError: "auth/registerError",
  logoutRequest: "auth/logoutRequest",
  logoutSuccess: "auth/logoutSuccess",
  logoutError: "auth/logoutError",
  fetchUserDataRequest: "auth/fetchUserDataRequest",
  fetchUserDataSuccess: "auth/fetchUserDataSuccess",
  fetchUserDataError: "auth/fetchUserDataError",
  //! Errors
  cancelError: "errors/cancelError",
};
export default actionTypes;
