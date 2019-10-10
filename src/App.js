import React from 'react';
import Header from './components/header';
import Form from './components/Form';
import ListEvents from './components/ListEvents';

// Context
import CategoriesProvider from './context/CategoriesContext';
import EventsProvider from './context/EventsContext';

function App() {
  return (
    
    <EventsProvider>
      <CategoriesProvider>
        <Header />
        <div className="uk-container">
          <Form />
          <ListEvents />
        </div>
      </CategoriesProvider>
    </EventsProvider>
  );
}

export default App;