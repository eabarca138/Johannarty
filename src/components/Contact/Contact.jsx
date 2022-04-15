import "./Contact.css";
import { useState } from "react";
import emailjs from 'emailjs-com';
import alertify from "alertifyjs";
import 'alertifyjs/build/css/alertify.css';

const Contact = () => {

  const [loader, setLoader] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setLoader(true)

    emailjs.sendForm('contact_service', 'template_dreodb1', e.target, 'user_9txnHihTX8zz9zrrZjrsW')
      .then(() => {
          e.target.reset()
          setLoader(false)
          alertify.success('message has been sent'); 
      }, (error) => {
          console.log(error.text);
      })
      .finally(() => setLoader(false));
  };

  return (
    <section className="contact">
      <h2>▰ contact me ▰</h2>

      <form onSubmit={sendEmail}>
        <div>
          <input
            className="form-control form-input"
            placeholder="Name"
            name="user_name"
            required
          />
        </div>
        <div>
          <input
            className="form-control form-input"
            type="Email"
            placeholder="Email"
            name="user_email"
            required
          />
        </div>
        <div>
          <input
            className="form-control form-input"
            placeholder="Subject"
            name="user_subject"
            required
          />
        </div>
        <textarea
          className="form-control form-textarea"
          placeholder="Message"
          name="message"
          required
        ></textarea>

        <div id="enviar">
          {loader ?
          <div className="lds-ripple"><div></div><div></div></div>
          :
          <input type="submit" className="btn-submit" value="Submit" />
          }
        </div>
      </form>
    </section>
  );
};

export default Contact;
