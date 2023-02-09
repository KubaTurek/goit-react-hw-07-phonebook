export const selectFilter = state => state.filter.filter;
export const selectContact = state => state.contacts.items;
export const selectisLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilteredContacts = state => {
  const contacts = selectContact(state);
  const filter = selectFilter(state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
