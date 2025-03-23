import React, { useState, useEffect } from "react";
import Sal from "sal.js";

const TextAnimation = ({ data, className }) => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    Sal();

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
        <>
            <span className={`cd-headline rotate-1 ${className}`}>
                <span className="cd-words-wrapper">
                    {data.map((item, index) => (
                        <b
                            key={index}
                            className={
                                visibleIndex === index
                                    ? "is-visible theme-gradient"
                                    : "is-hidden theme-gradient"
                            }
                        >
                            {item}
                        </b>
                    ))}

                </span>
            </span>
        </>
    );
};

export default TextAnimation;