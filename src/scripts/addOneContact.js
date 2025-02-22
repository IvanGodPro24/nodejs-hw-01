import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const db = await readContacts();

  db.push(createFakeContact());

  writeContacts(db);
};

addOneContact();
