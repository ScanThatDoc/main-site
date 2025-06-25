import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png";
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png";
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png";
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png";
import TabStyleOne from "../TabStyles/TabStyle-One";
import ServiceStyleOne from "../Services/ServiceStyle-One";
import AdvanceTab from "../TabStyles/AdvanceTab";
import Pricing from "../Pricing/Pricing";
import ServiceTwo from "../Services/Service-Two";
import Testimonial from "../Testimonials/Testimonial";
import CtaTwo from "../CallToActions/Cta-Two";
import { useAppContext } from "@/context/Context";
import TextAnimation from "../Common/text-animation";

const Home = () => {
  const { isLightTheme } = useAppContext();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const image = document.querySelector('.slider-frame');
      if (image) {
        const imageRect = image.getBoundingClientRect();
        const imageTop = imageRect.top;
        const windowHeight = window.innerHeight;
        
        // Calculate when 20% of the image is scrolled
        const scrollThreshold = imageTop + (imageRect.height * 0.2);
        
        if (scrollThreshold < windowHeight && !isAnimated) {
          setIsAnimated(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimated]);

  const marqueeItems = [
    "/images/marquee/amazon.png",
    "/images/marquee/discord.png",
    "/images/marquee/gdocs.png",
    "/images/marquee/gmail.png",
    "/images/marquee/gsheets.png",
    "/images/marquee/linkedin.png",
    "/images/marquee/meta.png",
    "/images/marquee/outlook.png",
    "/images/marquee/slack.png",
    "/images/marquee/twitter.png",
    "/images/marquee/youtube.png",
    // "/images/marquee/whatsapp.png",
  ];

  return (
    <>
      <div
        className="slider-area slider-style-1 variation-default slider-bg-image bg-banner1 slider-bg-shape"
        data-black-overlay="1"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="inner justify-content-center mt--140">
                <h1 className="title display-one">
                Transform Your {"  "}
                <span className="header-caption d-none d-md-block d-xl-inline ">
                    <TextAnimation data={["Invoices", "Purchase Orders", "Receipts", "Quotations", "Delivery Notes", "Bills of Landing"]}/>
                </span>
                <span className="header-caption d-block d-md-none">
                    <TextAnimation data={["Invoices", "POs", "Receipts", "Quotations"]}/>
                </span>
                <span className="d-block">Workflow with AI Automation </span>
                </h1>
                <p className="description text-center"> 
                Say Goodbye to Manual Entry <br />{" "}
                Let AI Process Your Documents Instantly
                </p>
                <div className="button-group">
                  <h5 className="text-center">Unlock AI Power - Try Now Using</h5>
                  <div className="d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-4" style={{ 
                    width: '100%',
                    '@media (max-width: 767px)': {
                      flexDirection: 'column',
                      gap: '15px'
                    },
                    '@media (min-width: 768px)': {
                      flexDirection: 'row',
                      gap: '20px'
                    }
                  }}>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        const popup = document.createElement('div');
                        popup.style.cssText = `
                          position: fixed;
                          top: 50%;
                          left: 50%;
                          transform: translate(-50%, -50%);
                          background: white;
                          padding: 40px;
                          border-radius: 16px;
                          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                          z-index: 1000;
                          font-size: 18px;
                          font-weight: 500;
                          color: #000;
                        `;
                        popup.innerHTML = `
                          <span>
                          Redirecting you to WhatsApp...
                          <ul style="margin-top: 20px; font-size: 16px;">
                            <li>Say something to get started</li>
                            <li>Follow the instructions received on whatsapp</li>
                          </ul>
                          </span>
                        `;
                        document.body.appendChild(popup);
                        
                        setTimeout(() => {
                          document.body.removeChild(popup);
                          window.open(process.env.NEXT_PUBLIC_WHATSAPP_API, "_blank");
                        }, 4000);
                      }}
                      style={{
                        backgroundColor: '#25D366',
                        color: '#ffffff',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '30px',
                        fontWeight: '500',
                        fontSize: '15px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        width: '240px',
                        textDecoration: 'none',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        justifyContent: 'center',
                        '@media (max-width: 767px)': {
                          width: '100%',
                          maxWidth: '240px',
                          margin: '0 auto'
                        }
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#128C7E';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#25D366';
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.48784C18.2877 1.27284 15.2827 0.0428418 12.0937 0.0428418C5.4637 0.0428418 0.0927734 5.41284 0.0927734 12.0428C0.0927734 14.1428 0.6577 16.1928 1.7327 18.0128L0 24.0428L6.1637 22.3428C7.9187 23.3228 9.8837 23.8428 11.8937 23.8428H12.0937C18.7237 23.8428 24.0937 18.4728 24.0937 11.8428C24.0937 8.65284 22.7177 5.70284 20.5027 3.48784ZM12.0937 21.8428C10.2787 21.8428 8.5037 21.3428 6.9337 20.4028L6.5737 20.1928L2.8437 21.2028L3.8737 17.5628L3.6337 17.1878C2.6037 15.5678 2.0627 13.6928 2.0627 11.7928C2.0627 6.51284 6.5737 2.00284 11.8537 2.00284C14.5537 2.00284 17.0937 3.02284 19.0037 4.93284C20.9137 6.84284 21.9337 9.38284 21.9337 12.0828C22.1337 17.3628 17.6237 21.8428 12.0937 21.8428ZM17.5537 14.5628C17.2537 14.4128 15.7937 13.6928 15.5337 13.5928C15.2737 13.4928 15.0737 13.4428 14.8737 13.7428C14.6737 14.0428 14.1037 14.7128 13.9337 14.9128C13.7637 15.1128 13.5937 15.1428 13.2937 14.9928C13.0037 14.8428 12.0337 14.5128 10.8937 13.5028C10.0037 12.7128 9.3937 11.7428 9.2237 11.4428C9.0537 11.1428 9.2037 10.9828 9.3537 10.8328C9.4837 10.6928 9.6437 10.4728 9.7837 10.3028C9.9237 10.1328 9.9737 10.0128 10.0737 9.81284C10.1737 9.61284 10.1237 9.44284 10.0537 9.29284C9.9837 9.14284 9.3937 7.68284 9.1437 7.08284C8.8937 6.48284 8.6437 6.58284 8.4737 6.58284C8.3037 6.58284 8.1037 6.55284 7.9037 6.55284C7.7037 6.55284 7.3937 6.62284 7.1337 6.92284C6.8737 7.22284 6.1037 7.94284 6.1037 9.40284C6.1037 10.8628 7.1737 12.2728 7.3137 12.4728C7.4537 12.6728 9.3937 15.6728 12.3637 16.9728C13.0337 17.2728 13.5537 17.4428 13.9637 17.5728C14.6337 17.7728 15.2437 17.7428 15.7337 17.6728C16.2737 17.5928 17.4537 16.9528 17.7037 16.2528C17.9537 15.5528 17.9537 14.9528 17.8837 14.8528C17.8137 14.7528 17.6137 14.7128 17.5537 14.5628Z" fill="currentColor"/>
                      </svg>
                      Try with WhatsApp
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(process.env.NEXT_PUBLIC_WEBSITE_URL, "_blank");
                      }}
                      style={{
                        backgroundColor: '#ffffff',
                        color: '#3c4043',
                        border: '1px solid #dadce0',
                        padding: '12px 24px',
                        borderRadius: '30px',
                        fontWeight: '500',
                        fontSize: '15px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        width: '240px',
                        textDecoration: 'none',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        justifyContent: 'center',
                        '@media (max-width: 767px)': {
                          width: '100%',
                          maxWidth: '240px',
                          margin: '0 auto'
                        }
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#e8eaed';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                        e.currentTarget.style.borderColor = '#9aa0a6';
                        e.currentTarget.style.color = '#202124';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                        e.currentTarget.style.borderColor = '#dadce0';
                        e.currentTarget.style.color = '#3c4043';
                      }}
                    >
                      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      </svg>
                      Join with Google
                    </button>
                  </div>
                </div>
                <div className="inner-shape">
                  <Image
                    src={shapeOne}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-one"
                  />
                  <Image
                    src={shapeTwo}
                    width={60}
                    height={57}
                    alt="Icon Shape"
                    className="iconshape iconshape-two"
                  />
                  <Image
                    src={shapeThree}
                    width={42}
                    height={31}
                    alt="Icon Shape"
                    className="iconshape iconshape-three"
                  />
                  <Image
                    src={shapeFour}
                    width={100}
                    height={95}
                    alt="Icon Shape"
                    className="iconshape iconshape-four"
                  />
                </div>
              </div>
            </div>
            <div className="rainbow-service-area rainbow-section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="section-title text-center pb--60"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="100"
                    >
                      <h4 className="subtitle">
                        <span className="theme-gradient">
                          RapidScan AI unlocks the potential of OCR
                        </span>
                      </h4>
                      <h2 className="title mb--0">
                        Effortless <TextAnimation data={["Invoices", "Purchase Orders", "Receipts", "Quotations", "Delivery Notes", "Bills of Landing"]} className="d-block d-md-inline"/>
                        <span className="d-block">processing just as you want.</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <TabStyleOne />
              </div>
            </div>
            <div className="col-lg-11 col-xl-11 justify-content-center mt-4">
              <div className="slider-frame">
                <Image
                  className={isAnimated ? 'flip-animation' : ''}
                  src={isLightTheme ? "https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/home-lite-dashboard.png" : "https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/home-dark-dashboard.png"}
                  width={1055}
                  height={898}
                  alt="Banner Images"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-shape">
          <Image
            className="bg-shape-one"
            width={640}
            height={949}
            src="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/bg-shape-four.png"
            alt="Bg Shape"
          />
          <Image
            className="bg-shape-two"
            src="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/bg-shape-five.png"
            width={626}
            height={1004}
            alt="Bg Shape"
          />
        </div>
      </div>

      <div className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Assisting Orginizations</span>
                </h4>
                <h2 className="title mb--60">
                  Simplifies handling <TextAnimation data={["Invoices", "Purchase Orders", "Receipts", "Quotations", "Delivery Notes", "Bills of Landing"]} className="d-block d-md-inline"/> 
                  <span className="d-block">and boost efficiency for your business </span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <ServiceStyleOne />
      </div>

      <div className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big">
        <div className="container">
          <div className="html-tabs" data-tabs="true">
            <AdvanceTab />
          </div>
        </div>
        <div className="bg-shape">
          <Image src="https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/split-bg-shape.png" width={630} height={879} alt="Bg Shape" />
        </div>
      </div>

      <div className="rainbow-collobration-area rainbow-section-gap-big">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="700"
                data-sal-delay="100"
              >
                <h4 className="subtitle ">
                  <span className="theme-gradient">Connect with the Applications You Already Use</span>
                </h4>
                <h2 className="title mb--20">
                  AI-Powered Document Processing for Effortless Reconciliation
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 mt--60" style={{
              overflowX: 'hidden',
              maxWidth: '100vw'
            }}>
              <div className="marquee-content-left mb--20">
                {[...Array(4)].map((_, i) => (
                  marqueeItems.map((item, index) => (
                    <Image
                      key={`left-${i}-${index}`}
                      src={item}
                      width={80}
                      height={80}
                      className="p-4"
                      alt="Marquee Item"
                    />
                  ))
                ))}
              </div>
              <div className="marquee-content-right">
                {[...Array(4)].map((_, i) => (
                  marqueeItems.map((item, index) => (
                    <Image
                      key={`left-${i}-${index}`}
                      src={item}
                      width={80}
                      height={80}
                      className="p-4"
                      alt="Marquee Item"
                    />
                  ))
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aiwave-pricing-area wrapper ">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Pricing</span>
                </h4>
                <h2 className="title w-600 mb--40">
                  Pricing plans for everyone
                </h2>
              </div>

              {/* <nav className="aiwave-tab">
                <div
                  className="tab-btn-grp nav nav-tabs text-center justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  {PricingData &&
                    PricingData.pricing.map((data, index) => (
                      <button
                        className={`nav-link ${data.isSelect ? "active" : ""}`}
                        id={`${data.priceId}-tab`}
                        data-bs-toggle="tab"
                        data-bs-target={`#${data.priceId}`}
                        type="button"
                        role="tab"
                        aria-controls={data.priceId}
                        aria-selected="false"
                        key={index}
                      >
                        {data.priceType}{" "}
                        {data.discount ? (
                          <span className="rainbow-badge-card badge-border">
                            -{data.discount}%
                          </span>
                        ) : (
                          ""
                        )}
                      </button>
                    ))}
                </div>
              </nav> */}
            </div>
          </div>

          <Pricing
            parentClass="col-xl-4 col-lg-6 col-md-6 col-12 mt--40"
            start={0}
            end={3}
            isBadge={true}
            gap="mt_dec--40"
          />
        </div>
      </div>

      <div className="aiwave-service-area rainbow-section-gap  mt--40">
        <div className="container">
          <div className="row row--15 service-wrapper">
            <ServiceTwo />
          </div>
        </div>
      </div>

      <div className="rainbow-testimonial-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-left"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Assisting individuals</span>
                </h4>
                <h2 className="title mb--60">The opinions of the community</h2>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>

      <div className="rainbow-cta-area rainbow-section-gap rainbow-section-gapBottom-big">
        <div className="container">
          <CtaTwo isLightTheme={isLightTheme}/>
        </div>
      </div>
    </>
  );
};

export default Home;
