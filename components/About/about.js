import React from "react";

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
                <div key={index}>
                  <h2 className="title" key={index}>
                    {item.title}
                  </h2>
                  <p className="description" key={index}>
                    {item.description}
                  </p>
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
