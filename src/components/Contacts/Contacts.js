import React, { Component } from "react";
import Contact from "../Contact/Contact";

class Contacts extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Doe",
        email: "jdoe@gmail.com",
        phone: "555-555-555"
      },
      {
        id: 2,
        name: "Karen Smith",
        email: "karen@gmail.com",
        phone: "333-333-333"
      },
      {
        id: 3,
        name: "Jak Kowalski",
        email: "jkowalski@gmail.com",
        phone: "999-999-999"
      }
    ]
  };

  render() {
    const { contacts } = this.state;

    return (
      <div>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    );
  }
}

export default Contacts;