import React from "react";
import ContactList from "./ContactList";
import { getData } from "../utils/data";
import ContactInput from "./ContactInput";

class ContactApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: getData(),
    };
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddContactHandler = this.onAddContactHandler.bind(this);
  }

  onDeleteHandler(id) {
    const contacts = this.state.contacts.filter((item) => item.id !== id);

    this.setState({ contacts });
  }

  onAddContactHandler({ name, tag }) {
    this.setState((prevState) => {
      return {
        contacts: [
          ...prevState.contacts,
          {
            id: +new Date(),
            name,
            tag,
            imageUrl: "../public/img/rfajri27.jpeg",
          },
        ],
      };
    });
  }

  render() {
    return (
      <div className="contact-app">
        <h1>Daftar Kontak</h1>
        <h2>Aplikasi Kontak</h2>
        <ContactInput addContact={this.onAddContactHandler} />
        <ContactList contact={this.state.contacts} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}

export default ContactApp;
// export default function ContactApp() {
//   const contact = getData();

//   return (
//     <>
//       <div className="contact-app">
//         <h1>Daftar Kontak</h1>
//         <ContactList contact={contact} />
//       </div>
//     </>
//   );
// }
