import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sal from "sal.js";
import bgShape from "../../public/images/cta-img/bg-shape.png";
import TextAnimation from "../Common/text-animation";

const CtaTwo = ({isLightTheme}) => {
  useEffect(() => {
    Sal();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="aiwave-cta">
            <div className="inner">
              <div className="content-left">
                <div
                  className="section-title text-left"
                  data-sal="slide-up"
                  data-sal-duration="400"
                  data-sal-delay="150"
                >
                  <h4 className="subtitle">
                    <span className="theme-gradient">
                      Get Started with RapidScan.AI
                    </span>
                  </h4>
                  <h2 className="title w-600 mb--5">
                    Experience <TextAnimation data={["Invoices", "Purchase Orders", "Receipts", "Quotations", "Delivery Notes", "Bills of Landing"]} className="d-block d-md-inline"/> Automation with AI
                  </h2>
                  <p className="description b1">
                    Automates document processing by fetching files from WhatsApp, Gmail or any other source<br />
                    using OCR technology to extract data dynamically.<br />
                    Then stores and displays the structured data in the Dashboard,<br />
                    eliminating manual effort and streamlining workflows.
                    
                  </p>
                </div>
                <div className="app-store-btn">
                  <Link 
                    className="btn-default"
                    href="https://api.whatsapp.com/send?phone=60108366750&text=Hello"
                    onClick={(e) => {
                      e.preventDefault();
                      // Show popup with bullet points
                      const popup = document.createElement('div');
                      popup.style.cssText = `
                        position: fixed;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        background: white;
                        padding: 120px;
                        border-radius: 8px;
                        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                        z-index: 1000;
                        font-size: 30px;
                        font-weight: 600;
                        color: #000;
                      `;
                      popup.innerHTML = `
                        <span >
                        Redirecting you to WhatsApp...
                        <ul>
                          <li>Say something to get started</li>
                          <li>Follow the instructions received on whatsapp</li>
                        </ul>
                        </span>
                      `;
                      document.body.appendChild(popup);
                      
                      setTimeout(() => {
                        document.body.removeChild(popup);
                        window.open("https://api.whatsapp.com/send?phone=60108366750&text=Hello", "_blank");
                      }, 4000);
                    }}
                  >
                    Try with WhatsApp Now
                  </Link>
                </div>
              </div>
              <div className="content-right">
                <div className="img-right">
                  <Image
                    src={isLightTheme ? "https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/CTAlight.jpeg" : "https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/CTA.jpeg"}
                    width={449}
                    height={499}
                    alt="Mobile View"
                  />
                </div>
              </div>
              <div className="bg-shape-one">
                <Image src={bgShape} width={639} height={404} alt="Bg shape" />
              </div>
            </div>
            <div className="bg-shape-inside">
              <Image src="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/bg-shape-tree.png" width={968} height={1103} alt="Bg shape" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaTwo;
