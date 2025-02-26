import React from "react";
import styles from './about.module.css';

const About = ({ aboutData }) => {
  return (
    <div className="rainbow-about-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h4 className="subtitle">
                <span className="theme-gradient">
                Transforming Document Processing with AI Innovation</span>
              </h4>
              {aboutData.data && aboutData.data.map((item, index) => (
                  <div className={`single-inner-box text-start ${styles['responsive-box']}`} key={index}>
                    <h3 className="section-title text-start mb-4">{item.title}</h3>
                    <div className="rbt-elements-area rbt-shadow-box hover-shadow-1">
                      <div className="wrapper p-4">
                        <div className="desc text-start">
                          {item.desc && 
                            item.desc.map((descItem, itemIndex) => (
                              <p className="text-start mb-3" key={itemIndex}>{descItem.description}</p>
                            ))
                          }
                          {item.subTitle && (
                            <h6 className={`text-start ${styles['subtitle-spacing']}`}>
                              {item.subTitle}
                            </h6>
                          )}
                          {item.list && (
                            <ul className="content-list text-start ps-4">
                            {item.list.map((listItem, itemIndex) => (
                              <li className="mb-2" key={itemIndex}>{listItem.item}</li>
                            ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
