import React, { Component } from "react";

class ListContacts extends Component {
  // state = {  }
  render() {
    const { contacts,onDelete } = this.props;
    console.log("Contacts", contacts);
    return (
      <ol className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            />
            <div className="contact-details">
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button className="contact-remove" onClick={()=>onDelete(contact)}>Remove</button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
