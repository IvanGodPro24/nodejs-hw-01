import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const generateContacts = async (number) => {
  try {
    const db = await readContacts();

    for (let i = 0; i < number; i++) {
      const contact = createFakeContact();

      db.push(contact);
    }

    writeContacts(db);
  } catch (error) {
    console.error(error);
  }
};

generateContacts(5);
