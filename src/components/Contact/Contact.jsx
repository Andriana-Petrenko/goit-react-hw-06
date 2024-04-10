import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css"

const Contact = ({ contact, deleteContact }) => {
  return (
   <li>
          <div className={css.wrapper_contact}>
            <h2><FaUser size="16"/> {contact.name}</h2>
            <p><FaPhone size="16"/> {contact.number}</p>
          </div>
      <button type="button" className={css.delete_button} onClick={()=>deleteContact(contact.id)}>Delete</button>
    </li>
  )
}

export default Contact