import React from "react";
import PropTypes from "prop-types";

export default function ContactItemImage({ imageUrl }) {
  return (
    <div className="contact-item_image">
      <img src={imageUrl} alt="contact avatar" />
    </div>
  );
}

ContactItemImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
