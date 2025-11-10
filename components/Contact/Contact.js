import React from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";
import contactData from "../../data/contact.json";

const Contact = () => {
  const { contact } = contactData;
  
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area rainbow-section-gapTop-big rainbow-section-gapBottom-big">
          <div className="container">
            <div className="row mt--40 row--15">
              <div className="col-lg-8">
                <div className="contact-details-box">
                  <h3 className="title">{contact.title}</h3>

                  <div className="profile-details-tab">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        
                      >
                        <ContactForm />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt_md--30 mt_sm--30">
                <div className="rainbow-address">
                  <div className="icon">
                    <i className={contact.address.icon}></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">{contact.address.title}</h4>
                    <p className="b2">
                      {contact.address.address.map((line, index) => (
                        <React.Fragment key={index}>
                          {line}
                          {index < contact.address.address.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </p>
                  </div>
                </div>
                <div className="rainbow-address">
                  <div className="icon">
                    <i className={contact.email.icon}></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">{contact.email.title}</h4>
                    <p className="b2">
                      <Link href={`mailto:${contact.email.email}?subject=${encodeURIComponent(contact.email.subject)}&body=${encodeURIComponent(contact.email.body)}`}>
                        {contact.email.email}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Contact;
