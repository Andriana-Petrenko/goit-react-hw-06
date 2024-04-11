
import { nanoid } from 'nanoid'
import './App.css'
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import {useSelector,useDispatch} from 'react-redux'
import { addContact, deleteContact, selectContacts } from '../redux/contactsSlice'
import {changeFilter,selectNameFilter} from '../redux/filtersSlice'


function App() { 
 
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts)
  const filters =useSelector(selectNameFilter)



  const onChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value))
  }


  const addNewContact = (newContact) => {
    const finalContact = { ...newContact, id: nanoid() };
    dispatch(addContact(finalContact))
  };

  const deletePhoneNumber = (contactId) => {
    dispatch(deleteContact(contactId))
  }

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filters .toLowerCase()));
  
  return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm addNewContact={addNewContact} />
  <SearchBox filter={filters} onChangeFilter={onChangeFilter} />
  <ContactList contacts={filteredContacts} deletePhoneNumber={deletePhoneNumber} />
</div>
  )
}

export default App
