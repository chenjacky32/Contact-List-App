import React from "react";
import { addContact } from "../utils/api";
import ContactInput from "../component/ContactInput";
import { useNavigate } from "react-router-dom";

export default function AddPage() {
  const navigate = useNavigate();

  async function onAddContactHandler(contact) {
    await addContact(contact);
    navigate("/");
  }

  return (
    <section>
      <h2>Tambah Kontak</h2>
      <ContactInput addContact={onAddContactHandler} />
    </section>
  );
}
