import React from "react";
import ContactItem from "./ContactItem";
import PropTypes from "prop-types";

export default function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      {contacts.map((item, index) => (
        <ContactItem key={index} id={item.id} onDelete={onDelete} {...item} />
      ))}
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
};
