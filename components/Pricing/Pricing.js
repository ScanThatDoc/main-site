import React, { useState } from "react";
import PricingData from "../../data/pricing.json";

const Pricing = ({ start, end, parentClass, isBadge,gap }) => {
  const [selected, setSelected] = useState("basic");
  const [sectionStates, setSectionStates] = useState({
    Premium: true,
    Enterprise: true,
  });

  const handleSubscription = (classNum) => {
    window.open(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/?subscriptionPlan=${classNum}`, "_blank");
  };

  const toggleSection = (subTitle) => {
    setSectionStates((prevState) => ({
      ...prevState,
      [subTitle]: !prevState[subTitle],
    }));
  };

  return (
    <>
      <div
        className="tab-content p-0 bg-transparent border-0 border bg-light"
        id="nav-tabContent"
      >
        {PricingData &&
          PricingData.pricing.map((data, index) => (
            <div
              className={`tab-pane fade ${data.isSelect ? "active show" : ""}`}
              id={data.priceId}
              role="tabpanel"
              aria-labelledby={`${data.priceId}-tab`}
              key={index}
            >
              <div className={`row row--15 ${gap}`}>
                {data.priceBody
                  .slice(start, end)
                  .map((innerData, innerIndex) => (
                    <div 
                      className={parentClass} 
                      key={innerIndex} 
                      onClick={() => {
                        setSelected(innerData.classNum);
                      }}
                    >
                      <div
                        className={`rainbow-pricing style-aiwave ${
                          selected === innerData.classNum ? "active" : ""
                        }`}
                      >
                        <div className="pricing-table-inner">
                          <div className="pricing-top">
                            <div className="pricing-header">
                              <div className="icon">
                                <i className={innerData.iconClass}></i>
                              </div>
                              <h4
                                className={`title color-var-${innerData.classNum}`}
                              >
                                {innerData.subTitle}
                              </h4>
                              <p className="subtitle">{innerData.title}</p>
                              <div className="pricing">
                                <span className="price-text">
                                  {innerData.price}
                                </span>
                                <span className="text">
                                  {innerData.priceFor}
                                </span>
                              </div>
                            </div>
                            <div className="pricing-body">
                              <div
                                className={`features-section has-show-more ${
                                  !sectionStates[innerData.subTitle]
                                    ? "active"
                                    : ""
                                }`}
                              >
                                <h6>{innerData.text}</h6>
                                <ul className="list-style--1 has-show-more-inner-content">
                                  {innerData.listItem.map((list, i) => (
                                    <li key={i}>
                                      <i className="fa-regular fa-circle-check"></i>
                                      {list.text}
                                    </li>
                                  ))}
                                </ul>
                                {innerData.isShow ? (
                                  <div
                                    className={`rbt-show-more-btn ${
                                      !sectionStates[innerData.subTitle]
                                        ? "active"
                                        : ""
                                    }`}
                                    onClick={() =>
                                      toggleSection(innerData.subTitle)
                                    }
                                  >
                                    Show More
                                  </div>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="pricing-footer">
                            <button
                              className={`w-100 btn-default ${
                                innerData.isSelect
                                  ? "color-blacked"
                                  : "btn-border"
                              }`}
                              onClick={() => handleSubscription(innerData.classNum)}
                            >
                              Get Started
                            </button>
                            <p className="bottom-text">{innerData.limited}</p>
                          </div>
                        </div>
                        {innerData.isSelect && isBadge ? (
                          <div className="feature-badge">Best Offer</div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default Pricing;
