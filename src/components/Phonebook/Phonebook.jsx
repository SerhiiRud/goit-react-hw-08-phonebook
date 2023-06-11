import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { object, string } from 'yup';
import { nanoid } from 'nanoid';
import { Box, Flex, Input, Button, useColorModeValue } from '@chakra-ui/react';

import { addContact } from 'redux/contacts/operations';
import { getContacts } from 'redux/contacts/selectors';

const userSchema = object().shape({
  name: string()
    .min(3)
    .max(25)
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d`Artagnan'
    )
    .required('This field is required!'),
  number: string()
    .min(5)
    .max(15)
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('This field is required!'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const bg = useColorModeValue('#423d33', 'transparent');
  const color = useColorModeValue('gray.400', 'gray.800');
  const contacts = useSelector(getContacts);

  const addContactHandler = (values, actions) => {
    if (
      contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          values.name.toLocaleLowerCase().trim()
      )
    ) {
      return alert(`${values.name} is already in contacts`);
    }

    dispatch(addContact({ ...values, id: nanoid() }));

    actions.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    onSubmit: (values, actions) => {
      addContactHandler(values, actions);
    },
    validationSchema: userSchema,
  });

  return (
    <>
      <Box
        p="40px"
        mr="auto"
        ml="auto"
        w="600px"
        h="600px"
        mb="30px"
        mt="20px"
        border="1px"
        borderColor="black.700"
        borderRadius="8px"
      >
        <form onSubmit={formik.handleSubmit} autoComplete="off">
          <Flex
            align="center"
            justify="center"
            gap="24px"
            direction="column"
            maxW="320px"
            m="0 auto"
          >
            <label htmlFor="email">Name</label>
            <Input
              color={color}
              bg={bg}
              borderColor="gray.400"
              variant="filled"
              placeholder="Name"
              _placeholder={{ color: 'gray.500' }}
              id="name"
              name="name"
              type="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <label htmlFor="email">Number</label>
            <Input
              color={color}
              bg={bg}
              borderColor="gray.400"
              variant="filled"
              placeholder="Number"
              _placeholder={{ color: 'gray.500' }}
              id="number"
              name="number"
              type="number"
              onChange={formik.handleChange}
              value={formik.values.number}
            />

            <Button
              type="submit"
              w="100%"
              color={color}
              bg="gray.600"
              _hover={{ bg: '#FF9900' }}
            >
              Add contact
            </Button>
          </Flex>
        </form>
      </Box>
    </>
  );
};
