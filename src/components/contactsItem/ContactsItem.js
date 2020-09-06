import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  margin-left: 10px;
  font-size: 10px;
`;

const Li = styled.li`
  margin: 10px;
`;

export function ContactsItem({
  contact: { name, number, id },
  onRemoveContact,
}) {
  return (
    <Li>
      <span>
        {name}: {number}
      </span>
      <Button
        type="button"
        data-id={id}
        onClick={e => {
          onRemoveContact(e.target.dataset.id);
        }}
      >
        delete
      </Button>
    </Li>
  );
}
