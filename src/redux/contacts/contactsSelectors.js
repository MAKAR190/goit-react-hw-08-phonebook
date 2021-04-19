import { createSelector } from "@reduxjs/toolkit";
const getContacts = (state) => state.contactsReducer.contacts;
const getFilter = (state) => state.contactsReducer.filter;
const getLoading = (state) => state.contactsReducer.loading;
const getErrors = (state) => state.contactsReducer.errors;
const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
const selectors = {
  getVisibleContacts,
  getFilter,
  getLoading,
  getErrors,
};

export default selectors;
