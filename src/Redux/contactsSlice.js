import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63de18359fa0d60060f92695.mockapi.io';

const ContactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

export const fetchContacts = createAsyncThunk('contacts/fetchall', async () => {
  const response = await axios.get('/Phonebook');
  return response.data;
});

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    try {
      const response = await axios.post('/Phonebook', newContact);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async contactId => {
    try {
      const response = await axios.delete(`/Phonebook/${contactId}`);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: ContactsInitialState,
  reducers: {},
  extraReducers: {
    [fetchContacts.pending]: (state, action) => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [fetchContacts.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.items.push(action.payload);
    },
    [addContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContact.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.isLoading = false;
      const index = state.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteContact.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
