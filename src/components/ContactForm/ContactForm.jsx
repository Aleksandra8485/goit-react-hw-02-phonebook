import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function ContactForm(props) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleNumberChange = event => {
    setNumber(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (name.trim() !== '' && number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: name,
        number: number,
      };
      props.addContact(newContact);
      setName('');
      setNumber('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Imię i nazwisko mogą zawierać tylko litery, apostrof, myślnik i spacje. Na przykład Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Numer telefonu musi składać się z cyfr i może zawierać spacje, myślniki, nawiasy i może zaczynać się od znaku plus."
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}

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
