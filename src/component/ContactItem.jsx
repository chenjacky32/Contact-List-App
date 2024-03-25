import React from "react";
import ContactItemBody from "./ContactItemBody";
import ContactItemImage from "./ContactItemImage";
import DeleteButton from "./DeleteButton";

export default function ContactItem({ id, imageUrl, name, tag, onDelete }) {
  return (
    <div className="contact-item">
      <ContactItemImage url={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}
