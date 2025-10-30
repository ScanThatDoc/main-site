import React from "react";
import privacyData from "../../data/privacy-policy.json";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="rbt-main-content mb--0">
        <div className="rbt-daynamic-page-content center-width">
          <div className="rbt-dashboard-content rainbow-section-gap">
            <div className="content-page pb--50 rbt-terms-content">
              <div className="chat-box-list">
                <div className="content">
                <ol style={{ listStyle: "none" }}>
                    <li>Last Updated: {privacyData.lastUpdated}</li>
                    <li>
                    {privacyData.introduction.join(" ")}
                    </li>
                  </ol>

                  {privacyData.sections.map((section, index) => {
                    const processedContent = [];
                    section.content.forEach((item, itemIndex) => {
                      if (typeof item === "string") {
                        processedContent.push({ type: "string", content: item, index: itemIndex });
                      } else if (item && item.type === "list") {
                        processedContent.push({ type: "list", content: item, index: itemIndex });
                      }
                    });

                    return (
                      <React.Fragment key={index}>
                        <h4>{section.title}</h4>
                  <ol className="rbt-terms-content" style={{ listStyle: "none" }}>
                          {processedContent.map((processedItem, processedIndex) => {
                            if (processedItem.type === "string") {
                              return <li key={processedItem.index}>{processedItem.content}</li>;
                            } else if (processedItem.type === "list") {
                              const listItem = processedItem.content;
                              const beforeText = processedIndex > 0 && processedContent[processedIndex - 1].type === "string" 
                                ? processedContent[processedIndex - 1].content 
                                : null;
                              const afterText = processedIndex < processedContent.length - 1 && processedContent[processedIndex + 1].type === "string"
                                ? processedContent[processedIndex + 1].content
                                : null;
                              
                              return (
                                <li key={processedItem.index}>
                                  {beforeText && <>{beforeText}</>}
                                  <ul>
                                    {listItem.items.map((listItemText, listIdx) => (
                                      <li key={listIdx}>{listItemText}</li>
                                    ))}
                    </ul>
                                  {afterText && <>{afterText}</>}
                    </li>
                              );
                            }
                            return null;
                          })}
                  </ol>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
