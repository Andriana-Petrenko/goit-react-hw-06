import Contact from "../Contact/Contact"
import css from "./Contact.module.css"
const ContactList=({contacts,deletePhoneNumber}) =>{
  return (
      <ul className={css.contact_list}>
      {(contacts.length===0)? (<p>You do not have any contact!</p> ):
        contacts.map(contact => {
              return (<Contact key={contact.id} contact={contact} deletePhoneNumber={deletePhoneNumber} />)
          })} 
    </ul>
  )
}

export default ContactList