import styles from "./Contact.module.css";
import { useState } from 'react'

const ContactForm = () => {

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const { name, phone, email, message } = data

  const handleChange = e =>
  setData({ ...data, [e.target.name]: e.target.value })


  const handleSubmit = async e => {
    e.preventDefault()
    try {
      await fetch("https://v1.nocodeapi.com/sahil14mishra/google_sheets/yxtWjLtcmfehPAWl?tabId=Page1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[name,phone, email, message]]),
      })
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
      <form onSubmit={handleSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" onChange={handleChange} name="name" autoComplete="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" onChange={handleChange} autoComplete="tel" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleChange} name="email" autoComplete="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" name="message" value={message} onChange={handleChange} rows="8" autoComplete="off" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      <div >
        <img src="/images/contact.svg" alt="contact image"align="right" width="69%"/>
      </div>
    </section>
  );
};

export default ContactForm;
