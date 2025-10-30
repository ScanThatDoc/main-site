import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Sal from "sal.js";
import bgShape from "../../public/images/cta-img/bg-shape.png";
import TextAnimation from "../Common/text-animation";
import ctaData from "../../data/cta.json";

const CtaTwo = ({isLightTheme}) => {
  const { cta } = ctaData;
  
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
                      {cta.subtitle}
                    </span>
                  </h4>
                  <h2 className="title w-600 mb--5">
                    {cta.title.part1} <TextAnimation data={cta.title.animation} className="d-block d-md-inline"/> {cta.title.part2}
                  </h2>
                  <p className="description b1">
                    {cta.description.map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < cta.description.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
                <div className="app-store-btn">
                  <Link 
                    className="btn-default"
                    href={process.env.NEXT_PUBLIC_WHATSAPP_API}
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
                        ${cta.button.popup.message}
                        <ul>
                          ${cta.button.popup.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                        </ul>
                        </span>
                      `;
                      document.body.appendChild(popup);
                      
                      setTimeout(() => {
                        document.body.removeChild(popup);
                        window.open(process.env.NEXT_PUBLIC_WHATSAPP_API, "_blank");
                      }, 4000);
                    }}
                  >
                    {cta.button.text}
                  </Link>
                </div>
              </div>
              <div className="content-right">
                <div className="img-right">
                  <Image
                    src={isLightTheme ? cta.images.light : cta.images.dark}
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
              <Image src={cta.images.bgShape} width={968} height={1103} alt="Bg shape" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaTwo;
