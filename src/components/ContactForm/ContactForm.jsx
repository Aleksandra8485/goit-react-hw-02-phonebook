import React from 'react';

const ContactForm = ({ name, setName, number, setNumber, addContact }) => {
  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <br />
      <label>
        Number:
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleNumberChange}
        />
      </label>
      <br />
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;

// import React, { useState } from 'react';
// import { nanoid } from 'nanoid';

// function ContactForm({ addContact }) {
//   const [name, setName] = useState('');

//   const handleNameChange = event => {
//     setName(event.target.value);
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (name.trim() !== '') {
//       const newContact = {
//         id: nanoid(),
//         name: name,
//       };

//       addContact(newContact);
//       setName('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input
//           type="text"
//           value={name}
//           onChange={handleNameChange}
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Imię i nazwisko mogą zawierać tylko litery, apostrof, myślnik i spacje. Na przykład Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           required
//         />
//       </label>
//       <button type="submit">Add contact</button>
//     </form>
//   );
// }

// export default ContactForm;
