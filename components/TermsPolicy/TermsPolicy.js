import React from "react";
import termsData from "../../data/terms-policy.json";

const TermsPolicy = () => {
  return (
    <>
      <div className="rbt-main-content mb--0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content rainbow-section-gap">
            <div className="content-page">
              <div className="chat-box-list">
                <div className="content rbt-terms-content">
                  <ol style={{ listStyle: "none" }}>
                    <li>Last Updated: {termsData.lastUpdated}</li>
                    <li>
                      {termsData.introduction.join(" ")}
                    </li>
                  </ol>
                  {termsData.sections.map((section, index) => (
                    <React.Fragment key={index}>
                      <h4>{section.title}</h4>
                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                  </ol>
                    </React.Fragment>
                  ))}
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
