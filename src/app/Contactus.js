"use client";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Contactus(){
  return(
    <>
    <h2>This is the Contactus page</h2>
    </>
);
  // const Contactus = () => {
  //   const [submitted, setSubmitted] = useState(false);
  
  //   const handleContact = () => {
  //     setSubmitted(true);
  //   };
  
  //   return (
  //     <div>
  //       <h1>Contact Us</h1>
  //       {submitted ? (
  //         <p>Thank you for reaching out! We'll contact you soon.</p>
  //       ) : (
  //         <>
  //           <input type="text" placeholder="Your Name" required />
  //           <input type="email" placeholder="Your Email" required />
  //           <button onClick={handleContact}>Submit</button>
  //         </>
  //       )}
  //     </div>
  //   );
  // };
}

