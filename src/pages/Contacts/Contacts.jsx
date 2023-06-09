import { useSelector } from 'react-redux';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
import { getContacts } from 'redux/contacts/selectors';
import { getIsLoading } from 'redux/contacts/selectors';
import { Loader } from 'components/Loader/Loader';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>

      {contacts.length > 0 ? <Filter /> : <div>You have no contacts</div>}
      <ContactList />
    </>
  );
};
