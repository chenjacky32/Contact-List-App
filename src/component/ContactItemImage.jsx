import React from "react";

export default function ContactItemImage({ url }) {
  return (
    <div className="contact-item_image">
      <img src={url} alt="contact avatar" />
    </div>
  );
}
