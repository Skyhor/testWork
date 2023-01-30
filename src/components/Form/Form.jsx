import { nanoid } from 'nanoid/non-secure';
import { useDispatch } from 'react-redux';
import { FormLabel, Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Center } from '@chakra-ui/react';
import { addContacts } from 'redux/constacts/contacts-operation';
import { Box } from '@chakra-ui/react';
const NameId = nanoid();
const NumberId = nanoid();

const Form = () => {
  const dispatch = useDispatch();

  const SubmitForm = e => {
    e.preventDefault();
    console.log('qweq');
    const elem = e.target.elements;
    dispatch(
      addContacts({
        name: elem.name.value,
        phone: elem.phone.value,
      })
    );

    elem.name.value = '';
    elem.phone.value = '';
  };
  return (
    <Box>
      <Center>
        <form onSubmit={SubmitForm}>
          <Center>
            <FormLabel>Name</FormLabel>
          </Center>
          <Input
            id={NameId}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            w={350}
            ml={130}
          />
          <Center>
            <FormLabel>Number</FormLabel>
          </Center>

          <Input
            id={NumberId}
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            w={350}
            ml={130}
          />
          <Button
            colorScheme="teal"
            variant="outline"
            type="submit"
            onSubmit={SubmitForm}
          >
            add contact
          </Button>
        </form>
      </Center>
    </Box>
  );
};

export default Form;
//  <Box
//    w="100%"
//    h="200px"
//    bgGradient="linear(to-r, gray.300, yellow.400, pink.200)"
//  >
//    <Center>
//      <Card mt="100px">
//        <Link to={refLocation.current ?? '/'}>Go back</Link>
//        <CardBody>
//          <form onSubmit={handleSubmit}>
//            <FormLabel>
//              Email:
//              <Input
//                type="email"
//                name="email"
//                value={email}
//                onChange={handleChange}
//              />
//            </FormLabel>
//            <FormLabel>
//              Password:
//              <Input
//                type="password"
//                name="password"
//                value={password}
//                onChange={handleChange}
//              />
//            </FormLabel>

//            <Button
//              colorScheme="teal"
//              variant="outline"
//              type="submit"
//              onSubmit={handleSubmit}
//            >
//              login
//            </Button>
//          </form>
//        </CardBody>
//      </Card>
//    </Center>
//  </Box>;
