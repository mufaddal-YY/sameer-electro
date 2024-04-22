import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

// Images
import sliderImg3 from "../../../images/home-bg.png";

class Slider1 extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrow: false,
      dots: true,
    };

    return (
      <>
        <Slider
          {...settings}
          className="tt-slider arrow-none slider-one slider-sp0"
        >
          <div className="slider-item">
            <div className="slider-thumb  ovbl-middle">
<img className="width100" src={sliderImg3} alt="" />            </div>
            <div className="slider-content">
              <div className="container">
                <div className="content-inner">
                  <h5 className="text-white">Innovate with us</h5>
                  <h2 className="title text-white">
                  Providing Turnkey <br /> Electrical Solutions<br /> since 1988
                  </h2>
                  {/* <p className="text-white">
                    Delivering business, technology, product and
                    commercialization strategies <br /> that align to scalable
                    platform solutions
                  </p> */}
                  <Link
                    className="btn-primary white outline button-md "
                    to={"/the-group"}
                  >
                    Learn More <i className="ti-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

         
        </Slider>
      </>
    );
  }
}

export default Slider1;
