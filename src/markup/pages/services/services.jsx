import React, { Component } from "react";
import { Link } from "react-router-dom";

import Testimonial from "../../elements/testimonial/testimonial1";
// Layout
import Header from "../../layout/header/header3";
import Footer from "../../layout/footer/footer2";

// Elements
import ScrollToTop from "../../elements/ScrollToTop";
// Images
import Elec from "../../../images/elec-con.png";
import Hvlv from "../../../images/HVLV.jpg";
import Lv_distribution from "../../../images/Lv_distribution.jpg";
import Lighting from "../../../images/lighting.jpg";
import Internal_electrification from "../../../images/internal_electrification.jpg";
import Liasoning from "../../../images/Liasoning.jpg";
import LogoCarousel from "../../elements/client-logo/logo-carousel";

const content = [
  {
    thumb: Hvlv,
    title: "HV/LV: Infra Development",
    description:
      "Infra development services are catered to builders, industries, institutions as well as commercial & healthcare projects. We have the necessary tools and tackles such as cable drum lifters etc.required. Having laid more than 100 Kms of cables till date, our team is well experienced to execute the job.",
  },

  {
    thumb: Elec,
    title: "Transformer Sub Stations",
    description:
      "Transformer sub stations are the heart of any project. We executive complete installation and commissioning of power as well as distribution transformer sub stations from 10MVA to 100 KVA. We have completed 22KV , 10 MVA power sub station with VCBs, Isolators as well as OLTC and RTCC panels and relay settings.",
  },

  {
    thumb: Lv_distribution,
    title: "LV Distribution panels",
    description:
      "This is a very crucial aspect of any project. Depending on the type of operational flow of the project, we custom design, supply and install LV Panel boards of excellent quality. Our panels provide safety as well as flexibility in the operations of any project. The use of latest technology alongside ease of operation in minimum space is out usp.",
  },

  {
    thumb: Lighting,
    title: "Lighting",
    description:
      "For any industrial or commercial unit, apt lighting is very important to function properly. We specialise in installation the right lighting solutions as per the actual work flow as well as considering the desired lux level of the stake holders. The lighting work is properly done with connector boxes, supports and necessary protection devices. Energy saving is also achieved with selection of optimumfittings as well through use of sensors.",
  },

  {
    thumb: Internal_electrification,
    title: "Internal Electrification",
    description:
      "Any office area/interior space requires lights, power points as well as data connectivity. According to the interior layout and user requirements, we understand and execute the internal electrification with sufficient provisions to provide future flexibility as well user safety.",
  },

  {
    thumb: Liasoning,
    title: "Liason with State Electricity Board",
    description:
      "This becomes a part of our project execution requirement. We have very good liason with MSEDCL and Electrical Inspector offices to get the required Power Sanction and relevant approvals from the said authorities within time frame of the project. We have designed a very unique & proprietory scheduling format to avoid any delays",
  },
];

class About2 extends Component {
  

  render() {
    return (
      <>
        <Header />
        <ScrollToTop />

        <div className="page-content bg-white ">
          <div className="page-banner page-banner-sm bg-gray bg-about">
            <div className="container">
              <div className="page-banner-entry text-center"></div>
            </div>
          </div>

          <div className="content-block" id="content-area">
            <div className="section-area section-sp4 bg-white">
              <div className="container">
                <div className="text-center">
                  <div className="feature-bx2 m-t150">
                    <h3 style={{ color: "#171717" }}>Services</h3>
                  </div>
                </div>

                
                  <div className="container">
                    {content.map((item, id) => (
                      <div className="row">
                        <div
                          className="col-lg-4 wow order-md-2 fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <div className="feature-container">
                            <div className="icon-content m-b20">
                              <img width={"100%"} src={item.thumb} alt="" />
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-lg-8 wow fadeInUp"
                          data-wow-delay="0.2s"
                        >
                          <div className="feature-container feature-bx4">
                            <div className="icon-content">
                              <h5 className="ttr-tilte text-left">
                                {item.title}
                              </h5>{" "}
                              <hr />
                              <p className="p-b10 text-left">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}

                    <div className="col-md-12 text-center m-b30">
                      <Link
                        className="btn-primary  white outline button-xl "
                        to={"/contact"}
                      >
                        Enquire Now <i className="ti-arrow-right"></i>
                      </Link>
                    </div>

                    <div className="head-in feature-bx2">
                      <h3 className="title-head text-center">
                        Project Philosophy
                      </h3>
                      <hr />
                      <p className="p-20" style={{ textAlign: "justify" }}>
                        At SESPL, every project is different and thereby every
                        project is important. Our team of engineers, works
                        towards giving the best and safe electrical solution in
                        a limited time frame. We always give 100% and a little
                        more in all the projects that we execute.
                      </p>
                      <h4 className="title-head text-center">
                        Our Differentiating Factor:
                      </h4>
                      <hr />
                      <p className="p-20" style={{ textAlign: "justify" }}>
                        SESPL is a solution driven company. In every project we
                        ensure we add some more value to the project than doing
                        just run of the mill job. We have time and again given
                        apt solutions in the best interest of the project, which
                        has won trust of many of our customers ensuring repeat
                        orders as well as referral business from them time and
                        again.
                      </p>
                      <h6 className="p-20" style={{ textAlign: "justify" }}>
                        Some examples of our solution-based approach:
                      </h6>
                      <p className="p-20" style={{ textAlign: "justify" }}>
                        <ul>
                          <li>
                            Giving a very cost effective U-Hook Solution for
                            hanging light fittings for 80,000 Sq.ft. Industrial
                            project in Lonikand. Effectively Saving fabrication
                            cost and three months of time for the customer.
                            Resulting in a clean and hurdle free shop floor.
                            <br />
                            Cost Saving : Rs.45 lacs approx. <br />
                            Time Saving : 3 months
                          </li>
                          <br />
                          <li>
                            Avoiding addition of transformer of new plant in 2018 for a German
                            Engineering Unit in Chakan. We insisted the client
                            not to go for additional transformer as we were
                            confident about our load forecasting and atleast for
                            4 years they will be able to suffice on the existing
                            transformer. Its 2022, still the load of both plants
                            together is within the existing transformer limit.
                            <br /> Cost Saving : Rs. 35 lacs
                            <br />
                            Time Saving : 2 months
                          </li>
                          <br />
                          <li>
                            Right Solution for Cable Trays suggested for a Pre
                            cast Shed for an Auto Ancillary Industry in
                            Pirangut. We won the contract because of this
                            solution thereby resulting in a well executed
                            project as well as cost saving.
                            <br /> Cost Saving : Rs. 15 Lacs
                            <br /> Time Saving : 1 month
                          </li>
                          <br />
                          <li>
                            Taking Load Release in 2 Phases from MSEDCL for an
                            Institutional HT consumer. Understanding that it was
                            an international university being developed in phases.
                            We got the total power sanction, but we specially
                            got the load released in 2 phases. So till phase 1
                            was complete we only paid for 25% of the total load
                            as minimum charges to MSEDCL.
                            <br /> Cost Saving : Rs.120 lacs in 3 years
                          </li>
                          <br />
                        </ul>
                      </p>
                    </div>
                  </div>
                
              </div>
            </div>

            <div className="section section-sp0 bg-white">
          <div className="container">
            <LogoCarousel />
          </div>
        </div>

            <div className="section-area section-sp4 ovpr-dark bg-white">
              <div className="container">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>

        <Footer />

        
      </>
    );
  }
}

export default About2;
