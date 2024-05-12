import emailjs from "@emailjs/browser";
import { useRef } from "react";

import "./mail.css";

const EmailSend = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    // //////////////////////////////////////publicKey
    const publicKey = "COd_lQAPKAEk0joDw";
    const templateId = "template_dhtfc0o";
    const serviceId = "service_p8hgf7s";

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        window.location.reload();
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <div className="form-container ">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="firstName">Name</label>
          <input required name="from_name" id="firstName" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="email">@mail</label>
          <input required name="email" id="email" type="text" />
        </div>

        <div className="form-group">
          <label htmlFor="textarea">Your Message</label>
          <textarea
            required
            cols="50"
            rows="10"
            id="textarea"
            name="message"
          >
            {" "}
          </textarea>
        </div>

        <button type="submit" className="form-submit-btn">
          Submit
        </button>
      </form>
    </div>

   

  );
};
export default EmailSend;
