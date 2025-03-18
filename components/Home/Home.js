import React from "react";
import Link from "next/link";
import Image from "next/image";
import PricingData from "../../data/pricing.json";
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
              <div className="inner text-center mt--140">
                <h1 className="title display-one">
                Automate {"  "}
                <span className="header-caption d-none d-md-block d-lg-inline ">
                    <TextAnimation data={["Invoice", "Purchase Order", "Receipt", "Quotation", "Delivery Note", "Bill of Landing"]}/>
                </span>
                <span className="header-caption d-block d-md-none">
                    <TextAnimation data={["Invoice", "PO", "Receipt", "Quotation"]}/>
                </span>
                <span className="d-block">Your Data Our AI Zero Effort</span>
                </h1>
                <p className="description"> 
                Say Goodbye to Manual Entry <br />{" "}
                Let AI Process Your Documents Instantly
                </p>
                <div >
                  <Link 
                    className="btn-default"
                    href="https://api.whatsapp.com/send?phone=60108366750&text=Hi%2C%20Please%20connect%20me%20to%20RapidScanAI"
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
                        window.open("https://api.whatsapp.com/send?phone=60108366750&text=Hi%2C%20Please%20connect%20me%20to%20RapidScanAI", "_blank");
                      }, 4000);
                    }}
                  >
                    Try Now
                  </Link>
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
            <div className="col-lg-11 col-xl-11 justify-content-center ">
              <div className="slider-frame">
                <Image
                  className=""
                  src={isLightTheme ? "https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/home-lite-dashboard.png" : "https://dev-docscanner.s3.ap-south-1.amazonaws.com/main+site+image/home-dark-dashboard.png"}
                  width={1055}
                  height={898}
                  alt="Banner Images"
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
                  Effortless <TextAnimation data={["Invoice", "Purchase Order", "Receipt", "Quotation", "Delivery Note", "Bill of Landing"]} className="d-block d-md-inline"/>
                  <span className="d-block">processing just as you want.</span>
                </h2>
              </div>
            </div>
          </div>
          <TabStyleOne />
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
                  Simplifies handling <TextAnimation data={["Invoice", "Purchase Order", "Receipt", "Quotation", "Delivery Note", "Bill of Landing"]} className="d-block d-md-inline"/> 
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
            <div className="col-lg-12 mt--60">
            <marquee direction="left">
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
              </marquee>
              <marquee direction="right">
                {[...Array(4)].map((_, i) => (
                  marqueeItems.map((item, index) => (
                    <Image 
                      key={`right-${i}-${index}`} 
                      src={item} 
                      width={80} 
                      height={80} 
                      className="p-4" 
                      alt="Marquee Item" 
                    />
                  ))
                ))}
              </marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="aiwave-pricing-area wrapper rainbow-section-gap-big">
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

              <nav className="aiwave-tab">
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
              </nav>
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

      <div className="aiwave-service-area rainbow-section-gap">
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
