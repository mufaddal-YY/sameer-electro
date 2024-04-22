import React, { Component } from "react";
import { Link } from "react-router-dom";

// Layout
import Header from "../../layout/header/header3";
import Footer from "../../layout/footer/footer2";

// Elements

import ScrollToTop from "../../elements/ScrollToTop";

import Slider from "../../elements/slider/slider";
import Testimonial from "../../elements/testimonial/testimonial1.jsx";

// Images

import web1 from "../../../images/planet.png";
import CON1 from "../../../images/con-1.png";
import CON2 from "../../../images/con-2.png";

import LogoCarousel from "../../elements/client-logo/logo-carousel";

class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <ScrollToTop />
        <Slider />


        <div className="section section-sp0 m-t50 bg-white">
          <div className="container">
            <LogoCarousel />
          </div>
        </div>

        <div className="page-content ">
          <div className="page-banner section-sp4 home-bnr bg-white">
            <div className="container">
              <div className="page-banner-entry">
                <div className="row align-items-center">
                  <div className="col-md-6 ">
                    <div className="text-center">
                      <img loading="lazy" src={web1} width="100%" alt="about" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="home-bnr-title text center">
                      <h4 className=" ">
                        We execute our ideas <br /> from start to Finish
                      </h4>
                      <hr />
                      <p>
                        SESPL is a Government licensed Industrial
                        Turnkey Electrical Contracting company with an
                        experience of more than 30 years. 
                      </p>
                      <Link className=" button-xs white " to={"/the-group"}>
                        Learn More <i className="ti-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-area section-sp4 bg-white">
            <div className="container">
              <div className="row feature-container feature-bx1 m-t20">
                <div
                  className="col-lg-8 col-md-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="feature-container">
                    <div className="icon-content">
                      <h5 className="ttr-tilte text-left">
                        Electrical Contracting
                      </h5>{" "}
                      <hr />
                      <p className="p-b30 text-left">
                        Sameer electro system Pvt. Ltd. Is a government licensed
                        electrical contracting company. <br className="hidden"/> We are capable of
                        handling of complete electrification of a project on
                        turnkey basis. 
                        <br /> <br />
                        <ul>
                          <li>
                            {" "}
                            <strong>HV/ LV Lines</strong>
                          </li>
                          <li>
                            {" "}
                            <strong>Transformer Sub Stations</strong>
                          </li>
                          <li>
                            <strong>LV Distribution panels</strong>
                          </li>
                          <li>
                            <strong>Lighting</strong>
                          </li>
                          <li>
                            <strong>Internal Electrification</strong>
                          </li>
                          <li>
                            <strong>
                              Liason with State Electricity Board
                            </strong>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
                {/* <div
                    className="col-lg-4 col-md-12 wow fadeInUp"
                    data-wow-delay="0.9s"
                  >
                    <div className="feature-container">
                      
                      <div className="icon-content">
                        <h5 className="ttr-tilte text-left">HV Product Distribution</h5> <hr />
                        <p className="p-b30 text-left">
                        Sameer Electro Systems Pvt.Ltd. is the authorized channel partner of ABB Ltd. for their High Voltage Circuit Breakers, Vacuum Circuit Breakers, Ring Main Units and Compact Sub-stations ranging from 11 KV to 33 KV & above. The company provides 'supply-to-commissioning' services under one roof.
                        </p>
                      </div>
                    </div>
                  </div> */}
                <div
                  className="col-lg-4 col-md-6 wow fadeInUp"
                  data-wow-delay="0.6s"
                  style={{ margintop: "-70px" }}
                >
                  <div
                    className="feature-container feature-bx2 "
                    style={{ backgroundColor: "#131946" }}
                  >
                    <div className="icon-content">
                      <h3 className="ttr-tilte text-left text-white">
                        Domains
                      </h3>{" "}
                      <hr />
                      <p className="p-b10 ttr-tilte text-white ">
                        <ul className="text-left m-l80 fs18" style={{textAlign: "left"}}>
                          <li>Industrial</li>
                          <li>IT & ITes</li>
                          <li>Hospitality</li>
                          <li>Healthcare</li>
                          <li>Townships</li>
                          <li>Commercial</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-area about-media-bx parallax bg-gray">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-lg-6 align-items-center home-bg1  "
                  data-wow-delay="0.4s"
                >
                  <div className="filler"></div>
                </div>
                <div
                  className="col-lg-6 p-40 wow fadeInLeft p-30"
                  data-wow-delay="0.8s"
                >
                  <h4 className="title-head m-t40">
                    {" "}
                    Excellent Company Quality Services
                  </h4>{" "}
                  <hr />
                  <p>
                    Going beyond our call of duty to ensure client satisfaction
                    and apt solution is the reason of having repeat orders from
                    many industrial houses 
                  </p>
                  <p>
                    SESPL envisages to become the most trusted and ethical
                    electrical contracting company in Maharashtra. At the same
                    time, we aim to become the best to work Electrical
                    contracting company ensuring we give the right trajectory
                    path for our employees to grow with us.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-area bg-gray ">
            <div className="container-fluid">
              <div className="row">
                <div
                  className="col-lg-6  order-lg-2 home-bg2  "
                  data-wow-delay="0.4s"
                >
                  <div className=" filler"></div>
                </div>
                <div
                  className="col-lg-6 p-40 wow fadeInLeft"
                  data-wow-delay="0.8s"
                >
                  <h4 className="title-head m-b30 m-t40"> Strong Client Base</h4>{" "}
                  <hr />
                  <p className="m-b30">
                    The company's biggest strength is its client base, which
                    includes both large corporations and start-ups. The
                    company's USP is the ability to repeat orders from existing clients who refer others to the company for new
                    projects.
                  </p>
                  <div className="row">
                    <div className="col-md"></div>
                    <div className="col-md-5 feature-bx3">
                      {" "}
                      <img width={"100%"} src={CON1} alt="" />{" "}
                    </div>
                    <div className="col-md-5 feature-bx3">
                      {" "}
                      <img width={"100%"} src={CON2} alt="" />{" "}
                    </div>
                    <div className="col-md"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section-area section-sp4 ovpr-dark bg-white">
            <div className="container">
              <Testimonial />
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Index;
