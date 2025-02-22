import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  const contacts = await readContacts();

  if (contacts.length > 0) {
    contacts.pop();

    writeContacts(contacts);
  } else {
      console.log('Array is empty.');
  }
};

removeLastContact();
