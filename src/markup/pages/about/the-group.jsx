import React, { Component } from "react";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";

// Layout
import Header from "../../layout/header/header3";
import Footer from "../../layout/footer/footer2";

// Elements
import ScrollToTop from "../../elements/ScrollToTop";

// Images
import team from "../../../images/team.png";
import CEO from "../../../images/CEO.png";
import Edge from "../../../images/edgeuhope.png";
import Laundromint from "../../../images/laundromint.png";

class About2 extends Component {

  render() {
    return (
      <>
        <Header />
        <ScrollToTop />

        <div className="page-content bg-white ">
          <div className="page-banner page-banner-sm bg-light bg-about">
            <div className="container">
              <div className="page-banner-entry text-center"></div>
            </div>
          </div>

          <div className="content-block" id="content-area">
            <div className="section-area section-sp4 ">
              <div className="container">
                <div className="text-center">
                  <div className="feature-bx2 m-t150">
                    <h3 style={{ color: "#171717" }}>About us</h3>
                  </div>
                </div>
                <div className=" feature-bx4 p-20">
                  <h3 className="title-head  text-left">Who we are?</h3> <hr />
                  <p className="text-left">
                    Sameer Electro Systems Pvt. Ltd. is a part of diversified Sameer Group. SESPL is a 30-year-young government-licensed
                    industrial turnkey electrical contractor.
                  </p>
                  <p className="text-left">
                    SESPL provides safe, time-bound, cost-efficient electrical
                    contracting to industrial, commercial, hospitality, and
                    institutional sectors. SESPL has built a niche by offering
                    customised solutions that save clients time, money, and
                    resources.
                  </p>
                  <p className="text-left">
                    SESPL has a diverse clientele. Its USP is recurring orders
                    and existing clients referring new and upcoming projects.
                    SESPL's customised solutions evaluate the needs and
                    practical requirements of all stakeholders.
                  </p>
                  <p className="text-left">
                    SESPL's project methodology involves understanding
                    requirements, planning resources, seeking for cost-saving
                    methods, and prioritising safety. We have repeat orders from
                    several industrial houses because we go above and beyond to
                    ensure client satisfaction.
                  </p>
                  <p className="text-left">
                    SESPL aims to become Maharashtra's most trusted electrical
                    contractor. We also want to be the best electrical
                    contracting firm to work for, guaranteeing our employees can holisticaly
                    grow with us.
                  </p>
                </div>
                <br /> <br />
               
              </div>
            </div>

            <div className="section-area section-sp1 bg-fix bg-primary">
              <div className="container">
                <h3 className="title-head text-white m-b50">Our Story</h3>
                <hr />
                <div className="row">
                  <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="feature-container left ">
                      <div className="icon-content ">
                        <p className="text-left text-white">
                        Sameer Group was founded by Mr. Shirish Deodhar who was an electrical engineer. Coming from a service-oriented background, a government career was natural for him as he got selected in the then MSEB as Sub Engineer and resumed his career with the state electricity board.
                        </p>
                        <p className="text-left text-white">
                        After working with MSEB for few years, he decided to pursue his passion. In 1988, he started taking small electrical jobs. Later he started Sameer Electricals and took contracts of residential projects. AV Bhat & Co., Atur India, and DSK group were drawn by the company's personnel and outstanding work.
                        </p>
                        <p className="text-left text-white">
                        In 2005, Mr. Shirish Deodhar passed away. After his unfortunate demise, Mr. Sameer Shirish Deodhar took charge of the company at the age of 21 years. Two years later, with the whole team's support he restored client, vendor and team's confidence. The company soon resumed growing.
                        </p>

                        <p className="text-left text-white">
                        By the end of 2007, the company completed all important projects to the satisfaction of our customers and received many new orders. Mr. Shirish Deodhar had developed such a collaborative culture in the team where they supported a 21 year old Mr. Sameer Deodhar to lead them and continued to win client confidence.
                        </p>
                       
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            <div className="section-area section-sp4 bg-fix bg-gray">
              <div className="container">

              <h4 className="title-head  text-left">The Group</h4> <hr />
                <div className="row">
                  
                  <div className="col-md-9">
                    <h6>SAMEER LAUNDRY CARE PVT. LTD.</h6>

                    <p>
                      SLCPL under its brand LaundroMINT provides a
                      unique solution for on premise laundry solutions to
                      Educational institutes, Hospitals as well as to Food and
                      Pharma Industries.
                    </p>

                    <p>To know more, visit: <a href="https://laundromint.co">www.laundromint.co</a> </p>
                  </div>
                  <div className="col-md-3 m-b30">
                    <img width="100%" src={Laundromint} alt="" />
                  </div>
                  <div className="col-md-9 m-b30">
                    <h6>Edgeuhope</h6>

                    <p>
                      Edgeuhope is a not for profit company, working focusly to
                      improve emotional and mental health of students from the
                      Age of 10-14. Till date Edgeuhope has touched lives of
                      more than 4000 students mostly from Underprivileged
                      background. Edgeuhope has a team of psychologists and subject
                      matter experts who design and execute various programmes
                      in schools using tools like drum circles, suryanamaskars,
                      Dance Movement Therapy, theatre etc.
                    </p>

                    <Link
                    className=" button-xs white "
                    to={"/csr"}
                  >
                    Learn More <i className="ti-arrow-right"></i>
                  </Link>
                  </div>
                  <div className="col-md-3 m-b30">
                    <img width="100%" src={Edge} alt="" />
                  </div>
                  <div className="col-md"></div>
                </div>

                
               

              </div>
            </div>

            <div className="section-area section-sp1 bg-fix bg-primary">
              <div className="container">
                <h3 className="title-head text-white m-b50">About the CEO</h3>
                <hr />
                <div className="row">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="feature-container left ">
                      <div className="icon-content ">
                        <p className="text-left text-white">
                        Graduated in electrical engineering, Sameer has a vast experience of more than 18 years in the electrical contracting field. He is a voracious reader, brilliant communicator and a music lover. He's travelled to 18 countries and loves to learn and explore various cultures and bring back the good to implement back here.
                        </p>
                        <p className="text-left text-white">
                        He is a member of board of Electrical Contractors’ Association of Maharashtra (Pune Region) and has a significant contribution in improving the functioning of the fraternity.
                        </p>

                        <p className="text-left text-white">
                        He initiated the "Shirish Deodhar Memorial – Best Electrical Installation Award," the sole honour for the electrical contracting fraternity where contractors from around the state compete and showcase their best projects to win the award . ECAM has been an instrumental partner in this process.
                        </p>

                        <p className="text-left text-white">
                        As a sensitive citizen and in order to give back to the society, Sameer founded EDGEUHOPE forum, a non-profit organisation in 2018 with a motto "No Kid Should Ever Commit Suicide”. EDGEUHOPE is working to improve schoolchildren's emotional health and has helped number of children in improving their emotional health across Maharashtra.

                        </p>
                        <p className="text-left text-white">
                        Sameer has a problem-solving approach and follows Mahatria's philosophy: "Let challenges come from wherever, answers from me."

                        </p>
                        
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <img width="100%" src={CEO} alt="" /> <br /> <br />
                    <h6 className="text-left text-white">
                      Mr. Sameer Shirish Deodhar – CEO – SESPL
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-area section-sp4 bg-fix bg-gray">
              <div className="container">
                <h3 className="title-head text-left">Milestones</h3> <hr />
                <div className="row">
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s">
                    <div className="feature-container feature-bx4 left ">
                      <div className="icon-content ">
                        <ul className="text-left">
                          <li>
                            July 2007 : ISO 9001 certified & launched our
                            website for SESPL
                          </li>
                          <li>
                            April 2008 : Started Building automation with
                            Honeywell & completed Aurangabad International
                            Airport in record time
                          </li>
                          <li>
                            August 2010: Bought New, Bigger and Better Office
                          </li>
                          <li>
                            June 2012 :Sameer Kats: Started our on site cable
                            testing division which bagged many big orders for
                            MSEDCL.
                          </li>
                          <li>
                            July2012 : Launched residential project
                            "Anandlahari" in Sus with Sanjeevani Developers
                          </li>
                          <li>
                            August : 2013 : Bags order for entire
                            electrification of a 4 star hotel in Pune.
                          </li>
                          <li>
                            January 2014: Ventured into the laundry business as
                            a part of diversification strategy. Launch of our
                            brand LaundroMINT
                          </li>
                          <li>
                            March 2014: Bagged order for Industrial
                            Electrification of 1 lac sqft. Area for a French
                            Multinational Corporation.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s">
                    <div className="feature-container feature-bx4 left">
                      <div className="icon-content ">
                        <ul className="text-left">
                          <li>
                            July 2014 : LaundroMINT opens Pune's first
                            professional laundromat outlet at Katraj.
                          </li>
                          <li>
                            Dec 2015 : Infra work of  worth 1.20 cr to a well known hospital chain in Pune.
                          </li>
                          <li>
                            July 2016: SESPL gets an opportunity to work with
                            Rolls Royce.
                          </li>
                          <li>
                            Jan 2017: SESPL increases its footprint in Chakan
                            Industrial belt by bagging 5 industrial projects
                            within a span of 3 months.
                          </li>
                          <li>
                            June 2018: SESPL grabs biggest single order worth
                            2.70 cr.
                          </li>
                          <li>
                            Sept 2018: CSR company edgeuhope which works on
                            emotional health of kids is launched: Our way of
                            giving back to the society.
                          </li>
                          <li>
                            March 2021: SESPL achieves its previous year's
                            turnover in spite of Pandemic
                          </li>
                          <li>
                            March 2022: Completed electrification for a corporate office of Hilti in record time.
                          </li>
                          <li>2023: Onwards to next growth journey</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           

            <div className="section-area section-sp1 bg-fix bg-gray">
              <div className="container">
                <div className="head-in ">
                  <h3 className="title-head text-left">The Team</h3> <hr />
                  <img
                    className="m-b30"
                    loading="lazy"
                    src={team}
                    width="100%"
                    alt="Team"
                  />
                  <p style={{ textAlign: "justify" }}>
                    SESPL has a strong and close-knit team of Engineers,
                    Professionals, Consultants, Supervisors, Wiremen and
                    Helpers. Some of our team members are working with us for
                    more than 20 years.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    SESPL has an in-house Electrical Design Support team to
                    facilitate the design requirements as well to hand over the
                    projects with right documentation such as as built drawings
                    etc.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    The Site execution team is also well experienced with the
                    key team members having an experience of more than 15 years
                    in their respective fields.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                  Some landmark projects:
                  </p>
                  <ul className="text-left">
                    <li>Asia’s Biggest Toyota Dealer Facility in Pune</li>
                    <li>Pune’s first Rolls Royce Office</li>
                    <li>22/11 KV, 10 MVA Sub Station- Fortaleza, Pune</li>
                    <li>
                      15 MVA Power network for a township – DSK Vishwa, Pune
                    </li>
                    <li>56 room 4 star hotel project in Viman Nagar, Pune</li>
                    <li>
                      Building Automation of Aurangabad International Airport
                    </li>
                    <li>1 Lac Sq. Ft Industrial Facility – Lonikand, Pune</li>
                    <li>
                      1 Acre – Single floor Office for an IT Company –
                      Magarpatta, Pune
                    </li>
                  </ul>
                </div>
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
