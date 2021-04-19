import reduxActionTypes from "../../reduxActionTypes";
import { createAction } from "@reduxjs/toolkit";
//*Contacts Actions
export const fetchContactsRequest = createAction(
  reduxActionTypes.fetchContactsRequest
);
export const fetchContactsSuccess = createAction(
  reduxActionTypes.fetchContactsSuccess
);
export const fetchContactsError = createAction(
  reduxActionTypes.fetchContactsError
);
export const addContactRequest = createAction(
  reduxActionTypes.addContactRequest
);
export const addContactSuccess = createAction(
  reduxActionTypes.addContactSuccess
);
export const addContactError = createAction(reduxActionTypes.addContactError);
export const deleteContactRequest = createAction(
  reduxActionTypes.deleteContactRequest
);
export const deleteContactSuccess = createAction(
  reduxActionTypes.deleteContactSuccess
);
export const deleteContactError = createAction(
  reduxActionTypes.deleteContactError
);
export const filterContacts = createAction(reduxActionTypes.filter);
