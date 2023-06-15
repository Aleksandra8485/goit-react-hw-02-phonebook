import React, { useState } from 'react';
import ContactForm from './ContactForm/ContactForm';

function App() {
  const [state, setState] = useState({
    contacts: [],
    name: '',
  });

  const addContact = newContact => {
    setState({
      ...state,
      contacts: [...state.contacts, newContact],
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />

      <div>
        <h2>Contacts</h2>
        <ul>
          {state.contacts.map(contact => (
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