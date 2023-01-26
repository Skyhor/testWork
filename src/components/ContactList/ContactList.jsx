import React from 'react';
import './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/constacts/contacts-selectors';
import { selectFilter } from 'redux/filter/filter-selectors';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContacts,
} from 'redux/constacts/contacts-operation';
const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <ul>
      {filteredContacts.map(({ name, phone, id }) => (
        <li key={id}>
          {name + ':' + phone}
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
