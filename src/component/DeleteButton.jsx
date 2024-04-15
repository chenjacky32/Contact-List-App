import React from "react";
import PropTypes from "prop-types";

export default function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
// Catatan: Mengapa terdapat “on”? Kata “on” pada penamaan delete sebenarnya digunakan untuk menghindari JavaScript reserved word. Kita tidak bisa membuat variabel/properti bernama delete.
