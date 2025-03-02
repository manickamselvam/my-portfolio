import React from "react";
import { CONTACT } from "../constants";
// import HomeUp from "./HomeUp";

const Contact = ({ contactSection }) => {
  return (
    <div ref={contactSection} className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        {/* href={`mailto:${CONTACT.email}`} */}
        <a href={`mailto:${CONTACT.email}`} className="border-b">
          {CONTACT.email}
        </a>
        {/* <HomeUp /> */}
      </div>
    </div>
  );
};

export default Contact;
