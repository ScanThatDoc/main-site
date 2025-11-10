import React from "react";
import aboutData from "../../data/about.json";

const About = () => {
  const { about } = aboutData;

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
                      {about.subtitle}
                    </span>
                  </h4>

                  {about.sections.map((section, index) => (
                    <div key={index}>
                      <h4>{section.title}</h4>
                      <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            {typeof item === "string" ? (
                              item
                            ) : (
                              <>
                                {item.intro}
                                <ul>
                                  {item.list.map((listItem, listIndex) => (
                                    <li key={listIndex}>{listItem}</li>
                                  ))}
                                </ul>
                              </>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
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

export default About;
