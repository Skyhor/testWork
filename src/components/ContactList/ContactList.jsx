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
import { Table, Thead, Tr, Th, Button } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
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
    <Center>
      <ul>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            {filteredContacts.map(({ name, number, id }) => (
              <Tr key={id}>
                {/* {name + ':' + phone} */}
                <Th>{name}:</Th>
                <Th>{number}</Th>
                <Button
                  type="button"
                  name="delete"
                  onClick={() => {
                    dispatch(deleteContacts(id));
                  }}
                >
                  🗑
                </Button>
              </Tr>
            ))}
          </Thead>
        </Table>
      </ul>
    </Center>

    // <Center>

    //     {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
    //     <Thead>
    //       <Tr>
    //         <Th>To convert</Th>
    //         <Th>into</Th>
    //         <Th isNumeric>multiply by</Th>
    //       </Tr>
    //     </Thead>
    //   </Table>
    // </Center>
  );
};

export default ContactList;
