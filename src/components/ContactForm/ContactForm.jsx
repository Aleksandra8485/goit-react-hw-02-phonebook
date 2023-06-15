import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function ContactForm({ addContact }) {
  const [name, setName] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name,
      };

      addContact(newContact);
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Imię i nazwisko mogą zawierać tylko litery, apostrof, myślnik i spacje. Na przykład Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
