import React from "react";
import styles from "./ContactForm.module.css";
import PropTypes from "prop-types";
class ContactForm extends React.Component {
  state = {
    name: "",
    number: "",
  };
  static propTypes = {
    submit: PropTypes.func.isRequired,
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.submit(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    return (
      <form className={styles.wrapper} onSubmit={this.handleSubmit}>
        <div>
          <p>Name</p>
          <input
            className={styles.input}
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
        </div>
        <div>
          <p>Number</p>
          <input
            className={styles.input}
            type="text"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
          ></input>
        </div>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
