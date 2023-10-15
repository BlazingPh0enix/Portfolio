import React from 'react';

const Contact = () => {
  return (
    <div className="section">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" id="name" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" id="email" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message:</label>
          <textarea id="message" className="form-input form-textarea" rows="4"></textarea>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
