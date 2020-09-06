import React from 'react';
import { ContactForm } from './contactForm/ContactForm';
import { ContactsList } from './contactList/ContactList';
import { Filter } from './filter/Filter';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
  padding: 15px;
  margin: 0 auto;
`;

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  handleChange = event => {
    this.setState({ name: event.target.value });
  };
  addContact = newContact => {
    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => {
          return {
            contacts: [...prevState.contacts, newContact],
          };
        });
  };
  onChangeFilter = filter => {
    this.setState({ filter });
  };

  removeContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const contacts = this.state.contacts;
    const filter = this.state.filter;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
    return (
      <>
        <Container>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.addContact}></ContactForm>
          <h2>Contacts</h2>
          {contacts.length > 1 ? (
            <Filter value={filter} onChangeFilter={this.onChangeFilter} />
          ) : null}
          <ContactsList
            contacts={filteredContacts}
            onRemoveContact={this.removeContact}
          ></ContactsList>
        </Container>
      </>
    );
  }
}
