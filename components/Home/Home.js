import React, { useEffect, useState } from "react";
import Image from "next/image";
import shapeOne from "../../public/images/bg/icon-shape/icon-shape-one.png";
import shapeTwo from "../../public/images/bg/icon-shape/icon-shape-two.png";
import shapeThree from "../../public/images/bg/icon-shape/icon-shape-three.png";
import shapeFour from "../../public/images/bg/icon-shape/icon-shape-four.png";
import TabStyleOne from "../TabStyles/TabStyle-One";
import ServiceStyleOne from "../Services/ServiceStyle-One";
import AdvanceTab from "../TabStyles/AdvanceTab";
import Pricing from "../Pricing/Pricing";
import Testimonial from "../Testimonials/Testimonial";
import { useAppContext } from "@/context/Context";
import TextAnimation from "../Common/text-animation";
import homeData from "../../data/home.json";

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
                {homeData.hero.headline.part1} {"  "}
                <span className="header-caption d-none d-md-block d-xl-inline ">
                    <TextAnimation data={homeData.hero.headline.part2Animation.desktop}/>
                </span>
                <span className="header-caption d-block d-md-none">
                    <TextAnimation data={homeData.hero.headline.part2Animation.mobile}/>
                </span>
                <span className="d-block">{homeData.hero.headline.part3} </span>
                </h1>
                <p className="description text-center mb-6"> 
                {homeData.hero.description.line1} <br />{" "}
                {homeData.hero.description.line2}
                </p>
                <div className="button-group mb-2">
                  <div className="d-flex flex-column flex-md-row justify-content-center gap-3 gap-md-4 mb-2">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com', "_blank");
                      }}
                      style={{
                        background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
                        color: '#ffffff',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        fontSize: '15px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4), 0 2px 6px rgba(139, 92, 246, 0.3)',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        letterSpacing: '0.3px',
                        width: 'auto'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #9D6DF9 0%, #8C4DF0 100%)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(139, 92, 246, 0.5), 0 4px 10px rgba(139, 92, 246, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.background = 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 92, 246, 0.4), 0 2px 6px rgba(139, 92, 246, 0.3)';
                      }}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: 'transform 0.3s ease' }}>
                        <path d="M8 7V3M16 7V3M7 11H17M5 21H19C20.1 21 21 20.1 21 19V7C21 5.9 20.1 5 19 5H5C3.9 5 3 5.9 3 7V19C3 20.1 3.9 21 5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {homeData.hero.cta.bookDemo.text}
                    </button>
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
                          ${homeData.hero.cta.popup.message}
                          <ul style="margin-top: 20px; font-size: 16px;">
                            ${homeData.hero.cta.popup.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
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
                        backgroundColor: homeData.hero.cta.buttons.whatsapp.color,
                        color: '#ffffff',
                        border: 'none',
                        padding: '12px 24px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        fontSize: '15px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap',
                        width: 'auto'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = homeData.hero.cta.buttons.whatsapp.hoverColor;
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = homeData.hero.cta.buttons.whatsapp.color;
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20.5027 3.48784C18.2877 1.27284 15.2827 0.0428418 12.0937 0.0428418C5.4637 0.0428418 0.0927734 5.41284 0.0927734 12.0428C0.0927734 14.1428 0.6577 16.1928 1.7327 18.0128L0 24.0428L6.1637 22.3428C7.9187 23.3228 9.8837 23.8428 11.8937 23.8428H12.0937C18.7237 23.8428 24.0937 18.4728 24.0937 11.8428C24.0937 8.65284 22.7177 5.70284 20.5027 3.48784ZM12.0937 21.8428C10.2787 21.8428 8.5037 21.3428 6.9337 20.4028L6.5737 20.1928L2.8437 21.2028L3.8737 17.5628L3.6337 17.1878C2.6037 15.5678 2.0627 13.6928 2.0627 11.7928C2.0627 6.51284 6.5737 2.00284 11.8537 2.00284C14.5537 2.00284 17.0937 3.02284 19.0037 4.93284C20.9137 6.84284 21.9337 9.38284 21.9337 12.0828C22.1337 17.3628 17.6237 21.8428 12.0937 21.8428ZM17.5537 14.5628C17.2537 14.4128 15.7937 13.6928 15.5337 13.5928C15.2737 13.4928 15.0737 13.4428 14.8737 13.7428C14.6737 14.0428 14.1037 14.7128 13.9337 14.9128C13.7637 15.1128 13.5937 15.1428 13.2937 14.9928C13.0037 14.8428 12.0337 14.5128 10.8937 13.5028C10.0037 12.7128 9.3937 11.7428 9.2237 11.4428C9.0537 11.1428 9.2037 10.9828 9.3537 10.8328C9.4837 10.6928 9.6437 10.4728 9.7837 10.3028C9.9237 10.1328 9.9737 10.0128 10.0737 9.81284C10.1737 9.61284 10.1237 9.44284 10.0537 9.29284C9.9837 9.14284 9.3937 7.68284 9.1437 7.08284C8.8937 6.48284 8.6437 6.58284 8.4737 6.58284C8.3037 6.58284 8.1037 6.55284 7.9037 6.55284C7.7037 6.55284 7.3937 6.62284 7.1337 6.92284C6.8737 7.22284 6.1037 7.94284 6.1037 9.40284C6.1037 10.8628 7.1737 12.2728 7.3137 12.4728C7.4537 12.6728 9.3937 15.6728 12.3637 16.9728C13.0337 17.2728 13.5537 17.4428 13.9637 17.5728C14.6337 17.7728 15.2437 17.7428 15.7337 17.6728C16.2737 17.5928 17.4537 16.9528 17.7037 16.2528C17.9537 15.5528 17.9537 14.9528 17.8837 14.8528C17.8137 14.7528 17.6137 14.7128 17.5537 14.5628Z" fill="currentColor"/>
                      </svg>
                      {homeData.hero.cta.buttons.whatsapp.text}
                    </button>
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(process.env.NEXT_PUBLIC_WEBSITE_URL, "_blank");
                      }}
                      style={{
                        backgroundColor: homeData.hero.cta.buttons.google.color,
                        color: '#3c4043',
                        border: `1px solid ${homeData.hero.cta.buttons.google.borderColor}`,
                        padding: '12px 24px',
                        borderRadius: '12px',
                        fontWeight: '600',
                        fontSize: '15px',
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap',
                        width: 'auto'
                      }}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#e8eaed';
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                        e.currentTarget.style.borderColor = '#9aa0a6';
                        e.currentTarget.style.color = '#202124';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = homeData.hero.cta.buttons.google.color;
                        e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.05)';
                        e.currentTarget.style.borderColor = homeData.hero.cta.buttons.google.borderColor;
                        e.currentTarget.style.color = '#3c4043';
                      }}
                    >
                      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      </svg>
                      {homeData.hero.cta.buttons.google.text}
                    </button>
                  </div>

                  <div className="rainbow-collobration-area rainbow-section-gap-big">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-12">
                          <div
                            className="section-title text-center"
                          >
                            <h4 className="subtitle collabration-title-small">
                              <span className="theme-gradient">{homeData.collaborationSection.subtitle}</span>
                            </h4>
                            <h2 className="title mb--10 collabration-title-large">
                              {homeData.collaborationSection.title}
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
                            {[...Array(3)].map((_, i) => (
                              homeData.collaborationSection.erpLogos.map((logo, index) => (
                                <img
                                  key={`left-${i}-${index}`}
                                  src={logo.url}
                                  alt={logo.name}
                                  title={logo.name}
                                  className="p-3"
                                  style={{
                                    height: '60px',
                                    width: 'auto',
                                    maxWidth: '120px',
                                    objectFit: 'contain',
                                    opacity: 0.7,
                                    filter: 'none',
                                    transition: 'all 0.3s ease'
                                  }}
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              ))
                            ))}
                          </div>
                          <div className="marquee-content-right">
                            {[...Array(3)].map((_, i) => (
                              homeData.collaborationSection.erpLogos.map((logo, index) => (
                                <img
                                  key={`right-${i}-${index}`}
                                  src={logo.url}
                                  alt={logo.name}
                                  title={logo.name}
                                  className="p-3"
                                  style={{
                                    height: '60px',
                                    width: 'auto',
                                    maxWidth: '120px',
                                    objectFit: 'contain',
                                    opacity: 0.7,
                                    filter: 'none',
                                    transition: 'all 0.3s ease'
                                  }}
                                  onError={(e) => {
                                    e.target.style.display = 'none';
                                  }}
                                />
                              ))
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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

            <div id="why-it-matters" className="rainbow-service-area rainbow-section-gap rainbow-section-gapBottom-big" style={{ scrollMarginTop: '120px' }}>
              <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className="section-title text-left"
                    data-sal="slide-up"
                    data-sal-duration="400"
                    data-sal-delay="150"
                  >
                    <h3 className="title text-center">
                      <span className="theme-gradient">{homeData.assistingSection.subtitle}</span>
                    </h3>
                    <h2 className="title mb--60">
                      {homeData.assistingSection.title.part1} <TextAnimation data={homeData.assistingSection.title.animation} className="d-block d-md-inline"/> 
                      <span className="d-block">{homeData.assistingSection.title.part2} </span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
        <ServiceStyleOne />
            </div>

            <div id="how-it-works" className="rainbow-service-area rainbow-section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className="section-title text-center pb--60"
                      data-sal="slide-up"
                      data-sal-duration="700"
                      data-sal-delay="100"
                    >
                      <h3 className="title">
                        <span className="theme-gradient">
                          {homeData.ocrSection.subtitle}
                        </span>
                      </h3>
                      <h2 className="title mb--0">
                        {homeData.ocrSection.title.part1} <TextAnimation data={homeData.ocrSection.title.animation} className="d-block d-md-inline"/>
                        <span className="d-block">{homeData.ocrSection.title.part2}</span>
                      </h2>
                    </div>
                  </div>
                </div>
                <TabStyleOne />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div id="benefits" className="rainbow-advance-tab-area aiwave-bg-gradient rainbow-section-gap-big" style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <h3 className="title text-center">
              <span className="theme-gradient">{homeData.benefitsSection?.title}</span>
          </h3>
          <div className="html-tabs" data-tabs="true">
            <AdvanceTab />
          </div>
        </div>
      </div>

      <div id="pricing" className="aiwave-pricing-area wrapper " style={{ scrollMarginTop: '120px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration="400"
                data-sal-delay="150"
              >
                <h2 className="title">
                  <span className="theme-gradient">{homeData.pricingSection.subtitle}</span>
                </h2>
                <h4 className="title w-600 mb--40">
                  {homeData.pricingSection.title}
                </h4>
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

      <div id="case-studies" className="rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title mb--10">{homeData.caseStudies.title}</h2>
                <p className="description" style={{ opacity: 0.8 }}>{homeData.caseStudies.subtitle}</p>
              </div>
            </div>
          </div>
          <div className="row mt--20">
            {homeData.caseStudies.items.map((item, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4 mt--30">
                <div
                  className="p-4 h-100"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '560px'
                  }}
                >
                  <div style={{ height: '50%', marginBottom: '16px' }}>
                    {item.imageUrl ? (
                      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                        <img
                          src={item.imageUrl}
                          alt={item.company}
                          style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                        />
                      </div>
                    ) : null}
                  </div>
                  <div style={{ height: '50%', display: 'flex', flexDirection: 'column' }}>
                    <div className="mb-2" style={{ color: '#4F46E5', fontWeight: 800, fontSize: '28px' }}>{item.stat}</div>
                    <h4 className="mb-2" style={{ fontWeight: 700 }}>{item.headline}</h4>
                    <div className="mb-3" style={{ opacity: 0.8 }}>{item.company}</div>
                    <p className="mb-4" style={{ opacity: 0.8, display: '-webkit-box', WebkitLineClamp: 6, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
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
                  <span className="theme-gradient">{homeData.testimonialSection.subtitle}</span>
                </h4>
                <h2 className="title mb--60">{homeData.testimonialSection.title}</h2>
              </div>
            </div>
          </div>
        </div>
        <Testimonial />
      </div>

      <div id="faq" className="rainbow-section-gap" style={{ paddingBottom: '120px' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title mb--10">FAQs</h2>
                <p className="description" style={{ opacity: 0.8 }}>{homeData.faq.title}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-10 mx-auto">
              {homeData.faq.items.map((item, idx) => (
                <details
                  key={idx}
                  className="mb-3"
                  style={{
                    background: isLightTheme ? 'rgba(0,0,0,0.04)' : 'rgba(255,255,255,0.04)',
                    border: isLightTheme ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px'
                  }}
                >
                  <summary
                    style={{ cursor: 'pointer', fontWeight: 600, fontSize: '18px', outline: 'none', listStyle: 'none', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: isLightTheme ? '#111827' : '#F3F4F6' }}
                    onClick={(e) => {
                      const el = e.currentTarget.querySelector('[data-chevron]');
                      if (el) {
                        const open = e.currentTarget.parentElement?.hasAttribute('open');
                        requestAnimationFrame(() => {
                          el.style.transform = open ? 'rotate(0deg)' : 'rotate(180deg)';
                        });
                      }
                    }}
                  >
                    <span>{item.q}</span>
                    <span data-chevron style={{ transition: 'transform 0.2s ease', display: 'inline-block', color: isLightTheme ? '#111827' : '#F3F4F6' }}>⌄</span>
                  </summary>
                  <div className="mt-0" style={{ opacity: isLightTheme ? 0.9 : 0.85, padding: '0 20px 16px', color: isLightTheme ? '#374151' : '#E5E7EB' }}>{item.a}</div>
                </details>
              ))}
              <div className="text-center mt-4">
                <div style={{ opacity: 0.8, marginBottom: '12px' }}>Didn't find what you're looking for?</div>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com', "_blank");
                  }}
                  className="btn-default"
                  style={{ cursor: 'pointer' }}
                >
                  Ask a question
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
