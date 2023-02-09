import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from './../../Redux/contactsSlice';
import { selectContact } from './../../Redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(selectContact);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const newContact = {
      name: event.target.name.value,
      phone: event.target.number.value,
    };

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      event.target.reset();
      return alert(`${newContact.name} "is already in contacts"`);
    } else {
      dispatch(addContact(newContact));

      event.target.reset();
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <p className={css.label}>Name</p>
        <input
          type="text"
          name="name"
          id="name"
          className={css.input}
          placeholder="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <p className={css.label}>Number</p>
        <input
          type="tel"
          name="number"
          id="number"
          className={css.input}
          placeholder="phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={css.button}>
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
