import React from "react";
import { ContactWrapper, FormWrapper } from "./PagesStyles";
import { CgAttachment } from "react-icons/cg"

const Contact = () => {
  return (
    <ContactWrapper>
      <div className="left__side">
        <h3>Have a song?</h3>
        <h1>Let's Talk</h1>

        <p>Hello@vrct.com</p>
      </div>

      <FormWrapper>
        <div className="holder">
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="holder">
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="holder">
          <input type="text" placeholder="Tell us about your Song" />
        </div> 

        <a><CgAttachment style={{marginRight: "10px"}} /> Attach a file (optional)</a>

        <button>Submit</button>
      </FormWrapper>
    </ContactWrapper>
  );
};

export default Contact;
