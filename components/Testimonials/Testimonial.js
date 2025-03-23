import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import "venobox/dist/venobox.min.css";
import darkBg from "../../public/images/light/service/bg-testimonial.png";
import darkBgHover from "../../public/images/light/service/bg-testimonial-hover.png";
import TestimonialData from "../../data/testimonial.json";
import { useAppContext } from "@/context/Context";

const Testimonial = () => {
  const { isLightTheme } = useAppContext();
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    dots: true,
    arrows: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
        maxWidth: window.innerWidth >= 992 ? "70%" : "100%",
      });
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <Slider
            {...settings}
            className="service-wrapper rainbow-service-slider-actvation slick-grid-15 rainbow-slick-dot rainbow-gradient-arrows"
          >
            {TestimonialData &&
              TestimonialData.testimonial.map((data, index) => (
                <div className="slide-single-layout" key={index}>
                  <div
                    className={`rainbow-box-card ${
                      data.isActive ? "active" : ""
                    } card-style-default testimonial-style-defalt has-bg-shaped`}
                  >
                    <div className="inner">
                      <div className="rating">
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                        <a href="#rating">
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </a>
                      </div>
                      <div className="content">
                        <p className="description">{data.desc}</p>
                        <div className="bottom-content">
                          <div className="meta-info-section">
                            <p className="title-text">{data.name}</p>
                            <p className="desc">{data.post}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-shape">
                      <Image
                        className="bg"
                        src={isLightTheme ? darkBg : data.img}
                        width={415}
                        height={287}
                        alt=""
                      />
                      <Image
                        className="bg-hover"
                        src={isLightTheme ? darkBgHover : data.imgHover}
                        width={415}
                        height={287}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
