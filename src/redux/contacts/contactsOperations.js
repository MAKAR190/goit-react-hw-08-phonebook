import * as actions from "./contactsActions";
import axios from "axios";
export const fetchContacts = () => (dispatch) => {
  dispatch(actions.fetchContactsRequest());
  axios
    .get("/contacts")
    .then((res) => dispatch(actions.fetchContactsSuccess(res.data)))
    .catch((error) => dispatch(actions.fetchContactsError(error)));
};

export const addContact = (contact) => (dispatch) => {
  dispatch(actions.addContactRequest());
  axios
    .post("/contacts", contact)
    .then((res) => {
      dispatch(actions.addContactSuccess(res.data));
    })
    .catch((error) => dispatch(actions.addContactError(error)));
};
export const deleteContact = (id) => (dispatch) => {
  dispatch(actions.deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(actions.deleteContactSuccess(id));
    })
    .catch((error) => dispatch(actions.deleteContactError(error)));
};
