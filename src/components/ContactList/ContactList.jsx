import React from 'react';
import './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/constacts/contacts-selectors';
import { deleteContacts } from 'redux/constacts/constactsSlice';
import { getFilter } from 'redux/filter/filter-selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );

  return (
    <ul>
      {filteredContacts.map(({ name, number, id }) => (
        <li key={id}>
          {name + ':' + number}
          {
            <button
              type="button"
              name="delete"
              onClick={() => {
                dispatch(deleteContacts(id));
              }}
            >
              delete
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
