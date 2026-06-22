import { useRef, useState } from "react";
import emailjs from "emailjs-com";

import { contact } from '../../data/data';
import './contact.css';
import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import emailIcon from "../../assets/gmail.svg";


function Contact() {

  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSending) {
      return;
    }

    setIsSending(true);

    emailjs.sendForm(
      "service_u74yz9w",
      "template_iga3c78",
      formRef.current,
      "h46I6C9NcQrKCF26B" 
    )
    .then(() => {
      alert("Message sent successfully!");
      formRef.current.reset();
    })
    .catch((error) => {
      console.error(error);
      alert("Failed to send message");
    })
    .finally(() => {
      setIsSending(false);
    });
  };

  return (
    <section id='contact' className="section container">

      <p className="section-subtitle">Get in touch</p>
      <h2 className="section-title">Contact</h2>

      <div className="contact-wrapper">

        <form 
          ref={formRef} 
          onSubmit={handleSubmit} 
          className="contact-form card"
        >
          <input 
            id='name' name="user_name" type="text" autoComplete='name' placeholder="Your Name" required />

          <input 
            id='email' name="user_email" type="email" autoComplete='email' placeholder="Your Email" required />

          <textarea 
            id='message' name="message" rows="5" autoComplete='off' placeholder="Your Message" required ></textarea>

          <button type="submit" disabled={isSending}>
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="contact-info card">
          <h3 className="contact-title">Contact Info</h3>

          <div className="contact-item">
            <img src={emailIcon} alt="email" />
            <div>
              <p>Email</p>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </div>
          </div>

          <div className="contact-item">
            <img src={githubIcon} alt="github" />
            <div>
              <p>GitHub</p>
              <a href={contact.github} target="_blank" rel="noreferrer">
                View Profile
              </a>
            </div>
          </div>

          <div className="contact-item">
            <img src={linkedinIcon} alt="linkedin" />
            <div>
              <p>LinkedIn</p>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                Connect with me
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;
