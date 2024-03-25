import React from "react";
import PropTypes from "prop-types";

class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      tag: "",
    };

    this.onNameChangeEvent = this.onNameChangeEvent.bind(this);
    this.onTagChangeEvent = this.onTagChangeEvent.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEvent(e) {
    this.setState(() => {
      return {
        name: e.target.value,
      };
    });
  }

  onTagChangeEvent(e) {
    this.setState(() => {
      return {
        tag: e.target.value,
      };
    });
  }

  onSubmitEventHandler(e) {
    e.preventDefault();
    this.props.addContact(this.state);
  }

  render() {
    return (
      <form className="contact-input" onSubmit={this.onSubmitEventHandler}>
        <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEvent} />
        <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEvent} />
        <button type="submit"> ➕ </button>
      </form>
    );
  }
}
// latihan 1
ContactInput.propTypes = {
  addContact: PropTypes.func.isRequired,
};

export default ContactInput;
