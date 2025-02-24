import Image from "next/image";
import React from "react";

const UtilizeBody = ({ utilize }) => {
  return (
    <>
      {utilize &&
        utilize.map((data, index) => (
          <div id={data.id} className="single-inner-box" key={index} style={{ scrollMarginTop: '100px' }}>
            <h3 className="section-title">{data.title}</h3>
            {data.body.map((inner, i) => (
              <div
                id={inner.id}
                className="rbt-elements-area rbt-shadow-box"
                key={i}
                style={{ scrollMarginTop: '100px' }}
              >
                <div className="wrapper">
                  <h4 className="title-sm">{inner.title}</h4>
                  <div className="desc">
                    {inner.img && (
                      <div className="image">
                        <Image
                          src={inner.img}
                          width={892}
                          height={617}
                          alt=""
                        />
                      </div>
                    )}
                    {inner.desc && <p className="b1">{inner.desc}</p>}
                    {inner.subTitle && <h6>{inner.subTitle}</h6>}
                    {inner.list && (
                      <ul className="content-list">
                      {inner.list.map((item, itemIndex) => (
                        <li key={itemIndex}>{item.text}</li>
                      ))}
                      {/* <li>
                        Transformer models, like OpenAI's GPT (Generative
                        Pre-trained Transformer) series, became
                      </li>
                      <li>
                        AI text generators, including GPT-3, have found
                        applications in chatbots, content creation
                        </li> */}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
    </>
  );
};

export default UtilizeBody;
