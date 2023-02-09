import css from './app.module.css';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';

export const App = () => {
  return (
    <div className={css.app}>
      <Section title="Phonebook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </div>
  );
};
