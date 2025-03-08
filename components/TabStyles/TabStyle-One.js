import Link from "next/link";
import Image from "next/image";
import React from "react";

import TabData from "../../data/tabStyle.json";
import { useAppContext } from "@/context/Context";

const TabStyleOne = () => {
  const { isLightTheme } = useAppContext();
  return (
    <>
      <div className="row row--30 align-items-center">
        <div className="col-lg-12">
          <div className="rainbow-default-tab style-three generator-tab-defalt">
            <ul className="nav nav-tabs tab-button" role="tablist">
              {TabData &&
                TabData.TabStyleOne.map((data, index) => (
                  <li
                    className="nav-item tabs__tab "
                    role="presentation"
                    key={index}
                  >
                    <button
                      className={`nav-link rainbow-gradient-btn without-shape-circle ${
                        data.isSelect ? "active" : ""
                      }`}
                      id={`${data.menuId}-tab`}
                      data-bs-toggle="tab"
                      data-bs-target={`#${data.target}`}
                      type="button"
                      role="tab"
                      aria-controls={data.target}
                      aria-selected="false"
                    >
                      <span className="generator-icon">
                        <Image
                          src={data.iconImg}
                          width={24}
                          height={24}
                          alt="Vedio Generator Icon"
                        />
                        {data.text}
                      </span>
                      <span className="border-bottom-style"></span>
                    </button>
                  </li>
                ))}
            </ul>

            <div className="rainbow-tab-content tab-content">
              {TabData &&
                TabData.TabStyleOne.map((tab, index) => (
                  <div
                    className={`tab-pane fade ${
                      tab.isSelect ? "show active" : ""
                    }`}
                    id={tab.target}
                    role="tabpanel"
                    aria-labelledby={`${tab.menuId}-tab`}
                    key={index}
                  >
                    <div className="inner">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="section-title">
                            <h2 className="title">{tab.title}</h2>
                            <div className="features-section">
                              <ul className="list-style--1">
                                {tab.subItem.map((item, i) => (
                                  <li key={i}>
                                    <i className="fa-regular fa-circle-check"></i>
                                    {item.text}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {
                              tab.text === "Automation using Whatsapp" ?
                                <div className="read-more">
                                  <Link
                                    className="btn-default"
                                    href="https://api.whatsapp.com/send?phone=60108366750&text=Hi%2C%20Please%20connect%20me%20to%20RapidScanAI"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      // Show popup with bullet points
                                      const popup = document.createElement('div');
                                      popup.style.cssText = ` position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); background: white; padding: 120px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); z-index: 1000; font-size: 30px; font-weight: 600; color: #000; `;
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
                                        window.location.href = "https://api.whatsapp.com/send?phone=60108366750&text=Hi%2C%20Please%20connect%20me%20to%20RapidScanAI";
                                      }, 4000);
                                    }}
                                  >
                                    Sign Up Now
                                    <i className="fa-sharp fa-solid fa-arrow-right ps-2"></i>
                                  </Link>
                                </div> :
                                <div className="read-more">
                                  <Link
                                    className="btn-default color-blacked"
                                    href="https://dev.scanthatdoc.com/"
                                  >
                                    Sign Up Now
                                    <i className="fa-sharp fa-solid fa-arrow-right ps-2"></i>
                                  </Link>
                                </div>

                            }
                            
                          </div>
                        </div>
                        <div className="col-xl-6 mt_md--30 mt_sm--30">
                          <div className="export-img">
                            <div className="inner-without-padding">
                              <div 
                                className="export-img img-bg-shape" 
                                style={{ 
                                    width: '100%',
                                    maxWidth: '593px',
                                    height: 'auto',
                                    aspectRatio: '593/362'
                                }}
                              >
                                {/* <Image
                                  src={isLightTheme ? tab.imgLight : tab.img}
                                  width={569}
                                  height={483}
                                  alt="Chat example Image"
                                /> */}
                                <iframe 
                                  style={{ width: '100%', height: '100%' }}
                                  src={isLightTheme ? `${tab.imgLight}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${tab.imgLight.split('/').pop()}` : `${tab.img}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=${tab.img.split('/').pop()}`}
                                  title={tab.text} 
                                  frameBorder="0" 
                                  allow="autoplay; encrypted-media" 
                                  allowFullScreen
                                >
                                </iframe>
                                <div className="image-shape"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabStyleOne;
