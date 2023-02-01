import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/constacts/contacts-operation';
import { Button, Center } from '@chakra-ui/react';
export const ContactPage = () => {
  const [isListShown, setIsListShown] = useState(false);
  const dispatch = useDispatch();
  const showContactsList = () => {
    setIsListShown(true);
    dispatch(fetchContacts());
  };
  return (
    <>
      {isListShown && (
        <>
          <Form />
          <Filter />
          <ContactList />
        </>
      )}
      {!isListShown && (
        <Center>
          <Button onClick={showContactsList}>Show Contact</Button>
        </Center>
      )}
    </>
  );
};
