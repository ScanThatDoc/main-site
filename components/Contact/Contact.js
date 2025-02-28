import React from "react";
import Link from "next/link";
import ContactForm from "./ContactForm";

const Contact = () => {

  const handleFormSubmit = async (data) => {
    console.log(data);
    try {
      // TODO: Submit form data to N8N
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  
  return (
    <>
      <div className="main-content">
        <div className="rainbow-contact-area rainbow-section-gapTop-big">
          <div className="container">
            <div className="row mt--40 row--15">
              <div className="col-lg-8">
                <div className="contact-details-box">
                  <h3 className="title">Help us in Helping You</h3>

                  <div className="profile-details-tab">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade active show"
                        
                      >
                        <ContactForm handleFormSubmit={handleFormSubmit} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mt_md--30 mt_sm--30">
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-location-dot"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Location</h4>
                    <p className="b2">
                    116, 1st floor, W-Biz Tower, Bhumker Chowk, <br />
                    Waqad, Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
                <div className="rainbow-address">
                  <div className="icon">
                    <i className="fa-sharp fa-regular fa-envelope"></i>
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Email Address</h4>
                    <p className="b2">
                      <Link href="mailto:admin@gmail.com">hello@soulputs.com</Link>
                    </p>
                    <p className="b2">
                      <Link href="mailto:example@gmail.com">
                        support@soulputs.com
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
