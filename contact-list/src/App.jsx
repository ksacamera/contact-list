import { useState, useEffect} from 'react'
import './App.css'
import ContactList from './components/ContactList'
import SelectedContact from "./components/ContactRow";


const App = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <div>Selected Contact View</div>
      ) : (
      <ContactList />
      )}
    </>
  );
}






export default App;
