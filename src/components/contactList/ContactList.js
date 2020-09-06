import React from 'react';
import { ContactsItem } from '../contactsItem/ContactsItem';
import styled from 'styled-components';

const Ul = styled.ul`
  margin: -10px;
`;

export function ContactsList({ contacts, onRemoveContact }) {
  return (
    <Ul>
      {contacts.map(el => (
        <ContactsItem
          key={el.id}
          contact={el}
          onRemoveContact={onRemoveContact}
        ></ContactsItem>
      ))}
    </Ul>
  );
}
