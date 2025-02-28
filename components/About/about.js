import React from "react";
import styles from './about.module.css';

const About = ({ aboutData }) => {
  return (
    <>
      <div className="rbt-main-content mb--0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content rainbow-section-gap">
            <div className="content-page pb--50 rbt-terms-content">
              <div className="chat-box-list">
                <div className="content">
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                      Transforming Document Processing with AI Innovation
                    </span>
                  </h4>

                  <h4>Revolutionizing Document Processing with AI</h4>
                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    In today’s fast-paced digital world, businesses handle countless 
                    invoices and documents daily. At ScanTheDoc, we simplify this 
                    process by automating data extraction, reducing manual effort, 
                    and ensuring speed, accuracy, and efficiency.
                    </li>
                    <li>
                    Our advanced AI-powered OCR technology reads invoices in various formats, 
                    extracts key details, and seamlessly organizes them in your portal. 
                    Whether invoices arrive via WhatsApp, Gmail, or direct upload, 
                    our system processes them effortlessly, so you can focus on what 
                    matters most—growing your business.
                    </li>
                  </ol>

                  <h4>Our Mission</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    We believe that document management should be effortless. 
                    That’s why we built a system that integrates with your 
                    existing workflows and helps you save time, cut costs, 
                    and increase productivity.
                    </li>
                    <li>
                      At ScanTheDoc, our mission is simple:
                      <ul>
                        <li>Eliminate manual data entry and reduce human errors.</li>
                        <li>Automate invoice processing for businesses of all sizes.</li>
                        <li>Enhance efficiency through AI-driven solutions.</li>
                        <li>Ensure data security with seamless and encrypted document handling.</li>
                      </ul>
                    </li>
                  </ol>

                  <h4>Why Choose ScanTheDoc?</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    Multi-Platform Integration, Works with WhatsApp, Gmail, and direct uploads
                    </li>
                    <li>
                    Advanced AI & OCR Technology, Extracts high-precision data from various invoice formats.
                    </li>
                    <li>
                    Secure & Reliable, Your documents are protected with industry-standard encryption.
                    </li>
                    <li>
                    Time-Saving Automation, Say goodbye to manual data entry and human errors.
                    </li>
                    <li>
                    User-Friendly Interface, Simple, intuitive, and designed for efficiency.
                    </li>
                  </ol>

                  <h4>Our Vision</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    We envision a future where businesses no longer struggle with 
                    paperwork and data entry. With AI-driven automation, 
                    we aim to transform how organizations handle invoices and documents, 
                    making workflows smarter, faster, and more efficient.
                    </li>
                  </ol>

                  <h4>Join Us in Automating Invoice Management</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    Let ScanTheDoc take care of your invoices while you focus on 
                    growing your business. Experience the power of AI-driven document processing today.
                    </li>
                  </ol>
     
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
