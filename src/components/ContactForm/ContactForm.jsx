import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css"

const ContactFormSchema = Yup.object().shape({
  name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
  number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});

const initialValues = {
 name: "",
 number: "",
};

const ContactForm = ({ addContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

    const handleSubmit = (values, actions) => {
        addContact(values);
        actions.resetForm();
    }


  return (
      <Formik initialValues={initialValues} onSubmit= {handleSubmit} validationSchema={ContactFormSchema}>
      <Form className={css.form}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field type="text" name="name" id={nameFieldId} />
              <ErrorMessage className={css.error}  name="name" component="span" />
              <label htmlFor={numberFieldId}>Number</label>
              <Field type="tel" name="number" id={numberFieldId} />
              <ErrorMessage className={css.error} name="number" component="span" />
			<button  className={css.add_button} type="submit">Add contact</button>
			</Form>
    </Formik>

          
  )
}

export default ContactForm