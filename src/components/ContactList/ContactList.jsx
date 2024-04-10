import Contact from "../Contact/Contact"
import css from "./Contact.module.css"
const ContactList=({contacts,deleteContact}) =>{
  return (
      <ul className={css.contact_list}>
      {(contacts.length===0)? (<p>You do not have any contact!</p> ):
        contacts.map(contact => {
              return (<Contact key={contact.id} contact={contact} deleteContact={deleteContact} />)
          })} 
    </ul>
  )
}

export default ContactList