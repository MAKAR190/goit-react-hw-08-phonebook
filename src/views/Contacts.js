import React, { Component } from "react";
import "../animations.css";
import ContactForm from "../components/ContactForm/ContactForm";
import ContactList from "../components/ContactList/ConatctList";
import Filter from "../components/Filter/Filter";
import Layout from "../components/Layout/Layout";
import Alert from "../components/Alert/Alert";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import {
  addContact,
  fetchContacts,
} from "../redux/contacts/contactsOperations";
import { v4 } from "uuid";
import contactsSelectors from "../redux/contacts/contactsSelectors";
import Spinner from "../components/Spinner";
class Contacts extends Component {
  state = {
    alert: false,
  };
  componentDidMount() {
    this.props.fetchContacts();
  }

  deleteAlert = () => [
    setTimeout(() => {
      this.setState({
        alert: false,
      });
    }, 3000),
  ];
  setAlert = () => {
    this.setState(
      {
        alert: true,
      },
      () => this.deleteAlert()
    );
  };
  handleSubmit = (contact) => {
    const newContact = {
      name: contact.name,
      number: contact.number,
      id: v4(),
    };
    if (
      this.props.contacts.find(
        (el) => el.name === newContact.name && el.number === newContact.number
      )
    ) {
      this.setAlert();
    } else {
      this.props.addContact(newContact);
    }
  };
  render() {
    const { alert } = this.state;
    const { loading } = this.props;
    return (
      <>
        <Layout title="Phonebook" />
        <ContactForm submit={this.handleSubmit} />
        <Filter />
        <CSSTransition
          classNames="fade"
          timeout={250}
          in={this.props.contacts.length > 0}
          unmountOnExit
        >
          <ContactList list={this.props.contacts} />
        </CSSTransition>
        <Alert alert={alert} />
        {loading && <Spinner />}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    contacts: contactsSelectors.getVisibleContacts(state),
    loading: contactsSelectors.getLoading(state),
  };
};
const mapDispatchToProps = {
  addContact: addContact,
  fetchContacts: fetchContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
