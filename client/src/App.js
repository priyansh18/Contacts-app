import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsApi from "./utils/ContactsAPI";

class App extends Component {
  state = {
    contacts: [],
  };

  componentDidMount() {
    ContactsApi.getAll().then((contacts) => {
      this.setState(() => ({
        contacts,
      }));
    });
  }

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id;
      }),
    }));
  };

  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDelete={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
