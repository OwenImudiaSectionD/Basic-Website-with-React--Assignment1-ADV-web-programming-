import { useState } from "react";

export default function ContactusPage(){
  const ContactusPage = () => {
    const [submitted, setSubmitted] = useState(false);
  
    const handleContact = () => {
      setSubmitted(true);
    };
  
    return (
      <div>
        <h1>Contact Us</h1>
        {submitted ? (
          <p>Thank you for reaching out! We'll contact you soon.</p>
        ) : (
          <>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <button onClick={handleContact}>Submit</button>
          </>
        )}
      </div>
    );
  };  
};
