import reduxActionTypes from "../../reduxActionTypes";
import { createReducer, combineReducers } from "@reduxjs/toolkit";
const initialContactsState = [];
const initialFilterState = "";
const contactsReducer = createReducer(initialContactsState, {
  [reduxActionTypes.addContactSuccess]: (state, action) => [
    ...state,
    action.payload,
  ],
  [reduxActionTypes.deleteContactSuccess]: (state, action) =>
    state.filter((contact) => contact.id !== action.payload),
  [reduxActionTypes.fetchContactsSuccess]: (_, action) => action.payload,
});
const loadingReducer = createReducer(false, {
  [reduxActionTypes.addContactRequest]: () => true,
  [reduxActionTypes.addContactSuccess]: () => false,
  [reduxActionTypes.addContactError]: () => false,
  [reduxActionTypes.deleteContactRequest]: () => true,
  [reduxActionTypes.deleteContactSuccess]: () => false,
  [reduxActionTypes.deleteContactError]: () => false,
  [reduxActionTypes.fetchContactsRequest]: () => true,
  [reduxActionTypes.fetchContactsSuccess]: () => false,
  [reduxActionTypes.fetchContactsError]: () => false,
});
const errorsReducer = createReducer(null, {
  [reduxActionTypes.addContactError]: (_, { payload }) => payload.message,
  [reduxActionTypes.fetchContactsError]: (_, { payload }) => payload.message,
  [reduxActionTypes.deleteContactError]: (_, { payload }) => payload.message,
});
const filterReducer = createReducer(initialFilterState, {
  [reduxActionTypes.filter]: (_, action) => action.payload,
});
export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  loading: loadingReducer,
  errors: errorsReducer,
});
