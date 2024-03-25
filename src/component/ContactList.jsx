import React from "react";
import ContactItem from "./ContactItem";

export default function ContactList({ contact, onDelete }) {
  return (
    <div className="contact-list">
      {contact.map((item, index) => (
        <ContactItem key={index} id={item.id} onDelete={onDelete} {...item} />
      ))}
    </div>
  );
}
