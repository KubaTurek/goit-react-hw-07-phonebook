import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts } from './../../Redux/contactsSlice';
import { useEffect } from 'react';
import { selectFilteredContacts } from './../../Redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contacts}>
      <ul className={css.list}>
        {filteredContacts &&
          filteredContacts.map(contact => {
            return (
              <li className={css.li} key={contact.id}>
                <div>
                  <span className={css.name}>{contact.name}</span>
                  <span className={css.number}>{contact.phone}</span>
                </div>

                <button
                  type="button"
                  className={css.delete}
                  onClick={() => handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ContactList;
