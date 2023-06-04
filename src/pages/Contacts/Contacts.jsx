import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/Phonebook/Phonebook';
import { Filter } from 'components/Filter/Filter';
export const Contacts = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};
