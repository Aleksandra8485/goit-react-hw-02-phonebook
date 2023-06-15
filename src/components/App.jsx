import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
    name: '',
    number: '',
  });

  const handleNameChange = event => {
    setState({ ...state, name: event.target.value });
  };

  const handleNumberChange = event => {
    setState({ ...state, number: event.target.value });
  };

  const handleFilterChange = event => {
    setState({ ...state, filter: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (state.name.trim() !== '' && state.number.trim() !== '') {
      const newContact = {
        id: nanoid(),
        name: state.name,
        number: state.number,
      };

      setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        filter: '',
        name: '',
        number: '',
      }));
    }
  };

  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <h1>Książka telefoniczna</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Imię i nazwisko:
          <input
            type="text"
            value={state.name}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' ][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Imię i nazwisko mogą zawierać tylko litery, apostrof, myślnik i spacje. Na przykład Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Numer telefonu:
          <input
            type="tel"
            value={state.number}
            onChange={handleNumberChange}
            pattern="\+?\d{1,4}?\s?\(?\d{1,3}?\)?\s?\d{1,4}\s?\d{1,4}\s?\d{1,9}"
            title="Numer telefonu musi zawierać tylko cyfry i może zawierać spacje, myślniki, nawiasy i może zaczynać się od +"
            required
          />
        </label>
        <button type="submit">Dodaj kontakt</button>
      </form>

      <div>
        <h2>Lista kontaktów:</h2>
        <input
          type="text"
          placeholder="Wyszukaj kontakt..."
          value={state.filter}
          onChange={handleFilterChange}
        />
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
