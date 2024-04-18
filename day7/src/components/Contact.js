import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact">
      <h1>Contact Us</h1>
        <form >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="form-group">
            <label >Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
