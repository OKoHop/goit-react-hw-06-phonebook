import React, { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { AddContact } from './AddContact/AddContact';
import { Filter } from 'components/FilterContacts/FilterContacts';
import { GlobalStyle } from './GlobalStyle';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts !== null) {
      this.setState({
        contacts: savedContacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contact!`);
    }
    this.setState(prevstate => {
      return {
        contacts: [...prevstate.contacts, newContact],
      };
    });
  };

  filterChange = evt => {
    this.setState({
      filter: evt.target.value,
    });
  };

  deleteContact = idContact => {
    this.setState(prevstate => {
      return {
        contacts: prevstate.contacts.filter(
          contact => contact.id !== idContact
        ),
      };
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const filtredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <h2>Phonebook</h2>
        <AddContact onAdd={this.addContact} />
        <Filter value={filter} onChange={this.filterChange} />
        <ContactList
          title="Contacts"
          contacts={filtredContacts}
          onDelete={this.deleteContact}
        />
        <GlobalStyle />
      </div>
    );
  }
}
