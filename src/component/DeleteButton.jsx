import React from "react";

export default function DeleteButton({ id, onDelete }) {
  return (
    <button className="contact-item__delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

// Catatan: Mengapa terdapat “on”? Kata “on” pada penamaan delete sebenarnya digunakan untuk menghindari JavaScript reserved word. Kita tidak bisa membuat variabel/properti bernama delete.
