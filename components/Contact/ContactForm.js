import React, { useState } from "react";

const ContactForm = ({ handleFormSubmit}) => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFormSubmit(formData);
    setFormData({
      fname: "",
      lname: "",
      email: "",
      phone: "",
      message: "",
    });
  }


  return (
    <>
      <form className="rbt-profile-row rbt-default-form row row--15" onSubmit={handleSubmit}>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="firstname1">First Name</label>
            <input 
              id="firstname1" 
              type="text" 
              placeholder="First Name" 
              value={formData.fname} 
              onChange={(e) => setFormData({ ...formData, fname: e.target.value })}/>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="lastname1">Last Name</label>
            <input 
              id="lastname1" 
              type="text" 
              placeholder="Last Name" 
              value={formData.lname} 
              onChange={(e) => setFormData({ ...formData, lname: e.target.value })}/>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="username1">Email</label>
            <input 
              id="username1" 
              type="text" 
              placeholder="sample@sample.com" 
              value={formData.email} 
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}/>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-6 col-12">
          <div className="form-group">
            <label htmlFor="phonenumber1">Phone Number</label>
            <input 
              id="phonenumber1" 
              type="tel" 
              placeholder="+1-202-555-0174" 
              value={formData.phone} 
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}/>
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="bio1">Tell Us More About Your Query</label>
            <textarea
              id="bio1"
              cols="20"
              rows="5"
              placeholder="Enter your message here…"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>
        </div>
        <div className="col-12 mt--20">
          <div className="form-group mb--0">
            <button className="btn-default" type="submit">
            Send Inquiry
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
