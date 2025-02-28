import Link from "next/link";
import React from "react";

const TermsPolicy = () => {
  return (
    <>
      <div className="rbt-main-content mb--0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content rainbow-section-gap">
            {/* <div className="banner-area">
              <div className="settings-area">
                <h3 className="title">Terms And Condition</h3>
              </div>
            </div> */}
            <div className="content-page">
              <div className="chat-box-list">
                <div className="content rbt-terms-content">
                  <ol style={{ listStyle: "none" }}>
                    <li>Last Updated: 28 Feb 2025</li>
                    <li>
                      Welcome to ScanTheDoc! By using our services, including our website, portal,
                      and automated invoice processing system, you agree to comply with the terms outlined in this document.
                      These Terms and Conditions establish the rules and guidelines for using
                      ScanTheDoc and define the rights and responsibilities of both the users and the service provider.
                      If you do not agree with any part of these terms, you must discontinue your use of our services immediately.
                    </li>
                  </ol>
                  <h4>Acceptance of Terms</h4>
                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                      By accessing and using ScanTheDoc, you confirm that you have read,
                      understood, and accepted these Terms and Conditions. Your continued
                      use of the platform constitutes your agreement to abide by all
                      applicable rules, policies, and updates that may be implemented in the future.
                      If you disagree with any provision stated in this document,
                      you are not authorized to use the service.
                    </li>
                  </ol>

                  <h4>Use of Services</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                      ScanTheDoc is designed to help individuals and businesses 
                      process invoices efficiently using AI-powered document scanning 
                      and data extraction technology. The platform allows users to 
                      upload invoices via various channels, including email and direct 
                      portal uploads, after which our system extracts relevant details 
                      for easy access and management. This service is intended for legitimate 
                      business and personal use only. Any misuse of the platform, including 
                      but not limited to fraudulent activities, unauthorized data extraction, 
                      or attempts to manipulate the system, is strictly prohibited.
                    </li>
                    <li>
                    To access our services, users must create an account by providing 
                    accurate and up-to-date information. You are solely responsible for 
                    maintaining the confidentiality of your login credentials and for 
                    all activities carried out under your account. If you suspect any 
                    unauthorized access or security breaches, you must notify us immediately 
                    so that appropriate action can be taken. ScanTheDoc will not be liable 
                    for any loss or damage arising from unauthorized use of your account.
                    </li>
                  </ol>

                  <h4>Invoice Processing & Data Handling</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    When you upload invoices to ScanTheDoc, you grant us permission 
                    to process these documents using advanced Optical Character 
                    Recognition (OCR) and AI-based technologies. Our system automatically 
                    extracts essential details such as invoice numbers, dates, amounts, 
                    and vendor information, presenting them in a structured format for 
                    your convenience. While we make every effort to ensure accuracy, 
                    we do not guarantee that extracted data will be free of errors, and 
                    users are encouraged to verify the information before relying on it 
                    for financial or accounting purposes.
                    </li>
                    <li>
                    ScanTheDoc securely stores processed invoice data within our portal, 
                    allowing users to access and manage their documents at any time. 
                    We prioritize data security and confidentiality, ensuring that your 
                    uploaded files and extracted information are not shared, sold, or misused. 
                    However, we are not responsible for any errors, misinterpretations, 
                    or losses that may occur as a result of using our service. Users remain 
                    fully accountable for how they use the extracted data and should 
                    exercise due diligence when handling financial documents.
                    </li>
                  </ol>

                  <h4>Privacy & Data Protection</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    We are committed to protecting your privacy and ensuring that 
                    your personal and financial data remains secure. ScanTheDoc 
                    follows industry-standard security measures to safeguard user 
                    information from unauthorized access, data breaches, or misuse. 
                    By using our services, you acknowledge and consent to the collection, 
                    storage, and processing of your data as outlined in our Privacy Policy. 
                    Users should review this policy to understand how their information is 
                    handled and what steps are taken to ensure compliance with relevant 
                    data protection laws.
                    </li>
                  </ol>

                  <h4>Service Availability & Modifications</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    While we strive to provide an uninterrupted and seamless experience, 
                    ScanTheDoc does not guarantee 100% uptime or error-free service. 
                    There may be instances where maintenance, technical issues, 
                    or unforeseen circumstances temporarily disrupt access to our platform. 
                    We reserve the right to modify, update, or discontinue any part of 
                    the service at our discretion, with or without prior notice. 
                    Users are encouraged to stay informed about system updates and 
                    feature enhancements to ensure they continue to benefit from the latest improvements.
                    </li>
                  </ol>

                  <h4>Limitation of Liability</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    ScanTheDoc is provided on an "as is" and "as available" basis. 
                    We do not make any guarantees regarding the accuracy, reliability, 
                    or performance of our service. While we take extensive measures 
                    to ensure smooth operation, we are not responsible for any financial 
                    losses, errors in data extraction, system downtime, or other 
                    inconveniences resulting from the use of our platform. Users assume 
                    full responsibility for verifying extracted data and making informed 
                    decisions when using the processed information. By using ScanTheDoc, 
                    you agree to indemnify and hold us harmless from any claims, damages, 
                    or liabilities arising from your use of the service.
                    </li>
                  </ol>

                  <h4>Termination of Service</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    ScanTheDoc reserves the right to suspend or terminate accounts 
                    that violate these Terms and Conditions. If a user is found engaging 
                    in fraudulent activities, abusing system functionalities, 
                    or breaching security policies, their access to the platform may be 
                    revoked without prior notice. Users who wish to discontinue their 
                    use of ScanTheDoc can request account deletion, after which all 
                    stored data associated with their profile will be permanently removed. 
                    Once an account is deleted, it cannot be restored, and all associated 
                    invoice data will no longer be accessible.
                    </li>
                  </ol>

                  <h4>Governing Law</h4>

                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                    <li>
                    These Terms and Conditions are governed by the laws of 
                    Maharashtra/ India. Any disputes, claims, or legal matters 
                    arising from the use of ScanTheDoc shall be handled in 
                    accordance with the applicable regulations in the designated jurisdiction. 
                    By using this service, you agree to submit to the legal 
                    framework governing these terms.
                    </li>
                  </ol>

                  <h4>Acknowledge</h4>
                  <ol style={{ listStyle: "none" }}>
                    <li>
                    By continuing to use ScanTheDoc, you acknowledge that you 
                    have read, understood, and agreed to these Terms and Conditions. 
                    Your acceptance of these terms enables us to provide you with 
                    a secure, efficient, and reliable invoice processing experience.
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

export default TermsPolicy;
