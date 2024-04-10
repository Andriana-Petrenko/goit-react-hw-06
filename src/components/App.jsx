import { useEffect } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import ContactList from './ContactList/ContactList'
import ContactForm from './ContactForm/ContactForm'
import SearchBox from './SearchBox/SearchBox'
import {useSelector,useDispatch} from 'react-redux'

// const initialContacts=[
//   {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
// ]

function App() { 
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = window.localStorage.getItem('saved-contacts');
  //   if (savedContacts !== null) { return JSON.parse(savedContacts)}
  //   return initialContacts})
  const dispatch = useDispatch();
  const contacts = useSelector(state=>state.contactbox.contacts)
  const filter=useSelector(state=>state.contactbox.filters)

  useEffect(() => {
    window.localStorage.setItem('saved-contacts',JSON.stringify(contacts));
  },[contacts])

  // const [filter, setFilter] = useState(() => {
  //   const savedFilter = window.localStorage.getItem('saved-filter');
  //   if (savedFilter !== null) { return savedFilter}
  //   return ''}
  // );

  const onChangeFilter = (event) => {
    // setFilter(event.target.value);
      const action = { type: "contactbox/FILTER_CONTACT", payload: event.target.value }
    dispatch(action)
  }

  useEffect(() => {
    window.localStorage.setItem('saved-filter',filter);
  },[filter])

  const addContact = (newContact) => {
    const finalContact = { ...newContact, id: nanoid() };
    // setContacts((prevContacts)=>[...prevContacts, finalContact])
    const action = { type: "contactbox/ADD_CONTACT", payload: finalContact }
    dispatch(action)
  };

  const deleteContact = (contactId) => {
        const action = { type: "contactbox/DELETE_CONTACT", payload: contactId }
    dispatch(action)
    // setContacts((prevContacts)=>prevContacts.filter((contact)=>contact.id !==contactId))
  }

  const filteredContacts = contacts.filter(
    (contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
  <div>
  <h1>Phonebook</h1>
  <ContactForm addContact={addContact} />
  <SearchBox filter={filter} onChangeFilter={onChangeFilter} />
  <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
</div>
  )
}

export default App
